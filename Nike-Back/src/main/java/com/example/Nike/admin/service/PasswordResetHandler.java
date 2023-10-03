package com.example.Nike.admin.service;

import com.example.Nike.admin.Exception.TokenGenerationException;
import com.example.Nike.admin.Exception.UserNotFoundException;
import jakarta.mail.MessagingException;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;

@Service
public class PasswordResetHandler {

    private JavaMailSender javaMailSender;
    private final ResetTokenService resetTokenService;

    private final  UserService userService ;

    public PasswordResetHandler(JavaMailSender javaMailSender, ResetTokenService resetTokenService , UserService userService) {
        this.javaMailSender = javaMailSender;
        this.resetTokenService = resetTokenService;
        this.userService = userService ;
    }

    public void handlePasswordResetRequest(String email) throws UserNotFoundException, TokenGenerationException, MessagingException, UnsupportedEncodingException {
        String token = generateTokenForUser(email);
        sendResetEmail(email, token);
    }

    private String generateTokenForUser(String email) throws UserNotFoundException, TokenGenerationException {
        String token = RandomString.make(30);
        resetTokenService.generateResetTokenForUser(email, token);
        return token;
    }



    private void sendResetEmail(String email, String token) throws UserNotFoundException, TokenGenerationException, MessagingException, UnsupportedEncodingException {

        userService.sendEmail(email ,token );

    }

}

package com.example.Nike.admin.Controller;

import com.example.Nike.UserMapper.UpdateUserDTO;
import com.example.Nike.UserMapper.UserMapper;
import com.example.Nike.admin.Entity.ResetToken;
import com.example.Nike.admin.Entity.User;
import com.example.Nike.admin.Exception.TokenGenerationException;
import com.example.Nike.admin.Exception.UserNotFoundException;
import com.example.Nike.admin.service.PasswordResetHandler;
import com.example.Nike.admin.service.ResetTokenService;
import com.example.Nike.admin.service.UserService;
import com.example.Nike.request.ForgotPasswordRequest;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.mail.javamail.JavaMailSender;

import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.util.Random;
import java.util.RandomAccess;
import java.util.random.RandomGenerator;

@RestController
@RequestMapping("/api/v1/reset-password")


public class ForgotPasswordController {

    @Autowired
    private UserService userService;

    @Autowired
    private ResetTokenService resetTokenService;

@Autowired
PasswordResetHandler passwordResetHandler ;


    @PostMapping("/forgot_password")
    public ResponseEntity<Void> showForgotPasswordForm(@RequestBody ForgotPasswordRequest forgotPasswordRequest ) throws MessagingException, UnsupportedEncodingException, UserNotFoundException, TokenGenerationException {
        String email = forgotPasswordRequest.getEmail() ;
        passwordResetHandler.handlePasswordResetRequest(email);
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


    @GetMapping("/reset_password")
    public ResponseEntity<?> redirectForgotPasswordForm(@RequestParam("token") String token) throws TokenGenerationException {
          User user = resetTokenService.getUserByToken(token) ;
         if (user != null  && resetTokenService.isResetTokenValid(token)  ) {
            URI google = URI.create("http://localhost:5173/update-password?token="+token);
            return ResponseEntity.status(HttpStatus.FOUND).location(google).build();
        } else {
            URI google = URI.create("https://www.google.co.ma/");
            return ResponseEntity.status(HttpStatus.FOUND).location(google).build();
        }
    }

    @PostMapping ("/update_password")
    public ResponseEntity<?>  updatePassword(@RequestParam("token") String token , @RequestBody UpdateUserDTO updateUserDTO) throws UserNotFoundException, TokenGenerationException {
        User user = resetTokenService.getUserByToken(token);

        if (user != null  && resetTokenService.isResetTokenValid(token)  ) {
            userService.updateUser(user.getId() , updateUserDTO) ;
        }
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }




}
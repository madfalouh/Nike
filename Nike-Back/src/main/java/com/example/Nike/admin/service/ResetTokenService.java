package com.example.Nike.admin.service;

import com.example.Nike.admin.Entity.ResetToken;
import com.example.Nike.admin.Entity.User;
import com.example.Nike.admin.Exception.TokenGenerationException;
import com.example.Nike.admin.Exception.UserNotFoundException;
import com.example.Nike.admin.Repository.ResetTokenRepository;
import com.example.Nike.admin.Repository.UserRepository;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;
@Service
public class ResetTokenService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ResetTokenRepository tokenRepository;

    public ResetToken generateResetTokenForUser(String email, String tokenValue)
            throws UserNotFoundException, TokenGenerationException {

        User user = userRepository.findUserByEmail(email);
        if(user == null) {
            throw new UserNotFoundException("User with email " + email + " not found");
        }

        ResetToken existingToken = tokenRepository.findByUserId(user.getId());

        if(existingToken == null) {
            existingToken = new ResetToken();
            existingToken.setUser(user);
        }

        try {
            existingToken.setToken(tokenValue);
            existingToken.setExpiryDate(LocalDateTime.now().plusMinutes(5));
        } catch(Exception e) {
            throw new TokenGenerationException("Error while generating reset token for user with email: " + email);
        }

        tokenRepository.save(existingToken);

        return existingToken;
    }


    public boolean isResetTokenValid(String tokenValue) throws TokenGenerationException {
        ResetToken token = tokenRepository.findByToken(tokenValue);
        if( token != null && token.getExpiryDate().isAfter(LocalDateTime.now()) ==false ) {
            throw new TokenGenerationException("Error genearting the token");

        }

        return true ;

    }

    public User getUserByToken(String tokenValue) {
         ResetToken token = tokenRepository.findByToken(tokenValue);
        if(token != null) {
            return token.getUser();
        }
        return null;
    }


}

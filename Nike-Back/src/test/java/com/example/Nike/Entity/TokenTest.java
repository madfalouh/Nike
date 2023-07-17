package com.example.Nike.Entity;

import com.example.Nike.admin.Entity.Token;
import com.example.Nike.admin.Entity.TokenType;
import com.example.Nike.admin.Entity.User;
import com.example.Nike.admin.Repository.TokenRepository;
import com.example.Nike.admin.Repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.assertNotNull;


@SpringBootTest
public class TokenTest {

    @Autowired
    private TokenRepository tokenRepository;

    @Autowired
    private UserRepository userRepository;

    private User testUser;

    @BeforeEach
    public void setup() {
        testUser = new User();
        // Set properties for testUser
        userRepository.save(testUser);
    }

    @Test
    void insertTokenTest() {
        User user = new User();
        user.setEmail("test@example.com");
        // Set other required fields on User here

        userRepository.save(user); // Assuming userRepository exists and is correctly set up

        Token token = Token.builder()
                .token("testToken")
                .tokenType(TokenType.BEARER)
                .revoked(false)
                .expired(false)
                .user(user)
                .build();

        tokenRepository.save(token);

        assertNotNull(token.getId());
    }
}

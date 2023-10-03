package com.example.Nike.admin.service;

import com.example.Nike.admin.Entity.User;
import com.example.Nike.admin.Repository.UserRepository;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;


@Service
public class GoogleService {
    @Autowired
    UserRepository repository ;
    public User registerNewUserFromGoogle(String tokenId) throws GeneralSecurityException, IOException {
        GoogleIdToken.Payload payload = getPayloadFromToken(tokenId);

        String email = payload.getEmail();
        String name = (String) payload.get("name");
        String pictureUrl = (String) payload.get("picture");

        User newUser = new User();
        newUser.setEmail(email);
        newUser.setFirstName(name);
        newUser.setSecondName(name);
        // Store other details as needed (like picture URL)

        // You might want to set a default role or any other necessary defaults

        return newUser;
    }

    private GoogleIdToken.Payload getPayloadFromToken(String tokenId) throws GeneralSecurityException, IOException {

            JacksonFactory jacksonFactory = new JacksonFactory();

            GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(new NetHttpTransport(), jacksonFactory)
                    .setAudience(Collections.singletonList("238602174686-hupc7111dk4ve7hoft6im4c1ffmcfdar.apps.googleusercontent.com"))
                    .build();

            GoogleIdToken idToken = verifier.verify(tokenId);
            if (idToken != null) {
                return idToken.getPayload();
            } else {
                throw new IllegalArgumentException("Invalid token");

            }
    }



    public String verifyGoogleToken(String tokenId) throws Exception {
        JacksonFactory jacksonFactory = new JacksonFactory();

        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(new NetHttpTransport(), jacksonFactory)
                .setAudience(Collections.singletonList("238602174686-hupc7111dk4ve7hoft6im4c1ffmcfdar.apps.googleusercontent.com"))
                .build();

        GoogleIdToken idToken = verifier.verify(tokenId);
        if (idToken != null) {
            GoogleIdToken.Payload payload = idToken.getPayload();

            // Check if the user is a valid user by checking user's email
            String email = payload.getEmail();

            // You can also get other information about the user like name, picture, etc.
            // String name = (String) payload.get("name");
            // String pictureUrl = (String) payload.get("picture");

            return email;
        } else {
            throw new IllegalArgumentException("Invalid token");
        }
    }

 public User verifyUserOrRegisterWithGoogle(String email  , String token  ) throws GeneralSecurityException, IOException {
    User user = (User) repository.findByEmail(email);
    if (user == null) {
        user = registerNewUserFromGoogle(token);
    }

        return  user ;
}

}
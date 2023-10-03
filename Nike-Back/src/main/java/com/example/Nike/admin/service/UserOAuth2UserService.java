package com.example.Nike.admin.service;

import com.example.Nike.admin.Entity.User;
import com.example.Nike.admin.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
public class UserOAuth2UserService  extends DefaultOAuth2UserService {


    @Autowired
    UserRepository userRepository ;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {

        OAuth2User user = super.loadUser(userRequest);

        String userEmail = user.getAttribute("email");
        // Check if user exists in our database
        if (userRepository.findUserByEmail(userEmail) != null ) {
            // If user is new, store them in the database
            User newUser = new User();
            newUser.setEmail(userEmail);
            newUser.setFirstName(user.getAttribute("name"));
            // add other attributes if needed
            userRepository.save(newUser);
        }

        return new UserOAuth2user(user);
    }

}

package com.example.Nike.admin.config;

import com.example.Nike.UserMapper.UpdateUserDTO;
import com.example.Nike.admin.Repository.UserRepository;
import com.example.Nike.admin.service.UserService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

 
import java.io.IOException;

@Component
public class CustomSuccessHandler implements AuthenticationSuccessHandler {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private UserService userService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        String redirectUrl = "/dashboard";  // Default redirection URL

        if(authentication.getPrincipal() instanceof DefaultOAuth2User) {
            DefaultOAuth2User userDetails = (DefaultOAuth2User) authentication.getPrincipal();

            String username = userDetails.getAttribute("email");
            if (username == null) {
                username = userDetails.getAttribute("login") + "@gmail.com";
            }

            // If the user is not in the database, save them
            if(userRepo.findByEmail(username) == null) {
                UpdateUserDTO user = new UpdateUserDTO();
                user.setEmail(username);
                user.setFirstName(username);
                user.setPassword("Dummy");  // We're setting a dummy password here, you might want to adjust this according to your requirements

                try {
                    userService.save(user);
                } catch (Exception e) {
                    throw new RuntimeException(e.getMessage(), e);  // Propagate the error
                }
            }
        }

        // Redirect the user after successful login
        new DefaultRedirectStrategy().sendRedirect(request, response, redirectUrl);
    }
}

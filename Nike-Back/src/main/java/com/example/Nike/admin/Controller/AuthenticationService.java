package com.example.Nike.admin.Controller;

import com.example.Nike.admin.Entity.Role;
import com.example.Nike.admin.Entity.Token;
import com.example.Nike.admin.Entity.TokenType;
import com.example.Nike.admin.Entity.User;
import com.example.Nike.admin.Exception.UserAlreadyExistException;
import com.example.Nike.admin.Exception.WrongCredentialsException;
import com.example.Nike.admin.Repository.RoleRepository;
import com.example.Nike.admin.Repository.TokenRepository;
import com.example.Nike.admin.Repository.UserRepository;
import com.example.Nike.admin.Rsponse.AuthenticationResponse;
import com.example.Nike.admin.Security.JwtService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    private  final UserRepository userRepository ;
    private final RoleRepository  roleRepository ;

    public AuthenticationResponse register(User request) throws UserAlreadyExistException {

        if(userRepository.findUserByEmail(request.getEmail()) !=null  ) {
            throw  new UserAlreadyExistException("User already exists login here") ;
        }

         Set<Role> roles = new HashSet<>();

        for (Role roleDTO : request.getRoles()) {
            Role role = roleRepository.findByName(roleDTO.getName());
            if (role != null) {
                roles.add(role);
            }
        }

        var user = User.builder()
                .firstName(request.getFirstName())
                .secondName(request.getSecondName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .enabled(true)
                .roles(roles)
                .build();





        var savedUser = repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user  , user.isRememberMe() );
        saveUserToken(savedUser, jwtToken);
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .build();
    }

    public AuthenticationResponse authenticate(User request) throws WrongCredentialsException {

try {
    authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                    request.getEmail(),
                    request.getPassword()
            )
    );
}  catch (AuthenticationException ex) {

 throw  new WrongCredentialsException("Incorrect Username or Password or your account is disabled") ;
}


        var user = repository.findByEmail(request.getEmail()) ;

        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user  , request.isRememberMe());


        saveUserToken((User) user, jwtToken);




        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .build();
    }

    private void saveUserToken(User user, String jwtToken) {
        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }


    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.listAllTokens(user.getId());
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }


    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException  {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String userEmail;
        if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
            return;
        }
        refreshToken = authHeader.substring(7);
        userEmail = jwtService.extractUsername(refreshToken);
        if (userEmail != null) {
            var user = this.repository.findByEmail(userEmail) ;

            if (jwtService.isTokenValid(refreshToken, user)) {
                var accessToken = jwtService.generateToken(user);
                revokeAllUserTokens((User) user);
                saveUserToken((User) user, accessToken);
                var authResponse = AuthenticationResponse.builder()
                        .accessToken(accessToken)
                        .refreshToken(refreshToken)
                        .build();
                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }
    }


}
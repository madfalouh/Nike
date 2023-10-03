package com.example.Nike.admin.Auth;
import com.example.Nike.admin.Exception.UserAlreadyExistException;
import com.example.Nike.admin.Exception.WrongCredentialsException;
import com.example.Nike.admin.Rsponse.AuthenticationResponse;
import com.example.Nike.admin.Controller.AuthenticationService;
import com.example.Nike.admin.Entity.User;
import com.example.Nike.admin.service.GoogleService;
import com.example.Nike.request.GoogleAuthRequest;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5174")

public class AuthenticationController {

    private final AuthenticationService service;
    private final GoogleService googleService ;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody User request) throws UserAlreadyExistException {
        return ResponseEntity.ok().body(service.register(request));
    }

    @PostMapping("/authenticate")
    @ResponseBody
    public ResponseEntity  authenticate(@RequestBody User request
    ) throws WrongCredentialsException {
        return ResponseEntity.ok().body(  service.authenticate(request)  );
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<Void> refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        service.refreshToken(request, response);
        return ResponseEntity.ok().build();
    }


    @PostMapping("/google-authenticate")
    public ResponseEntity authenticateWithGoogle(@RequestBody GoogleAuthRequest request) throws WrongCredentialsException, Exception {
        String emailFromGoogle = googleService.verifyGoogleToken(request.getGoogleToken());
        User user =  googleService.verifyUserOrRegisterWithGoogle(emailFromGoogle , request.getGoogleToken()) ;
        return ResponseEntity.ok().body( service.authenticate(user));

    }


}





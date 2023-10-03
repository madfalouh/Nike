package com.example.Nike.admin.Exception;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import java.io.IOException;

@Component
public class CustomAccessDeniedHandler implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException {

        System.out.println(authException);
        System.out.println("**********************************************************");

        response.setContentType("application/json;charset=UTF-8");
        response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        response.getWriter().write(
                String.format(
                        "{ \"timestamp\": \"%s\", \"status\": 403, \"error\": \"Forbidden\", \"message\": " + "\""+ authException.getMessage()  +  "\""+  " }",
                        java.time.LocalDateTime.now()
                )
        );
    }


}

package com.example.Nike.admin.Security;

import com.example.Nike.admin.Exception.CustomAccessDeniedHandler;
import com.example.Nike.admin.config.CustomSuccessHandler;
import com.example.Nike.admin.service.UserOAuth2UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.http.HttpMethod.*;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class WebSecurity {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    private final LogoutHandler logoutHandler;

    @Autowired
    private CustomAccessDeniedHandler accessDeniedHandler;

    @Autowired
    private CustomSuccessHandler successHandler ;

    @Autowired
    private UserOAuth2UserService userOAuth2UserService  ;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {


        http
                .csrf()
                .disable()
                .cors()
                .and()
                .authorizeHttpRequests()
                .requestMatchers(
                        "/api/v1/auth/**",
                        "/reset_password",
                        "/api/v1/reset-password/**" ,
                        "/v2/api-docs",
                        "/v3/api-docs",
                        "/v3/api-docs/**",
                        "/swagger-resources",
                        "/swagger-resources/**",
                        "/configuration/ui",
                        "/configuration/security",
                        "/swagger-ui/**",
                        "/webjars/**",
                        "/swagger-ui.html",
                        "/api/v1/reset-password/**"
                )

                .permitAll()



      /*          .requestMatchers("/api/v1/management/**").hasAnyRole(ADMIN.name(), MANAGER.name())


                .requestMatchers(GET, "/api/v1/management/**").hasAnyAuthority(ADMIN_READ.name(), MANAGER_READ.name())
                .requestMatchers(POST, "/api/v1/management/**").hasAnyAuthority(ADMIN_CREATE.name(), MANAGER_CREATE.name())
                .requestMatchers(PUT, "/api/v1/management/**").hasAnyAuthority(ADMIN_UPDATE.name(), MANAGER_UPDATE.name())
                .requestMatchers(DELETE, "/api/v1/management/**").hasAnyAuthority(ADMIN_DELETE.name(), MANAGER_DELETE.name()) */


                 .requestMatchers("/api/v1/admin/**").hasRole("Admin")

                 .requestMatchers(GET, "/api/v1/admin/**").hasAuthority("Admin")
                 .requestMatchers(POST, "/api/v1/admin/**").hasAuthority("Admin")
                 .requestMatchers(PUT, "/api/v1/admin/**").hasAuthority("Admin")
                 .requestMatchers(DELETE, "/api/v1/admin/**").hasAuthority("Admin")
                .requestMatchers("/api/v1/admin/**").hasAnyAuthority("Admin")
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling().authenticationEntryPoint(accessDeniedHandler)
                .and()

                .oauth2Login()
                .loginPage("/login")
                .successHandler(successHandler)
                .userInfoEndpoint()
                .userService(userOAuth2UserService)
                .and()
                .and()
                .logout()
                .logoutUrl("/api/v1/auth/logout")
                .addLogoutHandler(logoutHandler)
                .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())
        ;

        return http.build();
    }
}
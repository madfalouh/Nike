package com.example.Nike.Entity;

import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncoderTest {

    @Test
    public void  testEncodePassword() {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder() ;
        String rawPassw = "nam2020" ;
        String encodedPassword = passwordEncoder.encode(rawPassw) ;

        System.out.print(encodedPassword);

       System.out.print( passwordEncoder.matches( rawPassw , encodedPassword ) );
    }


}

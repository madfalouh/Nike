package com.example.Nike;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
@CrossOrigin(origins = "http://localhost:5173")

public class NikeApplication {

	public static void main(String[] args) {
		SpringApplication.run(NikeApplication.class, args);
	}

}

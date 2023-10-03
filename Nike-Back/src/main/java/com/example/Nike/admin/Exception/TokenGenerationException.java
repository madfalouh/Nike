package com.example.Nike.admin.Exception;

public class TokenGenerationException extends  Exception {
    String message ;

    public TokenGenerationException(String message) {
        this.message = message ;
    }

}

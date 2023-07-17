package com.example.Nike.admin.Exception.message;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

import java.time.ZonedDateTime;

@AllArgsConstructor
@Getter
public class CustomMessageException {
    private  final String message ;
    private final  Throwable throwable ;
    private final HttpStatus httpStatus ;
    private final ZonedDateTime timestamp ;

}

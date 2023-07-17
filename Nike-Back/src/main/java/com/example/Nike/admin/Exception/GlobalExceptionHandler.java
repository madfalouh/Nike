package com.example.Nike.admin.Exception;


import com.example.Nike.admin.Exception.message.CustomMessageException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.ZoneId;
import java.time.ZonedDateTime;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<Object> handleUserNotFoundException(UserNotFoundException ex) {

        CustomMessageException customMessageException = new CustomMessageException(ex.getMessage(),
                ex , HttpStatus.NOT_FOUND ,
                ZonedDateTime.now(ZoneId.of("Z"))) ;
        return new   ResponseEntity<>(customMessageException , HttpStatus.BAD_REQUEST);

    }

    @ExceptionHandler(UserAlreadyExistException.class)
    public ResponseEntity<Object> handleUserAlreadyExists(UserAlreadyExistException ex) {

        CustomMessageException customMessageException = new CustomMessageException(ex.getMessage(),
                ex , HttpStatus.UNAUTHORIZED ,
                ZonedDateTime.now(ZoneId.of("Z"))) ;
        return new   ResponseEntity<>(customMessageException , HttpStatus.UNAUTHORIZED);

    }


    @ExceptionHandler(CustomDatabaseException.class)
    public ResponseEntity<Object> handleDatabaseException(CustomDatabaseException ex) {
        CustomMessageException customMessageException = new CustomMessageException(
                ex.getMessage(),
                ex,
                HttpStatus.INTERNAL_SERVER_ERROR,
                ZonedDateTime.now(ZoneId.of("Z"))
        );
        return new ResponseEntity<>(customMessageException, HttpStatus.INTERNAL_SERVER_ERROR);
    }



    @ExceptionHandler(WrongCredentialsException.class)
    public ResponseEntity<Object> handleWrongCredentialsException(WrongCredentialsException ex) {
        CustomMessageException customMessageException = new CustomMessageException(
                ex.getMessage(),
                ex,
                HttpStatus.UNAUTHORIZED,
                ZonedDateTime.now(ZoneId.of("Z"))
        );
        return new ResponseEntity<>(customMessageException, HttpStatus.UNAUTHORIZED);
    }



}

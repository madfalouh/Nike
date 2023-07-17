package com.example.Nike.admin.Exception;

public class CategoryNotFoundException extends Exception {


    String message ;

    public CategoryNotFoundException(String message){

        this.message = message ;
    }

}



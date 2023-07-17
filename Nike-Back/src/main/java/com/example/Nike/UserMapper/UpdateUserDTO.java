package com.example.Nike.UserMapper;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashSet;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateUserDTO {

    private Integer  id ;
    private String email ;
    private String password ;
    private  String firstName ;
    private String secondName ;

    private  String photos ;

    private MultipartFile multipartFile ;


}

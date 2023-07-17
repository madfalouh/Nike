package com.example.Nike.UserMapper;


import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UpdateCategoryDTO {
    private Integer  id ;

    private String alias;

    private String name;

    private MultipartFile multipartFile ;

}

package com.example.Nike.UserMapper;

import com.example.Nike.admin.Entity.User;
import com.example.Nike.admin.FileUploadUtil;
import com.example.Nike.admin.service.UserService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.StringUtils;

import java.io.IOException;

 public class UserMapper {



    public static   void dtoToEntity(  User user  , UpdateUserDTO dto )  {

        if( dto.getFirstName() != null ){
            user.setFirstName(dto.getFirstName());
        }
        if( dto.getSecondName() != null ){
            user.setSecondName(dto.getSecondName()); ;
        }
        if( dto.getEmail() != null ){
            user.setEmail(dto.getEmail());
        }
        if( dto.getPassword() != null ){
            user.setPassword(dto.getPassword());
        }

        var multipartFile = dto.getMultipartFile() ;

        if( multipartFile !=null &&  !multipartFile.isEmpty()){
            String filename = StringUtils.cleanPath(multipartFile.getOriginalFilename());
            user.setPhotos(filename);

            String uploadDir = "user-photos/"+user.getId();


            FileUploadUtil.cleanDir(uploadDir);
            try {
                FileUploadUtil.saveFile("user-photos", filename , multipartFile);

            } catch (IOException ex ){

            }

        }


    }



}

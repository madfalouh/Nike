package com.example.Nike.UserMapper;

import com.example.Nike.admin.Entity.Category;
import com.example.Nike.admin.FileUploadUtil;
import org.springframework.util.StringUtils;

import java.io.IOException;

public class CategoryMapper {

    public static   void dtoToEntity(Category category , UpdateCategoryDTO dto) throws IOException {


        if( category.getName()!= null ){
            category.setName(dto.getName());
        }
        if( category.getAlias() != null ){
            category.setAlias(dto.getAlias()); ;
        }

        var multipartFile = dto.getMultipartFile() ;

        if(!multipartFile.isEmpty()){
            String filename = StringUtils.cleanPath(multipartFile.getOriginalFilename());
            category.setImage(filename);

            String uploadDir = "category-images/"+category.getId();


            FileUploadUtil.cleanDir(uploadDir);
            FileUploadUtil.saveFile("category-images", filename , multipartFile);

        }




    }


}

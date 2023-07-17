package com.example.Nike.admin.Controller;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Path;
import java.nio.file.Paths;
@Configuration
public class MvcConfig implements WebMvcConfigurer {

    @Override
    public void  addResourceHandlers(ResourceHandlerRegistry resourceHandlerRegistry){
        Path userPhotosDir = Paths.get("user-photos") ;


        String userPhotosPath = userPhotosDir.toFile().getAbsolutePath() ;
        resourceHandlerRegistry.addResourceHandler("/user-photos/**")
                .addResourceLocations("file:/"+userPhotosPath+"/") ;

        String categoryImagesNames ="category-images" ;
        Path categoryImagesDir= Paths.get(categoryImagesNames);

        String categoryPhotoPath =  categoryImagesDir.toFile().getAbsolutePath() ;

        resourceHandlerRegistry.addResourceHandler("/"+categoryImagesDir +"/**")
                .addResourceLocations("file;/"+categoryPhotoPath+"/") ;

    }
}

package com.example.Nike.admin.Controller;


import com.example.Nike.UserMapper.UpdateCategoryDTO;
import com.example.Nike.admin.Entity.Category;
import com.example.Nike.admin.Exception.CategoryNotFoundException;
import com.example.Nike.admin.Rsponse.CategoryPageResponse;
import com.example.Nike.admin.service.CategoryService;
import jakarta.annotation.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Controller("/api/v1/")
public class CategoriesController {

    @Autowired
    private CategoryService categoryService ;

    @GetMapping("/categories")

    public List<Category>  listCateories() {
        return categoryService.listCategories() ;
    }


    @PostMapping("/category")
    public  String saveCategory(Category category , @RequestParam("fileImage") MultipartFile multipartFile){

        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename() ) ;

        category.setName(fileName);


        Category savedCategory = categoryService.save(category) ;

        String uploadDir = "../category-images/"+savedCategory.getId() ;

        return  "redirect:/categories" ;

    }


    @PutMapping("/categories/{id}/update")
    @ResponseBody
    public ResponseEntity<?> updateCategories(@PathVariable Integer id  , @RequestBody() UpdateCategoryDTO updateCategoryDTO  ) throws IOException, CategoryNotFoundException {
        Category savedCategory = categoryService.updateCategory(id , updateCategoryDTO) ;
        return ResponseEntity.status(HttpStatus.OK).body(savedCategory);
    }

    @PostMapping("/categories/check_unique")
    public Boolean checkUnique(@Param("id") Integer id , @Param("name")String name , @Param("alias")  String alias ) {

        return categoryService.isCategoryUnique(id , name , alias) ;


    }

    @GetMapping("/categories/page/{num}/{sortField}/{sortDir}/{keyword}")
    public  ResponseEntity listByPage(@PathVariable  int num  , @PathVariable String sortField ,  @PathVariable String sortDir , @PathVariable  @Nullable String keyword  ) {

        Page<Category> pageCategory = categoryService.listByPage(num , sortField , sortDir , keyword  ) ;


        List<Category> lists = pageCategory.getContent() ;

        CategoryPageResponse response = new CategoryPageResponse(lists, pageCategory.getTotalElements(), pageCategory.getTotalPages());


        return  ResponseEntity.ok(response ) ;

    }

    @DeleteMapping ("/category/{id}/")
    public ResponseEntity deleteCategory (@PathVariable Integer id) {
        try {
            categoryService.deleteCategory(id);
            return ResponseEntity.status(HttpStatus.OK).body("deleted");
        } catch (Exception ex) {
             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
        }
    }



}

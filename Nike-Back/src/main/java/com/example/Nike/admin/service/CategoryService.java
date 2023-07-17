package com.example.Nike.admin.service;


import com.example.Nike.UserMapper.CategoryMapper;
import com.example.Nike.UserMapper.UpdateCategoryDTO;
import com.example.Nike.admin.Entity.Category;
import com.example.Nike.admin.Exception.CategoryNotFoundException;
import com.example.Nike.admin.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    public  static  final  int CATEGORIES_PER_PAGE = 4 ;


    @Autowired
    private CategoryRepository categoryRepository ;

    public List<Category> listCategories() {
      return   categoryRepository.findAll() ;
    }


public  Category save( Category category) {

        return  categoryRepository.save(category) ;

}

public List<Category>  listAllRootCat(){
        return  categoryRepository.listRootCategories() ;
}


public  Category updateCategory(Integer id , UpdateCategoryDTO categoryToUpdate ) throws  IOException, CategoryNotFoundException {

    Optional<Category> category = categoryRepository.findById(id) ;
    if (!category.isPresent()) {
        throw new CategoryNotFoundException("User with ID: " + category.get().getId() + " not found.");
    }
    CategoryMapper.dtoToEntity(category.get(), categoryToUpdate);
    Category savedCategory= categoryRepository.save(category.get()) ;
    return  categoryRepository.save(  savedCategory   ) ;

}


public Optional<Category> listCategoryById( Integer id ) throws CategoryNotFoundException {
        return  categoryRepository.findById(id) ;
}


public Boolean isCategoryUnique(Integer id , String name , String alias) {

Category category = categoryRepository.findByName(name);

if(category.getName().equals(name) ||  category.getAlias().equals(alias))
    return false ;

return  true ;

}



    public Page<Category> listByPage(int pageNum , String sortField , String sortDir , String keyword) {

        Sort sort =  Sort.by(sortField) ;

        sort = sortDir.equals("asc") ? sort.ascending() : sort.descending() ;

        Pageable pageable = PageRequest.of(pageNum-1 , CATEGORIES_PER_PAGE , sort) ;


        if(keyword != null) {
            return categoryRepository.findAll(keyword , pageable) ;
        }

        return categoryRepository.findAll(pageable) ;
    }


    public void deleteCategory(Integer id) throws CategoryNotFoundException {

       Optional< Category> category = categoryRepository.findById(id) ;

        if(category!=null) {
            categoryRepository.delete(category.get());
        }else  {
            throw  new CategoryNotFoundException("Category not found") ;
        }
    }


}

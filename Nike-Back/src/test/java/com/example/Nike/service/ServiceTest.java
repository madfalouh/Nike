package com.example.Nike.service;


import com.example.Nike.admin.Entity.Category;
import com.example.Nike.admin.Repository.CategoryRepository;
import com.example.Nike.admin.service.CategoryService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
@ExtendWith(SpringExtension.class)
public class ServiceTest {

    @MockBean
    private CategoryRepository  repository ;

    @InjectMocks
    private CategoryService service ;

    @Test
    public void  testCheckUniqueInNewModeReturnDuplicateName() {
        Integer id = null ;
        String name ="Running Shoes";
        String alias ="abc" ;
        Category category = new Category() ;
        category.setName(name) ;
        category.setAlias(alias);
        Mockito.when(repository.findByName(name)).thenReturn(category) ;
        boolean res= service.isCategoryUnique(id , name , alias);
        assertThat(res).isFalse() ;
    }

}

package com.example.Nike.Entity;

import com.example.Nike.admin.Entity.Category;
import com.example.Nike.admin.Repository.CategoryRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.AutoConfigureDataJdbc;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.Set;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
public class CategoryTests {
    @Autowired
    private CategoryRepository repository ;


    @Test
    public void  testCreateRootCategory() {
        Category category = new Category() ;
        category.setName("Running Shoes");
        var savedCategory= repository.save(category) ;
        assertThat(savedCategory.getId()).isGreaterThan(0) ;
    }

    @Test
    public void testCreateSubCategory() {
        Category parent = new Category() ;
        parent.setId(1);
        Category subcategory = new Category() ;
        subcategory.setName("Neutral/Cushioned Running Shoes");
        subcategory.setParent(parent);
        Category subcategory1 = new Category() ;

        subcategory1.setName("Stability Running Shoes");
        var savedCategory = repository.save(subcategory) ;
        assertThat(savedCategory.getId()).isGreaterThan(0) ;
    }

    @Test
    public  void  testGetCategory() {

        Category category = repository.findById(1).get() ;
        Set<Category> children = category.getChildren() ;
        assertThat(children.size()).isGreaterThan(0) ;

    }

    @Test
    public void  testGet() {
        Category category = repository.findByName("Running Shoes") ;

        assertThat( category.getId()).isGreaterThan(0);
    }



}

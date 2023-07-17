package com.example.Nike.admin.Repository;

import com.example.Nike.admin.Entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category , Integer> {


@Query("select c from Category  c  where  c.parent.id is  null ")
    public List<Category> listRootCategories() ;

    Category findByName(String s);
@Query("select  c from Category c  where  concat( c.id ,' '  , c.name ,' ' , c.alias )  like %:keyword%")
    Page<Category> findAll(String keyword, Pageable pageable);
}

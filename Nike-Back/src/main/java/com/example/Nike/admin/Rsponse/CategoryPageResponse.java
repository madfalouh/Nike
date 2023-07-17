package com.example.Nike.admin.Rsponse;

import com.example.Nike.admin.Entity.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@AllArgsConstructor
public class CategoryPageResponse {

    private List<Category> categories ;
    private  long totalElems;

    private  long totalPages ;


}

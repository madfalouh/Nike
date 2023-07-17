package com.example.Nike.admin.Rsponse;

import com.example.Nike.admin.Entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;



@Getter
@Setter
public class UserPageResponse {
    private List<User> users;
    private long totalElements;
    private int totalPages;

    public UserPageResponse(List<User> users, long totalElements, int totalPages) {
        this.users = users;
        this.totalElements = totalElements;
        this.totalPages = totalPages;
    }

 }
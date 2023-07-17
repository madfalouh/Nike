package com.example.Nike.admin.Repository;

import com.example.Nike.admin.Entity.Role;
import com.example.Nike.admin.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository  extends JpaRepository<Role , Integer> {


    Role findByName(String name);
}

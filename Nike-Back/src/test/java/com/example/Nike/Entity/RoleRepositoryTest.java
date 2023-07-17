package com.example.Nike.Entity;

import com.example.Nike.admin.Entity.Role;
import com.example.Nike.admin.Repository.RoleRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions.* ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.List;



@DataJpaTest
@AutoConfigureTestDatabase( replace = AutoConfigureTestDatabase.Replace.NONE )
@Rollback(false)
class RoleRepositoryTest {


    @Autowired
    private RoleRepository repository ;

    @Test
    public  void testCreateRole() {
        Role roleadmin = new Role(null,"Admin" , "Manage Everything") ;
        Role savedRole=  repository.save(roleadmin) ;
        Assertions.assertNotEquals(   savedRole.getId()  , 0  );
    }


    @Test
    public  void testCreateRestRole() {
        var salePerson = new Role(null,"Salesperson"  ,  "manage product price ,  customers , shopping , orders and sales report" ) ;
        var roleEditor = new Role(null,"Editor"  ,  "mange categories , brands , products , articles and menus" ) ;
        var roleShipper =  new Role(null,"Shipper"  ,  "view products , view orders" +
                 "and update order status" ) ;
        var roleAssistant =  new Role(null,"Assistant"  ,  "manage questions and reviews") ;

        repository.saveAll( List.of( salePerson , roleEditor , roleShipper , roleAssistant)) ;
    }





}
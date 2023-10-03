package com.example.Nike.admin.Repository;


import com.example.Nike.admin.Entity.ResetToken;
import com.example.Nike.admin.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository  extends JpaRepository<User , Integer> {
@Query("SELECT u FROM User  u where u.email = :email")
     User findUserByEmail(  String email ) ;

  Long countById(Integer id) ;

@Query("UPDATE User u  set u.enabled=:status  where  u.id=:id   ")
@Modifying
     void updateEnableSatus( Integer id , boolean status) ;


    UserDetails findByEmail(String username);


    @Query("select u from User u where concat(u.id , ' ' , u.email , ' ' , u.firstName , ' ' ,"+"u.secondName) like  %:keyword%" )
     Page<User> findAll(String keyword , Pageable pageable) ;


}

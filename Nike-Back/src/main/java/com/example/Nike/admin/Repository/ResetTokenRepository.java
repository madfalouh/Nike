package com.example.Nike.admin.Repository;

import com.example.Nike.admin.Entity.ResetToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ResetTokenRepository extends JpaRepository<ResetToken, Integer> {

    ResetToken findByToken(String tokenValue);
    @Query("select u from ResetToken u where u.user.id = :id")
            ResetToken findByUserId(Integer id);
}

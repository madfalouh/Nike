package com.example.Nike.admin.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ResetToken {
    @Id
    @GeneratedValue
    public Integer id;

    @Column(unique = true)
    public String token;


    private LocalDateTime expiryDate;
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}


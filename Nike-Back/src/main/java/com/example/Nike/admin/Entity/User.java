package com.example.Nike.admin.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.HashSet;
import java.util.*;

@Entity
@AllArgsConstructor
@Getter
@Setter
@Builder(toBuilder = true)
@NoArgsConstructor
@Table(name = "users")
public class User implements UserDetails {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer  id ;
    @Column(length = 128, nullable = false , unique = true )
    private String email ;
    @Column(length =  64 , nullable = false )
    private String password ;
    @Column( name = "first_name" , length =  64 , nullable = false )
    private  String firstName ;
    @Column( name = "last_name" , length =  64 , nullable = false )
    private String secondName ;
    private boolean enabled  ;
    private boolean rememberMe = false;
    @Column(length =  64 )

    private  String photos ;
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @Enumerated(EnumType.STRING)
    @JoinTable(name = "users_roles" , joinColumns = @JoinColumn(name = "user_id")
            , inverseJoinColumns = @JoinColumn(name = "role_id"))

     private Set<Role>  roles = new HashSet<>() ;
    public  void addRole(Role role) {
        this.roles.add(role) ; }

    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Token> tokens;


    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", firstName='" + firstName + '\'' +
                ", secondName='" + secondName + '\'' +
                ", enabled=" + enabled +
                ", isRememberMe=" + rememberMe +
                ", photos='" + photos + '\'' +
                ", roles=" + roles +
                ", tokens=" + tokens +
                '}';
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        for (Role role : roles) {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        }

        return authorities  ;
    }

    @Override
    public String getUsername() {
        return this.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }


    @Transient
    public String getPhotosImagePath() {
        if(id == null || photos==null ) return  "/images/default-image.png" ;

        return  "/user-photos" +this.id +"/"+ this.photos ;


    }


}

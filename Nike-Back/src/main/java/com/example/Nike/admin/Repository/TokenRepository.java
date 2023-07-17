package com.example.Nike.admin.Repository;

import com.example.Nike.admin.Entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TokenRepository extends JpaRepository<Token , Integer> {

    @Query(value = """
select t from Token  t  inner  join  User  u on t.user.id =u.id
where  u.id =:id   and   (t.expired = false  and  t.revoked = false )
""")
    List<Token> listAllTokens(Integer id) ;

    Optional<Token>  findByToken(String token) ;

}

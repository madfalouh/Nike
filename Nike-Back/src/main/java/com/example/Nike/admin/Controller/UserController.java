package com.example.Nike.admin.Controller;

import com.example.Nike.UserMapper.UpdateUserDTO;
import com.example.Nike.admin.Entity.User;
import com.example.Nike.admin.Exception.CustomDatabaseException;
import com.example.Nike.admin.Exception.UserNotFoundException;
import com.example.Nike.admin.Rsponse.UserPageResponse;
import com.example.Nike.admin.service.*;
import jakarta.annotation.Nullable;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;
import java.util.stream.Collectors;


@Controller
@Transactional
@RequiredArgsConstructor
@RequestMapping("/api/v1/users")
@CrossOrigin(origins = "http://localhost:5174")

public class UserController {

    private final UserService service;


    @GetMapping("/admin")
    @ResponseBody
    public ResponseEntity<UserResponse> listAll() throws UserNotFoundException {
        return ResponseEntity.ok().body(service.listUsers());
    }

    @PatchMapping ("/admin/{id}/update")
    @ResponseBody
    public ResponseEntity<?> updateUser(@PathVariable Integer id, @RequestBody() UpdateUserDTO userToUpdate) throws UserNotFoundException {
        System.out.println("************************************************************************************************");
        System.out.println(id);
        User savedUser = service.updateUer(id, userToUpdate);
        return ResponseEntity.status(HttpStatus.OK).body(savedUser);
    }

    @GetMapping("/admin/page/{num}/{sortField}/{sortDir}/{keyword}")
    public ResponseEntity listByPage(@PathVariable int num, @PathVariable String sortField, @PathVariable String sortDir, @PathVariable @Nullable String keyword) throws UserNotFoundException {

        Page<User> pageUser = service.listByPage(num, sortField, sortDir, keyword);
        List<User> listUsers = pageUser.getContent();
        UserPageResponse response = new UserPageResponse(listUsers, pageUser.getTotalElements(), pageUser.getTotalPages());
        return ResponseEntity.ok(response);
    }


    @PostMapping("/admin")
    public ResponseEntity createUser(@RequestBody() UpdateUserDTO userToUpdate) throws Exception {
        System.out.println(userToUpdate);
        User savedUser = service.save(userToUpdate);
        return ResponseEntity.ok(savedUser);
    }


    @DeleteMapping("/admin/delete/{id}")
    @ResponseBody
    public ResponseEntity deleteUser(@PathVariable Integer id) throws UserNotFoundException, Exception {
        System.out.println("***************************************************");
        System.out.println(id);
        service.delete(id);
        return ResponseEntity.ok().body("Deleted successfully");
    }

    @PutMapping("admin/{id}/enable/{status}")
    public ResponseEntity enableUser(@PathVariable("id") Integer id, @PathVariable("status") boolean status, RedirectAttributes redirectAttributes) throws UserNotFoundException, CustomDatabaseException {
        service.enableUser(id, status);
        return ResponseEntity.ok().body(status ? "User Enabled" : "User Disabled");

    }

    @GetMapping("/{id}")
    public ResponseEntity listUserDetails(@PathVariable Integer id)  {
        return ResponseEntity.ok().body(service.getUserById(id));

    }


}




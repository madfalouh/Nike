package com.example.Nike.admin.service;

import com.example.Nike.UserMapper.UpdateUserDTO;
import com.example.Nike.UserMapper.UserMapper;
import com.example.Nike.admin.Entity.User;
import com.example.Nike.admin.Exception.CustomDatabaseException;
import com.example.Nike.admin.Exception.UserNotFoundException;
import com.example.Nike.admin.FileUploadUtil;
import com.example.Nike.admin.Repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.util.Optional;

@NoArgsConstructor
@Service
public class UserService {

    public static final int USERS_PER_PAGE = 4;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserResponse listUsers() throws UserNotFoundException {
        System.out.println("******************************************************************************");
        var users = Optional.ofNullable(userRepository.findAll())
                .filter(list -> !list.isEmpty())
                .orElseThrow(() -> new UserNotFoundException("No users found"));

        return UserResponse.builder().users(users).build();

    }

    public Page<User> listByPage(int pageNum, String sortField, String sortDir, String keyword) throws UserNotFoundException {

        Sort sort = Sort.by(sortField);
        sort = sortDir.equals("asc") ? sort.ascending() : sort.descending();

        Pageable pageable = PageRequest.of(pageNum - 1, USERS_PER_PAGE, sort);

        Page<User> users;

        if (keyword != null) {
            users = userRepository.findAll(keyword, pageable);
        } else {
            users = userRepository.findAll(pageable);
        }

        if (users.isEmpty()) {
            throw new UserNotFoundException("No users found");
        }

        return users;
    }


    public User save(UpdateUserDTO dto) throws Exception {
        if (dto == null || dto.getPassword() == null || dto.getEmail() == null) {
            throw new Exception("Required fields are missing");
        }
        User userToSave = new User();
        encodePassword(dto);
        System.out.println(dto.getPassword());
        UserMapper.dtoToEntity(userToSave, dto);
        System.out.println("***********************************************************");
        System.out.println(userToSave);
        try {
            return userRepository.save(userToSave);
        } catch (Exception e) {
            throw new Exception("Error while saving user", e);
        }
    }


    public User updateUer(Integer id, UpdateUserDTO userToUpdate) throws UserNotFoundException {

        Optional<User> user = userRepository.findById(id);

        if (!user.isPresent()) {
            throw new UserNotFoundException("User with ID: " + user.get().getId() + " not found.");
        }
        UserMapper.dtoToEntity(user.get(), userToUpdate);
        User savedUser = userRepository.save(user.get());
        return userRepository.save(savedUser);
    }


    private void encodePassword(UpdateUserDTO user) {
        if (user.getPassword() != null) {
            String encodedPassword = passwordEncoder.encode(user.getPassword());
            user.setPassword(encodedPassword);
        }
    }

    public boolean isEmailUnique(Integer id, String email) {
        User userByEmail = userRepository.findUserByEmail(email);

        if (userByEmail == null) {
            return true;
        } else if (id == null) {
            return false;
        } else {
            return userByEmail.getId().equals(id);
        }
    }


    public void delete(Integer id) throws UserNotFoundException, Exception {

        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User with ID: " + id + " not found."));
        try {
            userRepository.delete(user);
        } catch (Exception exception) {
            throw new Exception();
        }

    }


    public Optional<User> getUserById(Integer id) {

try{
    return  userRepository.findById(id) ;
} catch (Exception ex) {
    System.out.println(ex);
}

return  null ;

    }


    @Transactional
    public void enableUser(Integer id, boolean enable) throws UserNotFoundException, CustomDatabaseException {

        User user = userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User with ID: " + id + " not found."));

        try {
            userRepository.updateEnableSatus(user.getId(), enable);
        } catch (Exception e) {
            throw new CustomDatabaseException("Failed to update the enable status for User with ID: " + id);
        }
    }

}


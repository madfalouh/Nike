package com.example.Nike.admin.service;

import com.example.Nike.UserMapper.UpdateUserDTO;
import com.example.Nike.UserMapper.UserMapper;
import com.example.Nike.admin.Entity.ResetToken;
import com.example.Nike.admin.Entity.User;
import com.example.Nike.admin.Exception.CustomDatabaseException;
import com.example.Nike.admin.Exception.TokenGenerationException;
import com.example.Nike.admin.Exception.UserNotFoundException;
import com.example.Nike.admin.FileUploadUtil;
import com.example.Nike.admin.Repository.UserRepository;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Optional;

@NoArgsConstructor

@Service
public class UserService {

    public static final int USERS_PER_PAGE = 4;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ResetTokenService resetTokenService;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private  JavaMailSender javaMailSender;


    public UserResponse listUsers() throws UserNotFoundException {
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
       // encodePassword(dto);
        System.out.println(dto.getPassword());
        UserMapper.dtoToEntity(userToSave, dto);
        System.out.println(userToSave);
        try {
            return userRepository.save(userToSave);
        } catch (Exception e) {
            throw new Exception("Error while saving user", e);
        }
    }


    public User updateUser(Integer id, UpdateUserDTO userToUpdate) throws UserNotFoundException {
        Optional<User> user = Optional.ofNullable(userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User with ID: " + id + " not found.")));

        UserMapper.dtoToEntity(user.get(), userToUpdate);
        encodePassword(user.get());
        return userRepository.save(user.get());
    }


    private void encodePassword(User user) {
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




    @Transactional
    public void  sendEmail(String recipientEmail , String token)
            throws MessagingException, UnsupportedEncodingException, UserNotFoundException, TokenGenerationException {
        String link = "http://localhost:8080/api/v1/reset-password/reset_password?token=" + token;
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        helper.setFrom("reda.falhi10@gmail.com", "Nike Support");
        helper.setTo(recipientEmail);
        String subject = "Step Back Onto the Track with Nike!";
        String content = generateContent(link) ;
        helper.setSubject(subject);
        helper.setText(content, true);
        javaMailSender.send(message);
    }



    public String generateContent(String link) {
        return "<div style='font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #e0e0e0;'>"
                + "<div style='background-color: #f9f9f9; padding: 20px;'>"
                + "<div style='background-color: #f5f5f5; padding: 20px;'>"
                + "<h1 style='text-align: center;'><img src='https://i.imgur.com/PFCvKjk.png' alt='Nike' style='max-width: 100px;'></h1>"
                + "<p style='font-size: 20px; text-align: center;'>Champion, let's lace up and leap forward!</p>"
                + "<p>Every athlete, from beginners to pros, faces challenges. Forgetting your password? Just a tiny hurdle. We're here to hand you the baton and get you back on track.</p>"
                + "<div style='text-align: center; margin: 30px 0;'>"
                + "<a style='background-color: #000; padding: 14px 24px; color: #fff; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 18px;' href=\"" + link + "\">Reset &amp; Run</a>"
                + "</div>"
                + "<p>This link will expire in 5 minutes.</p>"
                + "<p>Remember, every setback is a setup for a comeback. If this wasn't you, no sweat - just sidestep this email and continue your journey.</p>"
                + "<p style='text-align: center; font-style: italic;'>Dream big. Run fast. <strong>#JustDoIt</strong></p>"
                + "<hr style='border: 1px solid #eee;'>"
                + "<p style='text-align: center; font-size: 12px; color: #888;'>© 2023 Nike, Inc. All rights reserved.</p>"
                + "<p style='text-align: center; font-size: 12px; color: #888;'>Need help? Contact our support.</p>"
                + "</div></div></div>";
    }




}


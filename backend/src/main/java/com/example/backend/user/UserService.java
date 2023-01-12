package com.example.backend.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepo userRepo;

    public User createUser(User user){
      return userRepo.save(user);
    }

    public List<User> getAll(){
        return userRepo.findAll();
    }

}

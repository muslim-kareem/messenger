package com.example.backend.user;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/users")

public class UserController {

    UserService service;


    @PostMapping
    public User createUser(@RequestBody User user){
        return  service.createUser(user);
    }

    @GetMapping
    public List<User> getUsers(){
        return service.getAll();
    }

    @GetMapping("/{userName}")
    public User getUserByName(@PathVariable String userName){
        return service.getUserByName(userName);
    }
}

package com.example.backend.user;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.List;



class UserServiceTest {

    @Test
    void createUser_whenUser_thenCreateUser (){
        // given
        User user = new User(null, "User1");

        UserRepo userRepo = Mockito.mock(UserRepo.class);
        Mockito.when(userRepo.save(user))
                .thenReturn(new User("1", "User1"));

        UserService userService = new UserService(userRepo);

        // when
        User actual = userService.createUser(user);

        // then
        User expected = new User("1", "User1");
        Assertions.assertEquals(expected, actual);

        Mockito.verify(userRepo).save(user);

    }

    @Test
    void getAll_whenOneUser_thenReturnOneUser (){
        // given
        UserRepo userRepo = Mockito.mock(UserRepo.class);
        Mockito.when(userRepo.findAll())
                .thenReturn(List.of((new User("1","User1"))));
        UserService userService = new UserService(userRepo);


        // when
        List<User> actual = userService.getAll();

        // then
        List<User> expected = new ArrayList<>(List.of(new User("1", "User1")));

        Assertions.assertEquals(expected, actual);

        Mockito.verify(userRepo).findAll();

    }

}
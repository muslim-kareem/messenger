package com.example.backend.user;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User,String> {
    User getUserByName(String userName);
}

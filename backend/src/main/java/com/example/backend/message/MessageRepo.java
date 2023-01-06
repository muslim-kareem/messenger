package com.example.backend.message;


import org.springframework.data.mongodb.repository.MongoRepository;

public interface MessageRepo extends MongoRepository<Message,String> {

    Message getMessagesByAuthorId(String authorId);

    Message getMessagesByReceiverId(String receiverId);
}

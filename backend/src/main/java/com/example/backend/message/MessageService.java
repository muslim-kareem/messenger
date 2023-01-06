package com.example.backend.message;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MessageService {

    private final  MessageRepo messageRepo;

    public Message createMessage(Message theMessage){
        return messageRepo.save(theMessage);
    }

    public List<Message> getMessages(){
        return  messageRepo.findAll();
    }

    public Message getMessageByAuthorId(String authorId){
        return  messageRepo.getMessagesByAuthorId(authorId);
    }

    public Message getMessageByReceiverId(String receiverId){
        return  messageRepo.getMessagesByReceiverId(receiverId);
    }


}

package com.example.backend.message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageRestController {

    @Autowired
    MessageService service;

    @PostMapping
    public Message createMessage(@RequestBody Message theMessage){
        theMessage.setId(null);
        return  service.createMessage(theMessage);
    }

    @GetMapping
    public List<Message> getMessages(){
        return service.getAll();
    }

    @GetMapping("/chat/{id}")
    public List<Message> getMessageByAuthorId(@PathVariable String id){
        List<Message> theMessages = service.getAll();

        String authorId = id.substring(0,id.indexOf(" "));
        String receiverId = id.substring(id.indexOf(" ") + 1);

        System.out.println("log "+authorId);
        System.out.println("log "+receiverId);

        List<Message> chatMessages = new ArrayList<>();

        for (Message message : theMessages) {
            if(message.getAuthorId().equals(authorId) && message.getReceiverId().equals(receiverId)){
                chatMessages.add(message);
            }
        }

        return chatMessages;

    }





}

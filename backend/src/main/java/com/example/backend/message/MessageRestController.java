package com.example.backend.message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/messages")
public class MessageRestController {

    @Autowired
    MessageService service;

    @PostMapping
    public Message createMessage(@RequestBody Message theMessage){
        return  service.createMessage(theMessage);
    }

    @GetMapping("/{authorId}")
    public Message getMessageByAuthorId(@PathVariable String authorId){
        return service.getMessageByAuthorId(authorId);
    }

    @GetMapping("/{receiverId}")
    public Message getMessageByReceibentId(@PathVariable String receiverId){
        return  service.getMessageByReceiverId(receiverId);
    }



}

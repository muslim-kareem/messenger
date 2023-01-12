package com.example.backend.message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/author/{id}")
    public Message getMessageByAuthorId(@PathVariable String id){
        return service.getMessageByAuthorId(id);
    }


    // Adrian was here
    @GetMapping("/receiver/{id}")
    public Message getMessageByReceiverId(@PathVariable String id){
        return  service.getMessageByReceiverId(id);
    }



}

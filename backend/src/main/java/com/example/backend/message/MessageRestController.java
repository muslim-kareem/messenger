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

    @GetMapping("/author/{id}")
    public Message getMessageByAuthorId(@PathVariable String id){
        return service.getMessageByAuthorId(id);
    }

    //muslim was here
    @GetMapping("/receiver/{id}")
    public Message getMessageByReceiverId(@PathVariable String id){
        return  service.getMessageByReceiverId(id);
    }



}

package com.example.backend.message;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Data
@AllArgsConstructor

public class Message {
    @Id
    private String id;
    private String text;
    private String authorId;
    private String receiverId;

//TEST

    @CreatedDate
    private Date createdAt;
}

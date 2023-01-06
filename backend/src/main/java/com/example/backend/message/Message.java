package com.example.backend.message;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import java.util.Date;

@Data
@AllArgsConstructor

public class Message {
    private String id;
    private String text;
    private String authorId;
    private String receiverId;

    @CreatedDate
    private Date createdAt;
}

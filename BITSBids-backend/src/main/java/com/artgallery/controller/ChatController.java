package com.artgallery.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import com.artgallery.dao.ChatDao;
import com.artgallery.model.Chat;
import com.artgallery.dto.AddMessageRequest;


import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("api/chat")
@CrossOrigin
public class ChatController
{

    @Autowired
    private ChatDao chatDao;

    @GetMapping("/messages/all/{productId}/{sellerId}/{userId}")
    public ResponseEntity<?> getAllMessages(@PathVariable int productId,@PathVariable int sellerId,@PathVariable int userId)
    {
        List<Chat> old = new ArrayList<Chat>();
        System.out.println("GET ALL MEAA");
        old = chatDao.findByProductIdAndSellerIdAndUserId(productId,sellerId,userId);
        return  ResponseEntity.ok(old);
    }

    @PostMapping("/send")
    public ResponseEntity<?> sendMessage(AddMessageRequest messageDto)
    {
        System.out.println("REQ FOR SEND MESSAGE");
        System.out.println(messageDto);
        Chat chat = AddMessageRequest.toEntity(messageDto);
        this.chatDao.save(chat);
        return ResponseEntity.ok(chat);
    }

}


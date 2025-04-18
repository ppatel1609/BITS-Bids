package com.artgallery.dto;



import org.springframework.beans.BeanUtils;

import com.artgallery.model.Chat;

public class AddMessageRequest
{
    private int messageId;
    private int sellerId;
    private int productId;
    private int userId;
    private int sender;
    private String message;

    public int getMessageId() {
        return messageId;
    }

    public void setMessageId(int messageId) {
        this.messageId = messageId;
    }

    public int getSellerId() {
        return sellerId;
    }

    public void setSellerId(int sellerId) {
        this.sellerId = sellerId;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getSender() {
        return sender;
    }

    public void setSender(int sender) {
        this.sender = sender;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public static Chat toEntity(AddMessageRequest dto)
    {
        Chat entity = new Chat();
        BeanUtils.copyProperties(dto, entity);
        return entity;
    }
    @Override
    public String toString() {
        return "AddMessageRequest [messageId=" + messageId + ", sellerId=" + sellerId + ", productId=" + productId + ", userId="
                + userId + ", sender=" + sender + ", message=" + message + "]";

    }
}
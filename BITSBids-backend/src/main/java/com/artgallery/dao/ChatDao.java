package com.artgallery.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.artgallery.model.Chat;

@Repository
public interface ChatDao extends JpaRepository<Chat, Integer> {


    List<Chat> findByProductIdAndSellerIdAndUserId(int productId,int sellerId,int userId);

}

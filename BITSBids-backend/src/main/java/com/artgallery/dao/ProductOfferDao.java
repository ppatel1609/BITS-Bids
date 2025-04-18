package com.artgallery.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.artgallery.model.Product;
import com.artgallery.model.ProductOffer;
import com.artgallery.model.User;

@Repository
public interface ProductOfferDao extends JpaRepository<ProductOffer, Integer> {
	
	List<ProductOffer> findByProduct(Product product);
	List<ProductOffer> findByUser(User user);

}

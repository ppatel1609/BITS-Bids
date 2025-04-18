package com.artgallery.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.artgallery.model.ProductReview;

@Repository
public interface ProductReviewDao extends JpaRepository<ProductReview, Integer> {

	List<ProductReview> findByProductId(int productId);
	
}

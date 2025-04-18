package com.artgallery.service;

import org.springframework.web.multipart.MultipartFile;

import com.artgallery.model.Product;

public interface ProductService {
	
	void addProduct(Product product, MultipartFile productImmage);

}

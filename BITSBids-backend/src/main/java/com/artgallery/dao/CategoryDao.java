package com.artgallery.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.artgallery.model.Category;

public interface CategoryDao extends JpaRepository<Category, Integer> {

	List<Category> findByStatus(String status);

}

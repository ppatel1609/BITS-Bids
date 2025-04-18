package com.artgallery.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.artgallery.model.OtpVerification;

@Repository
public interface OtpVerificationDao extends JpaRepository<OtpVerification, Integer> {
	
	OtpVerification findByEmailId(String emailId);

}

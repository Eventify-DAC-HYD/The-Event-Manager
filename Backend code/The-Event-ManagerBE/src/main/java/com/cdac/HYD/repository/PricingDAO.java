package com.cdac.HYD.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cdac.HYD.entity.Pricing;

@Repository
public interface PricingDAO extends JpaRepository<Pricing, Integer> {

	public List<Pricing> findByItems(String items);
		
	public List<Pricing> findByItemsId(int itemsId);
		
	@Query("select r from Pricing r where items=:i")
	public List<Pricing> getAllPricings(@Param("i") String items);
		
	@Query("select r from Pricing r where itemsId=:i")
	public List<Pricing> viewAllPricingById(@Param("i") int itemsId);
}


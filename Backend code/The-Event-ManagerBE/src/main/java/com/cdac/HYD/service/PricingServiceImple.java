package com.cdac.HYD.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.HYD.entity.Pricing;
import com.cdac.HYD.repository.PricingDAO;

@Service
public class PricingServiceImple implements  PricingService{
	@Autowired
	private PricingDAO pricingDAO;

	@Override
	public Pricing insertPricings(Pricing pricing) {
		return pricingDAO.save(null);
	}

	@Override
	public List<Pricing> getAllPricings() {
		return pricingDAO.findAll();
	}
	
	@Override
	public List<Pricing> getPricingsByItems(String items) {
		return pricingDAO.findByItems(items);
	}

	@Override
	public List<Pricing> getPricingsById(int itemsId) {
		return pricingDAO.findByItemsId(itemsId);
	}

	@Override
	public Pricing updatePricings(Pricing pricing) {
		return pricingDAO.save(pricing);
	}

	@Override
	public void deletePricing(int itemsId) {
		Pricing price = pricingDAO.getById(itemsId);
		pricingDAO.delete(price);		
	}

}
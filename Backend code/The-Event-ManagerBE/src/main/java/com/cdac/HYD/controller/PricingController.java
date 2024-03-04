package com.cdac.HYD.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.HYD.entity.Pricing;
import com.cdac.HYD.service.PricingService;

@CrossOrigin
@RestController
public class PricingController {
	
	@Autowired
	private PricingService pricingService;
	
	@PostMapping("/pricing")
	public Pricing insertPricings(@RequestBody Pricing pricing) {
		return pricingService.insertPricings(pricing);
	}
	
	@GetMapping("/pricing")
	public List<Pricing> getAllPricings(){
		return pricingService.getAllPricings();
	}
	
	@GetMapping("/getpricing/{ritems}")
	public List<Pricing> getPricingByItem(@PathVariable String ritems){
		return pricingService.getPricingsByItems(ritems);
	}
	
	@GetMapping("/getpricing/{rid}")
	public List<Pricing> getPricingById(@PathVariable int rid){
		return pricingService.getPricingsById(rid);
	}
	
	@PutMapping("/updateprice")
	public Pricing updatePricing(@RequestBody Pricing pricing) {	
		return pricingService.updatePricings(pricing);	
	}

	@DeleteMapping("/deleteprice/{rid}")
	public String deleteRequest(@PathVariable int rid) {	
		pricingService.deletePricing(rid);	
		 return "Deleted";
	}
	
}

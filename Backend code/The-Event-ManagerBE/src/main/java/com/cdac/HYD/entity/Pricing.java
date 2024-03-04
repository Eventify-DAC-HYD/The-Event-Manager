package com.cdac.HYD.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pricing {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int itemsId;
	private String items;
	private double price;
	public int getItemsId() {
		return itemsId;
	}
	public void setItemsId(int itemsId) {
		this.itemsId = itemsId;
	}
	public String getItems() {
		return items;
	}
	public void setItems(String items) {
		this.items = items;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Pricing [itemsId=" + itemsId + ", items=" + items + ", price=" + price + "]";
	}
	
}

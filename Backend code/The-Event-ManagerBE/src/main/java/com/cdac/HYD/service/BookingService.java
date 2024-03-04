package com.cdac.HYD.service;

import java.util.List;

import com.cdac.HYD.entity.Booking;

public interface BookingService {

	public Booking insertBookings (Booking booking);
	
	public List<Booking> getAllBookings();

	public List<Booking> getBookingsByEmail(String email);
	
	public List<Booking> getBookingsById(int bookingId);
	
	
	public Booking updateBookings(Booking Booking);
	
	public void deleteBooking(int bookingId);
	
	public List<Booking> pendingBookings(String email,boolean status);
	
	public List<Booking> viewAllPendingBookings(boolean status);
	
	public List<Booking> viewBookings(String email,boolean status);
	
	public List<Booking> viewAllBookings(boolean status);

	public List<Booking> findByCityAndDate(String city, String date);
	
}


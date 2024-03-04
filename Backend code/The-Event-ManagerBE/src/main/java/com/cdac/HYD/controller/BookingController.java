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

import com.cdac.HYD.entity.Booking;
import com.cdac.HYD.repository.BookingDAO;
import com.cdac.HYD.service.BookingService;
@CrossOrigin
@RestController
public class BookingController {
	@Autowired
	private BookingService bookingService;
	
	@Autowired
	private BookingDAO bookingDao;
	
	

	@PostMapping("/booking")
	public Booking insertBookings(@RequestBody Booking booking) {
		return bookingService.insertBookings(booking);
	}
	
	@GetMapping("/booking")
	public List<Booking> getAllBookings(){
		return bookingService.getAllBookings();
	}
	
	@GetMapping("/bookings/{remail}")
	public List<Booking> getRequestsByEmail(@PathVariable String remail) {	
		return bookingService.getBookingsByEmail(remail);	
	}

	@GetMapping("/getbookings/{bookingId}")
	public List<Booking> getRequestsById(@PathVariable int bookingId) {	
		return bookingService.getBookingsById(bookingId);
	}
	
	
	@PostMapping("/pendingbookings")
	public List<Booking> getPendingBookings(@RequestBody Booking booking){
		return bookingService.pendingBookings(booking.getEmail(), false);
	}
	
	@GetMapping("/viewallpendingbookings")
	public List<Booking> getPendingBookings(boolean status){
		return bookingService.viewAllPendingBookings(false);
	}
	
	@GetMapping("/viewBookings")
	public List<Booking> viewAllBookings(boolean status){
		return bookingService.viewAllBookings(status);
	}
	
	@PostMapping("/viewBookings")
	public List<Booking> viewBookings(@RequestBody Booking booking){
		return bookingService.viewBookings(booking.getEmail(),true);
	}
	

	@PutMapping("/requests/{id}")
	public Booking updateBookings(@PathVariable int id ,@RequestBody Booking booking) {
		Booking bObj = bookingDao.findByBookingId(id);
		bObj.setCity(booking.getCity());
		bObj.setEvent(booking.getEvent());
		bObj.setDate(booking.getDate());
		bObj.setGuest(booking.getGuest());
		return bookingService.updateBookings(bObj);	
	}
	
	@PutMapping("/requests")
	public Booking updateRequests(@RequestBody Booking booking) {	
		return bookingService.updateBookings(booking);	
	}

	@PostMapping("/findbydatecity")
	public List<Booking> findByCityAndDate(@RequestBody Booking booking) {
		return bookingService.findByCityAndDate(booking.getCity(), booking.getDate());
	}

	
	@DeleteMapping("/bookings/{bookingId}")
	public String deleteBooking(@PathVariable int bookingId) {	
		bookingService.deleteBooking(bookingId);	
		 return "Deleted";
	}
	
	}

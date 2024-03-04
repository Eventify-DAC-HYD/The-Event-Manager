package com.cdac.HYD.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cdac.HYD.entity.Booking;

@Repository
public interface BookingDAO extends JpaRepository<Booking, Integer>{
	
    public List<Booking> findByEmail(String email);
	
    //public List<Booking> findByBookingId(int bookingId);
    public Booking findByBookingId(int bookingId);
	
	@Query("select r from Booking r where email=:e and status=:s")
	public List<Booking> pendingBookings(@Param("e") String email,@Param("s") boolean status);
	
	@Query("select r from Booking r where email=:e and status=:s")
	public List<Booking> viewBookings(@Param("e") String email,@Param("s") boolean status);
	
	@Query("select r from Booking r where status=:s")
	public List<Booking> viewAllPendingBookings(@Param("s") boolean status);
	
	@Query("select r from Booking r where status=:s")
	public List<Booking> viewAllBookings(@Param("s") boolean status);

	public List<Booking> findByCityAndDate(String city, String date);
	


}

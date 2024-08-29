package com.wellness.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellness.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
	List<Appointment> findByUserEmail(String email);
	}

package com.wellness.service;

import com.wellness.model.Appointment;
import com.wellness.model.User;
import com.wellness.repository.AppointmentRepository;
import com.wellness.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;
    @Autowired
    private UserRepository userRepository;

    public Appointment save(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    public Appointment bookAppointment(String email, Appointment appointment) {
        if (appointment == null) {
            throw new RuntimeException("Appointment is null");
        }
        User user = userRepository.findById(email).orElseThrow(() -> new RuntimeException("User not found"));
        appointment.setUser(user);
        return appointmentRepository.save(appointment);
    }

    public List<Appointment> getAppointmentsByUserEmail(String email) {
        return appointmentRepository.findByUserEmail(email);
    }
    public Appointment findById(Long id) {
        return appointmentRepository.findById(id).orElse(null);
    }

    public void deleteAppointment(Long id) {
        appointmentRepository.deleteById(id);
    }

    public Appointment updateAppointment(Long id, Appointment appointment) {
        if (appointmentRepository.existsById(id)) {
            appointment.setId(id);
            return appointmentRepository.save(appointment);
        }
        throw new RuntimeException("Appointment not found");
    }
}

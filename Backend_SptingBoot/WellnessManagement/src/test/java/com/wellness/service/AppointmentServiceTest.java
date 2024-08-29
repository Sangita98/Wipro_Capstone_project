package com.wellness.service;

import com.wellness.model.Appointment;
import com.wellness.model.User;
import com.wellness.repository.AppointmentRepository;
import com.wellness.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class AppointmentServiceTest {

    @Mock
    private AppointmentRepository appointmentRepository;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private AppointmentService appointmentService;

    private User testUser;
    private Appointment testAppointment;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);

        testUser = new User();
        testUser.setEmail("test@example.com");
        testUser.setPassword("password");

        testAppointment = new Appointment();
        testAppointment.setCourseName("Yoga");
        testAppointment.setAppointmentDate("2024-08-24");
        testAppointment.setAppointmentTime("10:00");
    }

    @Test
    void testSaveAppointment() {
        when(appointmentRepository.save(testAppointment)).thenReturn(testAppointment);

        Appointment savedAppointment = appointmentService.save(testAppointment);

        assertNotNull(savedAppointment);
        assertEquals("Yoga", savedAppointment.getCourseName());
        verify(appointmentRepository, times(1)).save(testAppointment);
    }

    @Test
    void testBookAppointment() {
        when(userRepository.findById(testUser.getEmail())).thenReturn(Optional.of(testUser));
        when(appointmentRepository.save(testAppointment)).thenReturn(testAppointment);

        Appointment bookedAppointment = appointmentService.bookAppointment(testUser.getEmail(), testAppointment);

        assertNotNull(bookedAppointment);
        assertEquals(testUser, bookedAppointment.getUser());
        verify(userRepository, times(1)).findById(testUser.getEmail());
        verify(appointmentRepository, times(1)).save(testAppointment);
    }

    @Test
    void testGetAppointmentsByUserEmail() {
        when(appointmentRepository.findByUserEmail(testUser.getEmail())).thenReturn(List.of(testAppointment));

        List<Appointment> appointments = appointmentService.getAppointmentsByUserEmail(testUser.getEmail());

        assertNotNull(appointments);
        assertFalse(appointments.isEmpty());
        assertEquals(1, appointments.size());
        assertEquals("Yoga", appointments.get(0).getCourseName());
        verify(appointmentRepository, times(1)).findByUserEmail(testUser.getEmail());
    }

    @Test
    void testDeleteAppointment() {
        Long appointmentId = 1L;

        doNothing().when(appointmentRepository).deleteById(appointmentId);

        appointmentService.deleteAppointment(appointmentId);

        verify(appointmentRepository, times(1)).deleteById(appointmentId);
    }

    @Test
    void testUpdateAppointment() {
        Long appointmentId = 1L;
        testAppointment.setId(appointmentId);
        when(appointmentRepository.existsById(appointmentId)).thenReturn(true);
        when(appointmentRepository.save(testAppointment)).thenReturn(testAppointment);

        Appointment updatedAppointment = appointmentService.updateAppointment(appointmentId, testAppointment);

        assertNotNull(updatedAppointment);
        assertEquals("Yoga", updatedAppointment.getCourseName());
        verify(appointmentRepository, times(1)).existsById(appointmentId);
        verify(appointmentRepository, times(1)).save(testAppointment);
    }

    @Test
    void testUpdateNonExistentAppointment() {
        Long appointmentId = 999L;

        when(appointmentRepository.existsById(appointmentId)).thenReturn(false);

        assertThrows(RuntimeException.class, () -> {
            appointmentService.updateAppointment(appointmentId, testAppointment);
        });

        verify(appointmentRepository, times(1)).existsById(appointmentId);
        verify(appointmentRepository, times(0)).save(testAppointment);
    }

    @Test
    void testBookAppointmentForNonExistentUser() {
        when(userRepository.findById("nonexistent@example.com")).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> {
            appointmentService.bookAppointment("nonexistent@example.com", testAppointment);
        });

        verify(userRepository, times(1)).findById("nonexistent@example.com");
        verify(appointmentRepository, times(0)).save(testAppointment);
    }
}
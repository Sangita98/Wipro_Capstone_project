import React, { useState } from 'react';
import axios from 'axios';
import './BookAppointment.css'; // Custom styles
import { useNavigate,Link } from "react-router-dom";

const BookAppointment = () => {
  const [courseName, setCourseName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const email = localStorage.getItem('userEmail'); // Retrieve email from localStorage
  const userName = localStorage.getItem('userName');

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();

    // Prepare the appointment data
    const appointmentData = { email, courseName, appointmentDate, appointmentTime };

    try {
      // Send the data to the backend
      await axios.post('http://localhost:8080/api/appointments/book', appointmentData);
      alert('Appointment booked successfully!');
      navigate('/my-appointment'); // Navigate to the appointments page after booking
    } catch (error) {
      console.error(error);
      setMessage('Failed to book appointment. Please try again.');
    }
  };

  // Available time slots for appointment
  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  return (
    <div className="appointment-container d-flex justify-content-center align-items-center">
      <div className="card p-4 appointment-box">
      <h2 className='welcome' >Welcome, {userName}</h2>
        <form onSubmit={handleAppointmentSubmit}>
          <div className="form-group mb-3">
            <select
              className="form-control" id="courseName" value={courseName}
              onChange={(e) => setCourseName(e.target.value)} required>
              <option value="" disabled>Select Course</option>
              <option value="Yoga">Yoga</option>
              <option value="Meditation">Meditation</option>
              <option value="Massage Therapy">Massage Therapy</option>
              <option value="Nutrition Counseling">Nutrition Counseling</option>
              <option value="Physical Therapy">Physical Therapy</option>
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="appointmentDate" className="form-label">Appointment Date</label>
            <input type="date" className="form-control" id="appointmentDate"
              value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} required/>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="appointmentTime" className="form-label">Appointment Time</label>
            <select
              className="form-control" id="appointmentTime" value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)} required>
              <option value="" disabled>Select Time</option>
              {timeSlots.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">Book Appointment</button>
          {message && <p className="text-center mt-3 text-danger">{message}</p>}
        </form>
        <div className="login-link">
          <p>Back to Login page  <Link to="/login">Login Page</Link></p>
          <p>My Appointments  <Link to="/my-appointment">Appointments</Link></p>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;

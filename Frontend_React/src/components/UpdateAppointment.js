import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateAppointment.css'; 

const UpdateAppointment = () => {
  // Get the appointment ID from the URL using useParams
  const { id } = useParams();

  //  Initialize state for appointment details, message for success/error, and email from localStorage
  const [appointment, setAppointment] = useState({
    courseName: '',
    appointmentDate: '',
    appointmentTime: ''
  });
  const [message, setMessage] = useState('');
  const email = localStorage.getItem('userEmail'); // Retrieve email from local storage

  //  Initialize navigate to programmatically navigate the user
  const navigate = useNavigate();

  //  Define available time slots for the appointment
  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  //  useEffect to fetch appointment details if updating (id is present)
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/appointments/${id}`)
        .then(response => setAppointment(response.data))
        .catch(err => console.error(err));
    }
  }, [id]);

  //  Handle input changes to update the appointment state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  //  Handle form submission (either update or book a new appointment)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Update appointment if id is present
        await axios.put(`http://localhost:8080/api/appointments/update/${email}`, {
          id,
          ...appointment
        });
        setMessage('Appointment updated successfully!');
      } else {
        // Create new appointment if id is not present
        await axios.post('http://localhost:8080/api/appointments', appointment);
        setMessage('Appointment booked successfully!');
      }
      navigate('/my-appointment');
    } catch (err) {
      console.error(err);
      setMessage(id ? 'Failed to update appointment. Please try again.' : 'Failed to book appointment. Please try again.');
    }
  };

  // 8. Handle the cancel button to navigate back to the My Appointments page
  const handleCancel = () => {
    navigate('/my-appointment');
  };

  // 9. Render the form and handle the UI
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center updateappointment-container">
      <div className="card p-4 updateappointment-box">
        <h2 className="text-center mb-4">{id ? 'Update' : 'Book'} Wellness Management Appointment</h2>
        <form onSubmit={handleSubmit}>
          {/* Course Selection */}
          <div className="form-group mb-3">
            <select
              className="form-control"
              id="courseName"
              name="courseName"
              value={appointment.courseName}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Course</option>
              <option value="Yoga">Yoga</option>
              <option value="Meditation">Meditation</option>
              <option value="Massage Therapy">Massage Therapy</option>
              <option value="Nutrition Counseling">Nutrition Counseling</option>
              <option value="Physical Therapy">Physical Therapy</option>
            </select>
          </div>

          {/* Appointment Date */}
          <div className="form-group mb-3">
            <label htmlFor="appointmentDate" className="form-label">Appointment Date</label>
            <input
              type="date"
              className="form-control"
              id="appointmentDate"
              name="appointmentDate"
              value={appointment.appointmentDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Appointment Time */}
          <div className="form-group mb-3">
            <label htmlFor="appointmentTime" className="form-label">Appointment Time</label>
            <select
              className="form-control"
              id="appointmentTime"
              name="appointmentTime"
              value={appointment.appointmentTime}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Time</option>
              {timeSlots.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary w-45">
              {id ? 'Update' : 'Book'} Appointment
            </button>
            <button type="button" className="btn btn-secondary w-45" onClick={handleCancel}>
              Cancel
            </button>
          </div>

          {/* Success/Error Message */}
          {message && <p className="text-center mt-3 text-success">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default UpdateAppointment;

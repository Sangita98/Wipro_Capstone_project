import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MyAppointment.css';

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const email = localStorage.getItem('userEmail');

  useEffect(() => {
    axios.get(`http://localhost:8080/api/appointments/user/${email}`)
      .then(response => setAppointments(response.data))
      .catch(err => console.error(err));
  }, [email]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      axios.delete(`http://localhost:8080/api/appointments/delete/${email}`)
        .then(() => {
          setAppointments(appointments.filter(appt => appt.id !== id));
          alert('Appointment deleted successfully');
          navigate('/my-appointment');
        })
        .catch(err => console.error(err));
    }
  };

  const handleUpdate = (id) => {
    navigate(`/updateappointment/${id}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  return (
    <div className="appointments-container">
      <h2 className='apps'>Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Course Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appt => (
            <tr key={appt.id}>
              <td>{email}</td>
              <td>{appt.courseName}</td>
              <td>{appt.appointmentDate}</td>
              <td>{appt.appointmentTime}</td>
              <td>
                <button onClick={() => handleUpdate(appt.id)}>Update</button>
                <button onClick={() => handleDelete(appt.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="logout-container">
        <button className="logout-button mt-3 btn btn-danger" onClick={handleLogout}>Logout</button>
        <button className="back-button mt-3 btn btn-warning " onClick={() => navigate('/bookappointment')}>
          Back to Booking
        </button>
      </div>
    </div>
  );
};

export default MyAppointment;

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './SignUp.css';

const SignUp = () => {
  const [user, setUser] = useState({ name: '', email: '', mobileNumber: '', password: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/users/register', user)
      .then(() => {
        setSuccessMessage('Registration successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 3000); // Redirect after 3 seconds
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center signup-container">
      <div className="form-box p-4 rounded shadow-lg signup-box">
        <h2 className="text-center mb-4">Register</h2>
        
        {/* Show success message if registration is successful */}
        {successMessage && <div className="alert alert-success text-center">{successMessage}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="name"
              value={user.name}
              placeholder='Name'
              onChange={handleChange}
              required 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email"
              name="email"
              value={user.email}
              placeholder='Email'
              onChange={handleChange}
              required 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
            <input 
              type="text" 
              className="form-control" 
              id="mobileNumber"
              name="mobileNumber"
              value={user.mobileNumber}
              placeholder='Mobile Number'
              onChange={handleChange}
              required 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password"
              name="password"
              value={user.password}
              placeholder='Password'
              onChange={handleChange}
              required 
            />
          </div>

          <button type="submit" className="btn btn-primary w-100"><h3>Register</h3></button>
          <br/>
          <div className="login-link text-center mt-3">
            <span>Already have an account?</span> <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

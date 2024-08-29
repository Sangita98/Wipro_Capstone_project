import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password,
      });
      if (response.data === 'Login Successful') {
        localStorage.setItem('userEmail', email);

        const userResponse = await axios.get(`http://localhost:8080/api/users/${email}`);
        const userName = userResponse.data.name; // Assuming `name` is a field in your user object
        localStorage.setItem('userName', userName);
        navigate("/bookappointment");
      } else {
        alert("Invalid Credentials!");
      }

    } catch (err) {
      setError('Invalid credentials');
      console.error(err);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center login-container">
      <div className="card p-4 login-box">
        <h2 className="text-center login">LOGIN</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              value={email}
               placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password"
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="btn btn-primary w-100"><h3>Login</h3></button>
          {error && <p className="text-danger mt-2">{error}</p>}
         
          <div className="text-center mt-3">
            <Link to="/signup">Not a member? Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import './register.css'; // Import CSS file

const RegisterPage = () => {
  return (
    <div className="container">
      
      <h2>Register</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Enter your username" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" placeholder="Confirm your password" required />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" placeholder="Enter your phone number" required />
        </div>
        <div className="button-container">
          <button type="submit">Register</button>
          <a href="/login">Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;

import React from 'react';
import './forgotPassword.css'; // Import CSS file

const ForgotPasswordPage = () => {
  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="button-container">
          <button type="submit">Reset Password</button>
          <a href="/login">Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;

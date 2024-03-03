import React from 'react';
import './setNewPassword.css'; // Import CSS file

const SetNewPasswordPage = () => {
  return (
    <div className="container">
      <h2>Set New Password</h2>
      <form>
        <div>
          <label htmlFor="password">New Password:</label>
          <input type="password" id="password" placeholder="Enter your new password" required />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm New Password:</label>
          <input type="password" id="confirmPassword" placeholder="Confirm your new password" required />
        </div>
        <div className="button-container">
          <button type="submit">Set Password</button>
          <a href="/login">Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default SetNewPasswordPage;

import React from 'react';
import './login.css'; // Import CSS file

const Login = () => {
  return (
    <div className="login-container">
      <div className="background-image">
        {/* Replace the src attribute with your image path */}
        <img src="/R (4).jpg" alt="Background" />
      </div>
      <div className="form-container">
        <h2 className="title">Login</h2>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="input" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="input" />
          </div>
          <button type="submit" className="button">Login</button>
        </form>
        <div className="links-container">
          <a href="/forgotpassword" className="link">Quên mật khẩu?</a>
          <span>|</span>
          <a href="/register" className="link">Đăng ký</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

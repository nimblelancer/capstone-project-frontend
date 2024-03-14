import React from 'react';
import styles from './fgpForm.module.css';

const FgpForm = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Xử lý logic khi người dùng gửi form
//   };

  return (
    <form className={styles.form}>
      <h1>Forgot Password</h1>
      <p>Enter your email address below and we'll send you a link to reset your password.</p>
      <input type="email" placeholder="Email" name="email" required />
      <button type="submit" className={styles.submitButton}>Reset Password</button>
    </form>
  );
};

export default FgpForm;

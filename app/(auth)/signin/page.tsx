import React from 'react';
import SigninForm from '@/components/SignInForm/signinForm';
import styles from './page.module.css'; // Import CSS module for styling

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <p>Welcome to our website!!!</p>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.formWrapper}>
          <SigninForm />
        </div>
      </div>
    </div>
  );
};

export default Page;

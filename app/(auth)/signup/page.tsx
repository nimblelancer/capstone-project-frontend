import React from 'react';
import SignupForm from '@/components/SignUpForm/signupForm'; 
import styles from './page.module.css'; 

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.centeredContent}>
        <div className={styles.formWrapper}>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Page;

import React from 'react';
import SignUpForm from '@/components/SignUpForm/signupForm'; 
import styles from './page.module.css'; 

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.centeredContent}>
        <div className={styles.formWrapper}>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default Page;

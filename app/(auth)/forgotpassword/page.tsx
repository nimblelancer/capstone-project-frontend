import React from 'react'
import FgpForm from '@/components/ForgotPassword/fgpForm'
import styles from './page.module.css'; // Import CSS module for styling
const page = () => {
  return (
    <div className={styles.container}>
    <div className={styles.centeredContent}>
      <div className={styles.formWrapper}>
        <FgpForm />
      </div>
    </div>
  </div>
  )
}

export default page
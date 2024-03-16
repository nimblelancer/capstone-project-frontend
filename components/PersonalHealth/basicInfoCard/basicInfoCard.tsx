// components/BasicInfoCard.tsx
import React from 'react';
import styles from './BasicInfoCard.module.css';
import Image from 'next/image';
// Define the props type
interface BasicInfoCardProps {
  title: string;
  icon: string;
  value: string;
  unit: string;
}


const BasicInfoCard: React.FC<BasicInfoCardProps> = ({ title, icon, value, unit }) => {
  return (
    <div className={styles.card}>
      <Image src={icon} alt={title} width={50} height={50} />
      <h3>{title}</h3>
      <p>{`${value} ${unit}`}</p>
    </div>
  );
};

export default BasicInfoCard;

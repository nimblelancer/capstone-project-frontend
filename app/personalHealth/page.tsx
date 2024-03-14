"use client";
import Head from "next/head";
import HumanBodyImage from "@/component/HumanBodyImage/HumanBodyImage";
import { useState } from "react";
import BasicInfoCard from "@/component/basicInfoCard/basicInfoCard";
import styles from './personalHealth.module.css';
const healthData = [
  {
    title: "Blood Sugar",
    icon: "/icons/sugar-blood-level.png",
    value: "120",
    unit: "mg/DL",
  },
  {
    title: "Temperature",
    icon: "/icons/thermometer.png",
    value: "36.6",
    unit: "°C",
  },
  {
    title: "SPO2",
    icon: "/icons/heart-pulse-solid.svg",
    value: "120",
    unit: "%",
  },
  {
    title: "Blood Pressure",
    icon: "/icons/blood-pressure.png",
    value: "80",
    unit: "mmHg",
  },
  {
    title: "Heart Beat",
    icon: "/icons/heart-beat.png",
    value: "75",
    unit: "bpm",
  },
  {
    title: "Height",
    icon: "/icons/icons8-height-64.png",
    value: "175",
    unit: "cm",
  },
  {
    title: "Weight",
    icon: "/icons/weight-scale-solid.svg",
    value: "65",
    unit: "kg",
  },
  {
    title: "Blood Group",
    icon: "/icons/eye-dropper-solid.svg",
    value: "75",
    unit: "bpm",
  },
  // Add other health data items here
];
const Overview = () => {
  // State to track which part of the body is clicked
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);

  // Function to handle click on body parts
  const handleBodyPartClick = (part: string) => {
    setSelectedBodyPart(part);
    // You can perform additional actions based on the selected body part
    // For example, fetch related information from an API
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Overview Page</title>
      </Head>

      {/* Breadcrumb
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Overview
          </li>
        </ol>
      </nav> */}

      
      <div className={styles.splitcontainer}>
        
          {/* First Half Part */}
          <div className={styles.leftside}>
            <h1 className= {styles.h1}>Hi,User Name</h1>
            <h2 className={styles.titleofhealthinfo}>Your Health Information</h2>
            <div className="health-info">
              {healthData.map((data, index) => (
                <BasicInfoCard
                  key={index}
                  title={data.title}
                  icon={data.icon}
                  value={data.value}
                  unit={data.unit}
                />
              ))}
            </div>
          </div>
          {/* Second half part - Human Body Image */}
          <div className={styles.rightside}> 
            <HumanBodyImage />
          </div>
        </div>
    </div>
    
  );
};

export default Overview;

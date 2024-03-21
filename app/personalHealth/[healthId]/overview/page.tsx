"use client";
import HumanBodyImage from "@/components/Overview/HumanBodyImage/HumanBodyImage";
import { useState, useEffect } from "react";
import BasicInfoCard from "@/components/Overview/basicInfoCard/basicInfoCard";
import overviewStyles from "./overview.module.css";
import Breadcrum from "@/components/Breadcrum/Breadcrum";
interface HealthDataItem {
  title: string;
  icon: string;
  value: string;
  unit: string;
}
const Overview: React.FC = () => {
  const initialHealthData: HealthDataItem[] = [
    // Add your health data items here
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
  ];
  const [healthData, setHealthData] = useState<HealthDataItem[]>(() => {
    // Check if window is defined (ensures we are in the browser environment)
    if (typeof window !== 'undefined') {
      // Access localStorage if available
      const storedHealthData = localStorage.getItem("healthData");
      /// Parse stored data or use initial data if no stored data found
      return storedHealthData ? JSON.parse(storedHealthData) : initialHealthData;
    }
    // If not in browser environment, return initial data
    return initialHealthData;
  });
  const [bmi, setBMI] = useState<number | null>(null);
  const handleUpdateHealthData = (index: number, newValue: string) => {
    const updatedHealthData = [...healthData];
    updatedHealthData[index].value = newValue;
    setHealthData(updatedHealthData);
  };
  useEffect(() => {
    // Calculate BMI when height and weight are available
    const weight = parseFloat(healthData.find(item => item.title === 'Weight')?.value || '0');
    const height = parseFloat(healthData.find(item => item.title === 'Height')?.value || '0') / 100; // Convert cm to m
    if (weight > 0 && height > 0) {
      const bmiValue = weight / (height * height);
      setBMI(bmiValue);
    } else {
      setBMI(null);
    }
    //Update localStorage when healthData changes
    localStorage.setItem("healthData", JSON.stringify(healthData));
  }, [healthData]);

  return (
    <div className={overviewStyles.overviewContainer}>
        <div className={overviewStyles.basicInfoPart}>
          <Breadcrum />
          <h2 className={overviewStyles.titleOfHealthInfo}>
            Your Health Information
          </h2>
          <div className={overviewStyles.gridHealthInfo}>
            {[0, 1].map((evenOdd) => (
              <div style={{ width: "50%" }} key={evenOdd}>
                {healthData.map((data, index) => {
                  if (index % 2 === evenOdd) {
                    return (
                      <div
                        key={index}
                        style={{
                          marginBottom: "20px",
                        }}
                      >
                        <BasicInfoCard
                          title={data.title}
                          icon={data.icon}
                          value={data.value}
                          unit={data.unit}
                          onUpdateValue={(newValue) => handleUpdateHealthData(index, newValue)}
                        />
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            ))}
          </div>
          {bmi !== null && (
          <div className={overviewStyles.bmiCardCenter}>
           <div className={overviewStyles.bmiCard}>
            <BasicInfoCard
              title="BMI"
              icon="/icons/bmi.png" // You can add a BMI icon here
              value={bmi.toFixed(2)} // Limit to two decimal places
              unit="kg/m²"
              onUpdateValue={(newValue) => handleUpdateHealthData(-1, newValue)} // Use -1 as a dummy index for BMI card
            />
          </div>
        </div>
        )}
        </div>
        <div className={overviewStyles.humanBody3DImage}>
          <HumanBodyImage />
        </div>
      </div>
  );
};

export default Overview;

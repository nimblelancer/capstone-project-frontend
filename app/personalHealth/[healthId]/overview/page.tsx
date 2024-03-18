"use client";
import HumanBodyImage from "@/components/Overview/HumanBodyImage/HumanBodyImage";
import { useState } from "react";
import BasicInfoCard from "@/components/Overview/basicInfoCard/basicInfoCard";
import Navbar from "@/components/Overview/Navbar/Navbar";
import overviewStyles from "./overview.module.css";
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
    <div>
      <Navbar />

      <div className={overviewStyles.overviewContainer}>
        <div className={overviewStyles.basicInfoPart}>
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
        </div>
        <div className={overviewStyles.humanBody3DImage}>
          <HumanBodyImage />
        </div>
      </div>
    </div>
  );
};

export default Overview;

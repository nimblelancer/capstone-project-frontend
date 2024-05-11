"use client";
import HumanBodyImage from "@/components/Overview/HumanBodyImage/HumanBodyImage";
import { useState, useEffect } from "react";
import BasicInfoCard from "@/components/Overview/basicInfoCard/basicInfoCard";
import overviewStyles from "./overview.module.css";
import Breadcrum from "@/components/Breadcrum/Breadcrum";
import Tdee from "../../../../components/Overview/TDEE/TDEE";
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
      value: "",
      unit: "mg/DL",
    },
    {
      title: "Temperature",
      icon: "/icons/thermometer.png",
      value: "",
      unit: "°C",
    },
    {
      title: "SPO2",
      icon: "/icons/heart-pulse-solid.svg",
      value: "",
      unit: "%",
    },
    {
      title: "Blood Pressure",
      icon: "/icons/blood-pressure.png",
      value: "",
      unit: "mmHg",
    },
    {
      title: "Heart Beat",
      icon: "/icons/heart-beat.png",
      value: "",
      unit: "bpm",
    },
    {
      title: "Height",
      icon: "/icons/icons8-height-64.png",
      value: "",
      unit: "cm",
    },
    {
      title: "Weight",
      icon: "/icons/weight-scale-solid.svg",
      value: "",
      unit: "kg",
    },
    {
      title: "Blood Group",
      icon: "/icons/eye-dropper-solid.svg",
      value: "",
      unit: "bpm",
    },
  ];
  const [healthData, setHealthData] =
    useState<HealthDataItem[]>(initialHealthData);
  const handleUpdateHealthData = async (index: number, newValue: string) => {
    try {
      // Update value in backend database
      const healthId = window.location.pathname.split("/")[2]; // Extract healthId from the URL
      const response = await fetch(`/api/basicInfo/healthRecord/${healthId}`, { // Update the API endpoint
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({  index,value: newValue }),
      });
      if (!response.ok) {
        throw new Error("Failed to update value in database");
      }
      console.log("Value updated in database successfully");
    } catch (error) {
      console.error("Error updating value in database:", error);
    }
  };
  useEffect(() => {
    fetchHealthData();
  }, []);
  const fetchHealthData = async () => {
    try {
      const healthId = window.location.pathname.split("/")[2]; // Extract healthId from the URL
      const response = await fetch(`/api/basicInfo/healthRecord/${healthId}`); // Fetch health data for BasicInfo with HealthRecord ID from the route parameter
      if (response.ok) {
        const data = await response.json();
        const updatedHealthData = healthData.map((item) => {
          switch (item.title) {
            case "Blood Sugar":
              return { ...item, value: data.bloodSugar };
            case "Temperature":
              return { ...item, value: data.temperature };
            case "SPO2":
              return { ...item, value: data.spo2 };
            case "Blood Pressure":
              return { ...item, value: data.bloodPressure };
            case "Heart Beat":
              return { ...item, value: data.heartRate };
            case "Height":
              return { ...item, value: data.height };
            case "Weight":
              return { ...item, value: data.weight };
            case "Blood Group":
              return { ...item, value: data.bloodGroup };
            default:
              return item;
          }
        });
        setHealthData(updatedHealthData);
      } else {
        throw new Error("Failed to fetch health data");
      }
    } catch (error) {
      console.error("Error fetching health data:", error);
    }
  };

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
                        onUpdateValue={(newValue) =>
                          handleUpdateHealthData(index, newValue)
                        }
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
        <div>
          <Tdee />
        </div>
      </div>
      <div className={overviewStyles.humanBody3DImage}>
        <HumanBodyImage />
      </div>
    </div>
  );
};

export default Overview;

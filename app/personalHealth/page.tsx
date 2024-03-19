'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import MainLayout from "../personalHealth/layout";
import Card from "@/components/HealthRecord/card";
import "../globals.css";
import AddButton from "@/components/HealthRecord/addButton";
import HealthRecordForm from "@/components/HealthRecord/healthRecordForm";
import HealthRecordDetails from "@/components/HealthRecord/heathRecordDetail";
import axios from 'axios';


const HealthRecordPage = () => {
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [healthRecords, setHealthRecords] = useState([
    { id: 1, name: 'John Doe', age: 30, gender: 'Male', relationshipType: 'Father', bloodIndex: "140"},
    { id: 2, name: 'Jane Smith', age: 25, gender: 'Female', relationshipType: 'Mother', bloodIndex: "140" },
    { id: 1, name: 'John Doe', age: 30, gender: 'Male', relationshipType: 'Father',bloodIndex: "140"},
    { id: 2, name: 'Jane Smith', age: 25, gender: 'Female', relationshipType: 'Mother', bloodIndex: "140" },
    { id: 1, name: 'John Doe', age: 30, gender: 'Male', relationshipType: 'Father', bloodIndex: "140" },
    { id: 2, name: 'Jane Smith', age: 25, gender: 'Female', relationshipType: 'Mother', bloodIndex: "140" },
    { id: 1, name: 'John Doe', age: 30, gender: 'Male', relationshipType: 'Father', bloodIndex: "140" },
    { id: 2, name: 'Jane Smith', age: 25, gender: 'Female', relationshipType: 'Mother', bloodIndex: "140" },
    { id: 1, name: 'John Doe', age: 30, gender: 'Male', relationshipType: 'Father', bloodIndex: "140" },
    { id: 2, name: 'Jane Smith', age: 25, gender: 'Female', relationshipType: 'Mother', bloodIndex: "140" },
  ]);

  const handleAddButtonClick = () => {
    setSelectedRecord(null);
    setShowForm(true);
  };

  const handleCardClick = (record) => {
    setSelectedRecord(record);
    setShowForm(false);
  };


  const handleDelete = (recordToDelete) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      const updatedRecords = healthRecords.filter(record => record.id !== recordToDelete.id);
      setHealthRecords(updatedRecords);
    }
  };

  const handleFormSubmit = (data) => {
    if (selectedRecord) {
      // Update existing health record
      const updatedRecords = healthRecords.map((record) =>
        record.id === selectedRecord.id ? { ...record, ...data } : record
      );
      setHealthRecords(updatedRecords);
    } else {
      // Add new health record
      const newRecord = { id: healthRecords.length + 1, ...data };
      setHealthRecords([...healthRecords, newRecord]);
    }
    setShowForm(false);
    setSelectedRecord(null);
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setSelectedRecord(null);
  };

  return (
    <MainLayout>
      <div className="flex">
        <div className="w-1/2 p-4 relative">
          <div className="absolute top-0 right-0 mt-8 mr-4">
            <AddButton onClick={handleAddButtonClick}/>
          </div>
          <div className="mt-20 grid grid-cols-2 gap-4 scrollable-container" style={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto', paddingRight: '20px' }}>
            {healthRecords.map((record) => (  
              <Card key={record.id} healthRecord={record} onClick={handleCardClick} onDelete={handleDelete} />
            ))}
          </div>
        </div>
        <motion.div className="mt-20 w-1/2 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {showForm ? (
            <HealthRecordForm onSubmit={handleFormSubmit} onCancel={handleFormCancel} initialValues={selectedRecord} />
          ) : (
            <HealthRecordDetails healthRecord={selectedRecord} />
          )}
        </motion.div>
      </div>
    </MainLayout>  
  );
};

export default HealthRecordPage;
  

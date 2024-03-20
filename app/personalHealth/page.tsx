
'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Card from "@/components/HealthRecord/card";
import "../globals.css";
import AddButton from "@/components/HealthRecord/addButton";
import HealthRecordForm from "@/components/HealthRecord/healthRecordForm";
import HealthRecordDetails from "@/components/HealthRecord/heathRecordDetail";
import axios from 'axios';



const HealthRecordPage = () => {
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [healthRecords, setHealthRecords] = useState([]);

  useEffect(() => {
    fetchHealthRecords();
  }, []); // Empty dependency array to run this effect only once on mount

  const fetchHealthRecords = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/healthRecord');
      setHealthRecords(response.data);
    } catch (error) {
      console.error('Error fetching health records:', error);
    }
  };

  const handleAddButtonClick = () => {
    setSelectedRecord(null);
    setShowForm(true);
  };

  const handleCardClick = (record) => {
    setSelectedRecord(record);
    setShowForm(false);
  };

  const handleDelete = async (recordToDelete) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`http://localhost:5000/api/healthRecord/${recordToDelete._id}`);
        setHealthRecords(prevRecords => prevRecords.filter(record => record._id !== recordToDelete._id));
      } catch (error) {
        console.error('Error deleting health record:', error);
      }
    }
  };
  

  const handleFormSubmit = async (data) => {
    try {
      if (selectedRecord) {
        // Update existing health record
        await axios.put(`http://localhost:5000/api/healthRecord/${selectedRecord._id}`, data);
      } else {
        // Add new health record
        await axios.post(`http://localhost:5000/api/healthRecord`, data);
      }
      setShowForm(false);
      setSelectedRecord(null);
      fetchHealthRecords(); // Refresh health records after submission
    } catch (error) {
      console.error('Error submitting health record:', error);
    }
  };
  
  const handleFormCancel = () => {
    setShowForm(false);
    setSelectedRecord(null);
  };

  return (
    <div className="flex">
  <div className="w-1/2 p-4 relative">
    <div className="mt-20 mb-10 grid grid-cols-2 gap-4 scrollable-container" style={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto', paddingRight: '20px', position: 'relative' }}>
      {healthRecords.map((record) => (  
        <Card key={record._id} healthRecord={record} onClick={handleCardClick} onDelete={handleDelete} />
      ))}
    </div>
    <div className="absolute bottom-0 right-0 mt-6 mr-4 z-10">
      <AddButton onClick={handleAddButtonClick}/>
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

  
  );
};

export default HealthRecordPage;

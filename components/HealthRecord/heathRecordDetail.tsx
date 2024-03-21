// components/healthRecord/HealthRecordDetails.tsx

import React from 'react';

const HealthRecordDetails = ({ healthRecord }) => {
  // Check if healthRecord is null or undefined before accessing its properties
  if (!healthRecord) {
    return <div>No health record selected</div>;
  }

  return (
    <div className="border p-4">
      <h2>{healthRecord.name}</h2>
      <p>Age: {healthRecord.age}</p>
      <p>Gender: {healthRecord.gender}</p>
      <p>Relationship Type: {healthRecord.relationshipType}</p>
      <p>Blood Index: {healthRecord.bloodIndex}</p>
      {/* Display other details here */}
    </div>
  );
};

export default HealthRecordDetails;


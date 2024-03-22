import React from "react";
import Link from "next/link";

const HealthRecordDetails = ({ userId, healthRecord }) => {
  // Check if healthRecord is null or undefined before accessing its properties
  if (!healthRecord) {
    return <div>No health record selected</div>;
  }

  return (
    <div>
      <div className="relative mb-10 border p-4">
        <h2>Name: {healthRecord.name}</h2>
        <p>Age: {healthRecord.age}</p>
        <p>Gender: {healthRecord.gender}</p>
        <p>Relationship Type: {healthRecord.relationshipType}</p>
        {/* Display other details here */}
      </div>

      {/* Button container */}
      <div className="relative mt-6">
        <div className="absolute bottom-0 right-0 mb-4 mr-4">
          {/* Positioned absolutely */}
          <Link href={`/personalHealth/${userId}/overview`}>
            <button>Show More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HealthRecordDetails;

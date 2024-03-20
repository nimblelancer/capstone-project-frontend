

import React from 'react';
import Link from "next/link";

const HealthRecordDetails = ({ healthRecord }) => {
  // Check if healthRecord is null or undefined before accessing its properties
  if (!healthRecord) {
    return <div>No health record selected</div>;
  }

  return (
    <div className="mb-10 border p-4 relative"> {/* Added relative positioning */}
      <h2>{healthRecord.name}</h2>
      <p>Age: {healthRecord.age}</p>
      <p>Gender: {healthRecord.gender}</p>
      <p>Relationship Type: {healthRecord.relationshipType}</p>
      {/* Display other details here */}

      {/* "Show More" button */}
      <div className="absolute bottom-0 right-0 mb-4 mr-4"> {/* Positioned absolutely */}
        <Link href="/personalHealth/_id/overview">
          <button>Show More</button>
        </Link>
      </div>
    </div>
  );
};
export default HealthRecordDetails;



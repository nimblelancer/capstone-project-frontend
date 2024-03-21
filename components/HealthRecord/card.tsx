// import React from 'react';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardBody from '@mui/material/CardContent';
// import Image from 'next/image';

// const CustomCard = ({ healthRecord, onClick }) => {
//   return (
//     <Card className="border p-4 mb-4 cursor-pointer" onClick={() => onClick(healthRecord)}>
//       <CardBody className="overflow-visible py-2">
//       <h2>{healthRecord.name}</h2>
//       <p>Age: {healthRecord.age}</p>
//       </CardBody>
//     </Card>
//   );
// };
// export default CustomCard;

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardBody from '@mui/material/CardContent';


const CustomCard = ({ healthRecord, onClick, onDelete }) => {
  const [deleteTimeout, setDeleteTimeout] = useState(null);

  // Function to handle the long press
  const handleMouseDown = () => {
    const timeout = setTimeout(() => {
      onDelete(healthRecord);
    }, 1000); // 1 second delay for long press
    setDeleteTimeout(timeout);
  };

  // Function to cancel long press when mouse is released early
  const handleMouseUp = () => {
    clearTimeout(deleteTimeout);
  };

  return (
    <Card className="border p-4 mb-4 cursor-pointer" onClick={() => onClick(healthRecord)} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <CardBody className="overflow-visible py-2">
        <h2>{healthRecord.name}</h2>
        <p>Age: {healthRecord.age}</p>
      </CardBody>
    </Card>
  );
};

export default CustomCard;



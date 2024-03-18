import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardBody from '@mui/material/CardContent';
import Image from 'next/image';

const CustomCard = ({ healthRecord, onClick }) => {
  return (
    <Card className="border p-4 mb-4 cursor-pointer" onClick={() => onClick(healthRecord)}>
      <CardBody className="overflow-visible py-2">
      <h2>{healthRecord.name}</h2>
      <p>Age: {healthRecord.age}</p>
      </CardBody>
    </Card>
  );
};
export default CustomCard;

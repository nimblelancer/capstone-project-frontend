import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./CardMedicalHistory.module.css";

interface MedicalHistoryCardProps {
  key: number;
  location: string;
  dateTime: string;
  diseaseName: string;
  doctorName: string;
}

const MedicalHistoryCard: React.FC<MedicalHistoryCardProps> = ({
  key,
  location,
  dateTime,
  diseaseName,
  doctorName,
}) => {
  const dateObject = new Date(dateTime);

  dateObject.setHours(dateObject.getHours() - 7);

  const formattedDateTime = new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(dateObject);

  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {location}
        </Typography>
        <Typography variant="h5" component="div">
          {diseaseName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {formattedDateTime}
        </Typography>
        <Typography variant="body2">{doctorName}</Typography>
      </CardContent>
    </Card>
  );
};

export default MedicalHistoryCard;

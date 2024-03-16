// components/BasicInfoCard.tsx
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// Define the props type
interface BasicInfoCardProps {
  title: string;
  icon: string;
  value: string;
  unit: string;
}

const BasicInfoCard: React.FC<BasicInfoCardProps> = ({
  title,
  icon,
  value,
  unit,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 200,
        textAlign: "center",
        boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="60"
          image={icon}
          style={{
            width: "60px",
            height: "60px",
            display: "block", // Ensure the image is treated as a block element
            margin: "0 auto", // Center the image horizontally
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {value}
            {unit}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BasicInfoCard;

// components/BasicInfoCard.tsx
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

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
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedValue, setEditedValue] = React.useState(value);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedValue(event.target.value);
  };
  return (
    <Card
      sx={{
        maxWidth: 200,
        textAlign: "center",
        boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
       <div onDoubleClick={handleDoubleClick}>
        <CardMedia
          component="img"
          height="60"
          image={icon}
          style={{
            width: "60px",
            height: "60px",
            display: "block",
            margin: "0 auto",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            {title}
          </Typography>
          {isEditing ? (
            <TextField
              autoFocus
              fullWidth
              value={editedValue}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="standard"
            />
          ) : (
            <Typography variant="body1" color="text.secondary">
              {value}
              {unit}
            </Typography>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default BasicInfoCard;

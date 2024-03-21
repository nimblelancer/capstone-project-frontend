import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Button,
} from "@mui/material";
import { medicalHistories } from "@/lib/data";
import { Medication as MedicationIcon } from "@mui/icons-material";
import { FileUpload as UploadIcon } from "@mui/icons-material";

const Prescription = ({ medicalHistoryId }) => {
  if (!medicalHistoryId) {
    return (
      <Typography variant="body1" color="text.secondary">
        No prescription information available.
      </Typography>
    );
  }

  const prescription = medicalHistories.find(
    (h) => h.id === medicalHistoryId,
  )?.prescriptions;
  const medications = prescription?.split(/,\s*/);

  return (
    <div>
      <Typography
        variant="h6"
        style={{ fontStyle: "bold", color: "black", fontSize: "1.2rem" }}
      >
        Prescriptions:
      </Typography>
      <List dense={false}>
        {" "}
        {medications?.map((medication, index) => (
          <ListItem key={index} sx={{ paddingY: 1 }}>
            {" "}
            <ListItemIcon>
              <MedicationIcon style={{ color: "blue" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" color="black">
                  {medication}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
      <Grid item>
        <label htmlFor="fileInput">
          <Button
            variant="contained"
            sx={{ mr: 1, color: "black" }}
            component="span"
          >
            <input id="fileInput" type="file" hidden />
            <UploadIcon />
            Upload
          </Button>
        </label>
      </Grid>
    </div>
  );
};

export default Prescription;

"use client";
import React from "react";
import { Grid, Divider, Box } from "@mui/material";
import MedicalHistory from "@/components/MedicalHistory/MedicalHistory";
import Prescription from "@/components/MedicalHistory/Prescription/Prescription";
import MedicalExaminationForm from "@/components/MedicalHistory/MedicalExaminationForm/MedicalExaminationForm";

function page() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <MedicalHistory />
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ overflowY: "auto", maxHeight: "700px", marginTop: "1.5rem"}}>
            {" "}
            <MedicalExaminationForm medicalHistoryId={1} />
            <Divider variant="middle" sx={{ marginY: 2 }} />
            <Prescription medicalHistoryId={1} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default page;

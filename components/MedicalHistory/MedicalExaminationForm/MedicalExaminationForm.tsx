import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { medicalHistories } from "@/lib/data";
import { FileUpload as UploadIcon } from "@mui/icons-material";
import moment from "moment";

const MedicalExaminationForm = ({ medicalHistoryId }) => {
  if (!medicalHistoryId) {
    return <p>No Medical Examination Form information available.</p>;
  }
  const medicalHistory = medicalHistories.find(
    (h) => h.id === medicalHistoryId,
  );

  const [selectedFile, setSelectedFile] = useState(null); 

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); 
  };

  const handleChange = (event) => {
    // const { name, value } = event.target;
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
  };

  const formattedDateTime = moment(medicalHistory?.dateTime).format(
    "YYYY-MM-DDTHH:mm",
  );

  const handleSave = () => {
    // onSave(formData);
  };

  return (
    <form>
      <h5 style={{ fontStyle: "bold", color: "black", fontSize: "1.2rem" }}>
        Medical Examination Form
      </h5>
      <TextField
        label="Location"
        name="location"
        value={medicalHistory?.location}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2, mt: 2 }}
      />
      <TextField
        label="Date and Time"
        type="datetime-local"
        name="dateTime"
        value={formattedDateTime}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Disease Name"
        name="diseaseName"
        value={medicalHistory?.diseaseName}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Symptoms"
        name="symptoms"
        multiline
        rows={4}
        value={medicalHistory?.symptoms}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Faculty"
        name="faculty"
        value={medicalHistory?.faculty}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Doctor Name"
        name="doctorName"
        value={medicalHistory?.doctorName}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Total Money"
        name="totalMoney"
        type="number"
        value={medicalHistory?.totalMoney}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Grid container justifyContent="space-between">
        <Grid item>
          <label htmlFor="fileInput">
            <Button
              variant="contained"
              sx={{ mr: 1, color: "black" }}
              component="span"
            >
              <input
                id="fileInput"
                type="file"
                hidden
                onChange={handleFileChange}
              />
              <UploadIcon />
              Upload
            </Button>
          </label>
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            sx={{ mr: 1, color: "black" }}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MedicalExaminationForm;

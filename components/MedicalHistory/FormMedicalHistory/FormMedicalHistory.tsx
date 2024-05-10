import React, { useState } from "react";
import { Modal, Box, TextField, Button, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const FormMedicalHistory = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    location: "",
    dateTime: new Date(),
    diseaseName: "",
    symptoms: "",
    faculty: "",
    doctorName: "",
    ultrasoundScanImg: "",
    diagnosticImg: "",
    prescriptions: "",
    totalMoney: 0,
  });
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    maxHeight: "90vh",
    overflowY: "auto",
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TextField
          fullWidth
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Date and Time"
          type="datetime-local"
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Disease Name"
          name="diseaseName"
          value={formData.diseaseName}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Symptoms"
          name="symptoms"
          multiline
          rows={4}
          value={formData.symptoms}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Faculty "
          name="faculty"
          value={formData.faculty}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Doctor Name"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Prescriptions"
          name="prescriptions"
          multiline
          rows={4}
          value={formData.prescriptions}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Total Money"
          name="totalMoney"
          type="number"
          value={formData.totalMoney}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="ultrasound-scan">Ultrasound Scan</label>
          <input
            id="ultrasound-scan"
            type="file"
            name="ultrasoundScanImg"
            onChange={handleChange}
            style={{ display: "none" }}
          />
          <IconButton
            component="span"
            color="primary"
            onClick={() => document.getElementById("ultrasound-scan").click()}
          >
            <CloudUploadIcon />
          </IconButton>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="diagnostic-image">Diagnostic Image</label>
          <input
            id="diagnostic-image"
            type="file"
            name="diagnosticImg"
            onChange={handleChange}
            style={{ display: "none" }}
          />
          <IconButton
            component="span"
            color="primary"
            onClick={() => document.getElementById("diagnostic-image").click()}
          >
            <CloudUploadIcon />
          </IconButton>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
          <Button onClick={handleSave} sx={{ mr: 1 }}>
            Save
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default FormMedicalHistory;

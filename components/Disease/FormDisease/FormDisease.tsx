"use client";
import { Autocomplete, Box, Button, Modal, TextField } from "@mui/material";
import { listDisease } from "../../../lib/data";
import { useState } from "react";
import { revalidatePath, revalidateTag } from "next/cache";

interface formDiseaseInterface {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function FormDisease({ open, handleClose }: formDiseaseInterface) {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (event, newValue) => {
    setSelectedOption(newValue); // Update the selected option in state
  };

  const handleSubmit = async () => {
    try {
      // Assuming you have an object where you want to add the selected option
      const dataToSend = {
        selectedOption: selectedOption,
      };

      const data = {
        name: dataToSend,
        totalOfInjection: 0,
        vaccination: [],
        healthRecord: "65fc93744386823616cf5741",
      };

      await fetch("http://localhost:3055/api/disease", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      revalidateTag("disease");
      handleClose();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={listDisease}
          sx={{ width: "100%" }}
          value={selectedOption}
          onChange={handleOptionChange}
          renderInput={(params) => (
            <TextField {...params} label="Name Of Disease" />
          )}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "2rem",
          }}
        >
          <Button onClick={handleSubmit}>Save</Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default FormDisease;

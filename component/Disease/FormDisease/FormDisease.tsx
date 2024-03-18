import { Autocomplete, Box, Button, Modal, TextField } from "@mui/material";
import { listDisease } from "../../../lib/data";

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
          <Button onClick={handleClose}>Save</Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default FormDisease;

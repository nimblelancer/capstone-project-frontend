import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React from "react";

interface alertInterface {
  open: boolean;
  handleClose: () => void;
}

function Alert({ open, handleClose }: alertInterface) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {`Do you want to delete this item`}
      </DialogTitle>

      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Alert;

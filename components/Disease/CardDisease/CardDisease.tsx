"use client";
import {
  Autocomplete,
  Button,
  Card,
  TextField,
  Typography,
} from "@mui/material";

import styles from "./CardDisease.module.css";
import { useState } from "react";
import Alert from "@/components/Alert/Alert";
import { listDisease } from "../../../lib/data";

function CardDisease({ disease }) {
  const [isEdit, setIsEdit] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={styles.cardDisease} style={{ width: "100%" }}>
        <Autocomplete
          readOnly={isEdit}
          disablePortal
          id="combo-box-demo"
          options={listDisease}
          sx={{ width: "100%" }}
          value={disease?.name}
          renderInput={(params) => (
            <TextField {...params} label="Name Of Disease" />
          )}
        />
        <Typography
          mt={1}
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          No of injection: {disease?.totalOfInjection}
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <Button
            variant="contained"
            className={styles.btn}
            size="small"
            onClick={() => setIsEdit(!isEdit)}
          >
            {isEdit ? "Edit" : "Save"}
          </Button>
          <Button variant="outlined" size="small" onClick={handleClickOpen}>
            Delete
          </Button>
        </div>
        <Alert open={open} handleClose={handleClose} />
      </Card>
    </>
  );
}

export default CardDisease;

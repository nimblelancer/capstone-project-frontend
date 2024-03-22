"use client";
import styles from "./Disease.module.css";

import Breadcrum from "../Breadcrum/Breadcrum";
import CardDisease from "./CardDisease/CardDisease";
import { Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useState } from "react";
import FormDisease from "./FormDisease/FormDisease";

function Disease({ diseases }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.leftside}>
      <Breadcrum />
      <div className={styles.content}>
        {diseases.map((disease) => (
          <CardDisease key={disease.id} disease={disease} />
        ))}

        <Button
          variant="outlined"
          style={{ alignSelf: "flex-end" }}
          onClick={handleClickOpen}
        >
          <AddRoundedIcon />
        </Button>
      </div>
      <FormDisease open={open} handleClose={handleClose} />
    </div>
  );
}

export default Disease;

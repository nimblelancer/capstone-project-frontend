"use client";
import { Button } from "@mui/material";
import CardVaccine from "./CardVaccine/CardVaccine";
import styles from "./Vaccine.module.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import FormVaccine from "./FormVaccine/FormVaccine";
import { useState } from "react";

function Vaccine({ vaccines }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.rightside}>
      {vaccines.map((vacc) => (
        <CardVaccine key={vacc.id} vaccine={vacc} />
      ))}
      {/* <CardVaccine />
      <CardVaccine />
      <CardVaccine />
      <CardVaccine /> */}
      <Button
        onClick={handleClickOpen}
        variant="outlined"
        style={{ alignSelf: "flex-end", marginRight: "95px" }}
      >
        <AddRoundedIcon />
      </Button>
      <FormVaccine open={open} handleClose={handleClose} />
    </div>
  );
}

export default Vaccine;

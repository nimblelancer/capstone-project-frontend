"use client";
import Alert from "@/components/Alert/Alert";
import styles from "./CardVaccine.module.css";
import { Button, Grid, OutlinedInput } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
}));

function CardVaccine({ vaccine }) {
  const [isEdit, setIsEdit] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.cardVaccine}>
      {" "}
      <Grid container spacing={2}>
        <FormGrid item xs={7}>
          <Grid item xs={4}>
            <h5>Name Of Vaccine</h5>
          </Grid>
          <Grid item xs={8}>
            <OutlinedInput
              id="name"
              name="name"
              type="name"
              placeholder="John"
              autoComplete="first name"
              required
              value={vaccine.nameOfVaccine}
              size="small"
              readOnly={isEdit}
            />
          </Grid>
        </FormGrid>
        <FormGrid item xs={5}>
          <Grid item xs={3}>
            <h5>Origin</h5>
          </Grid>
          <Grid item xs={8}>
            <OutlinedInput
              id="origin"
              name="origin"
              type="name"
              placeholder="John"
              autoComplete="first name"
              required
              value={vaccine.origin}
              size="small"
              readOnly={isEdit}
            />
          </Grid>
        </FormGrid>
        <FormGrid item xs={7}>
          <Grid item xs={4}>
            <h5>Date-Time</h5>
          </Grid>
          <Grid item xs={8}>
            <input
              className={styles.date}
              name=""
              value={vaccine.dateTime}
              id=""
              readOnly={isEdit}
            />
          </Grid>
        </FormGrid>
        <FormGrid item xs={5}>
          <Grid item xs={3}>
            <h5>Address</h5>
          </Grid>
          <Grid item xs={8}>
            <OutlinedInput
              id="address"
              name="address"
              type="name"
              placeholder="John"
              autoComplete="first name"
              required
              value={vaccine.location}
              size="small"
              readOnly={isEdit}
            />
          </Grid>
        </FormGrid>
        <FormGrid item xs={12}>
          <Grid item xs={2}>
            <h5>Symptoms</h5>
          </Grid>
          <Grid item xs={7} style={{ marginLeft: "1.2rem" }}>
            <textarea
              className={styles.textarea}
              name=""
              id=""
              value={vaccine.symptoms}
              cols={30}
              rows={3}
              readOnly={isEdit}
            ></textarea>
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              alignSelf: "flex-end",
              textAlign: "right",
              marginBottom: "4px",
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
          </Grid>
        </FormGrid>
        <Alert open={open} handleClose={handleClose} />
      </Grid>
    </div>
  );
}

export default CardVaccine;

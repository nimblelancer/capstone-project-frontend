import { Box, Button, Grid, Modal, OutlinedInput } from "@mui/material";
import React from "react";
import styled from "styled-components";
import styles from "../CardVaccine/CardVaccine.module.css";

interface formVaccineInterface {
  open: boolean;
  handleClose: () => void;
}

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
}));

const style = {
  position: "absolute" as "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function FormVaccine({ open, handleClose }: formVaccineInterface) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
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
                size="small"
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
                size="small"
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
                type="datetime-local"
                name=""
                id=""
                placeholder="yy/MM/dd"
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
                size="small"
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
                cols={30}
                rows={3}
              ></textarea>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                alignSelf: "flex-end",
                textAlign: "right",
              }}
            >
              <Button
                // variant="contained"
                // className={styles.btn}
                // size="small"
                onClick={handleClose}
              >
                Save
              </Button>
              <Button
                onClick={handleClose}
                //   variant="outlined" size="small" onClick={handleClickOpen}
              >
                Cancel
              </Button>
            </Grid>
          </FormGrid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default FormVaccine;

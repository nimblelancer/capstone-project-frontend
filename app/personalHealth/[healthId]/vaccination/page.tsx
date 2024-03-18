import Disease from "@/component/Disease/Disease";
import Vaccine from "@/component/Vaccine/Vaccine";
import { Grid } from "@mui/material";
import React from "react";

function page() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Disease />
        </Grid>
        <Grid item xs={8}>
          <Vaccine />
        </Grid>
      </Grid>
    </div>
  );
}

export default page;

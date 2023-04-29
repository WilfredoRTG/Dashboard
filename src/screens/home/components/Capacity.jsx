import React from "react";
import { Grid } from "@mui/material";
import "../home.css";
import CircularProgressWithLabel from "./CircularProgressWithLabel";

const Capacity = () => {
  return (
    <>
      <div className="wrapper" style={{ marginTop: "25px" }}>
        <h3 className="text">Capacidad</h3>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <CircularProgressWithLabel value={70} colorCircle={"13945C"} legend={"IA"}/>
          </Grid>
          <Grid xs={6}>
            <CircularProgressWithLabel value={70} colorCircle={"A812E0"} legend={"HU"}/>
          </Grid>
          <Grid xs={6}>
            <CircularProgressWithLabel value={70} colorCircle={"EABE3F"} legend={"NE"}/>
          </Grid>
          <Grid xs={6}>
            <CircularProgressWithLabel value={70} colorCircle={"E07B1D"} legend={"CE"}/>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Capacity;

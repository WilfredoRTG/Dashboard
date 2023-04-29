import React from "react";
import { Stack } from "@mui/material";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import "../home.css";


const AvailableSpots = () => {
  return (
    <>
      <div className="containerSpots" style={{ marginTop: "25px" }}>
        <h3 className="text">Lugares disponibles</h3>
          <Stack spacing={2} direction="row">
            <CircularProgressWithLabel value={70} colorCircle={"13945C"} legend={"IA"}/>
            <CircularProgressWithLabel value={70} colorCircle={"A812E0"} legend={"HU"}/>
            <CircularProgressWithLabel value={70} colorCircle={"EABE3F"} legend={"NE"}/>
            <CircularProgressWithLabel value={70} colorCircle={"E07B1D"} legend={"CE"}/>
          </Stack>
      </div>
    </>
  );
};

export default AvailableSpots;

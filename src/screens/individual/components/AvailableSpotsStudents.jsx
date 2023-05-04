import React from "react";
import CircularProgressWithLabelAndMap from "./CircularProgressWithLabelAndMap";
import { Stack, IconButton, Typography } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import MoreVisitedHours from "./MoreVisitedHours";
import { Margin } from "@mui/icons-material";

const AvailableSpotsStudents = () => {
  const iaSpaces = Math.round((100/222)*100);
  const huSpaces = Math.round((100/121)*100);
  const neSpaces = Math.round((100/187)*100);
  const ceSpaces = Math.round((100/162)*100);

  return (
    <>
      <div className="containerGraphsStudent" style={{ marginTop: "25px" }}>
        <div className="containerGraphs">
          <CircularProgressWithLabelAndMap
            value={iaSpaces}
            number={100}
            available={222}
            colorCircle={"13945C"}
            legend={"IA"}
          />
          <MoreVisitedHours />
          

          <CircularProgressWithLabelAndMap
            value={huSpaces}
            number={100}
            available={121}
            colorCircle={"A812E0"}
            legend={"HU"}
          />
          <MoreVisitedHours />

        </div>

        <div className="containerGraphs">
          
          <CircularProgressWithLabelAndMap
            value={neSpaces}
            number={100}
            available={187}
            colorCircle={"EABE3F"}
            legend={"NE"}
          />
          <MoreVisitedHours />
          
          <CircularProgressWithLabelAndMap
            value={ceSpaces}
            number={100}
            available={162}
            colorCircle={"E07B1D"}
            legend={"CE"}
          />
          <MoreVisitedHours />
        </div>
      </div>
    </>
  );
};

export default AvailableSpotsStudents;

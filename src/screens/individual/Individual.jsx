import React from "react";
import "./individual.css";
import AvailableSpotsStudents from "./components/AvailableSpotsStudents";
import { IconButton } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import DrawerStudent from "./components/DrawerStudent";

const Individual = () => {
  return (
    <>
      <div className="root">
        <h1>Estacionamientos UDLAP</h1>
        <AvailableSpotsStudents />
        <DrawerStudent />
      </div>
    </>
  );
};

export default Individual;

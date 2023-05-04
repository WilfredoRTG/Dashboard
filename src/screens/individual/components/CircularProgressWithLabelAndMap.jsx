import React, { useState } from "react";
import {
  CircularProgress,
  Typography,
  Grid,
  Box,
  circularProgressClasses,
  Modal,
} from "@mui/material";

import IA from "./Assets/IA.png";
import CE from "./Assets/CE.png";
import HU from "./Assets/HU.png";
import NE from "./Assets/NE.png";

import { Stack, IconButton } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import "../individual.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Map = (legend) => {
  if (legend === "IA") {
    return IA;
  } else if (legend === "CE") {
    return CE;
  } else if (legend === "HU") {
    return HU;
  } else if (legend === "NE") {
    return NE;
  }
};

const CircularProgressWithLabelAndMap = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="containerCircular">
      <div className="textContainer">
        <IconButton
          onClick={handleOpen}
          sx={{
            color: "#fff",
            backgroundColor: `#${props.colorCircle} !important`,
            borderRadius: "30% !important",
          }}
        >
          <MapIcon />
        </IconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img src={Map(props.legend)} alt="" className="parking" />
          </Box>
        </Modal>
        <p className="number">{props.number}/{props.available}</p>
      </div>
      <Box
        sx={{ position: "relative", display: "inline-flex", padding: "50px" }}
      >
        <Box sx={{ position: "relative" }}>
          <CircularProgress
            variant="determinate"
            sx={{
              color: "white",
              width: "100px !important",
            }}
            thickness={7}
            {...props}
            value={100}
          />
          <CircularProgress
            variant="determinate"
            disableShrink
            sx={{
              color: (theme) => theme.palette.mode === "light",
              animationDuration: "550ms",
              width: "100px !important",
              position: "absolute",
              left: 0,
              [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: "round",
              },
              color: `#${props.colorCircle} !important`,
            }}
            thickness={7}
            {...props}
          />
        </Box>
        <Box
          sx={{
            top: 0,
            left: 60,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="p" component="div" color="white">
            {props.value}%
          </Typography>
        </Box>
      </Box>
        <div className="textContainer">
          <Typography variant="h6" component="div" color="white">
            {props.legend}
          </Typography>
        </div>
    </div>
  );
};

export default CircularProgressWithLabelAndMap;

import React from "react";
import {
  CircularProgress,
  Typography,
  Box,
  circularProgressClasses,
} from "@mui/material";
import "../home.css";

const CircularProgressWithLabel = (props) => {
  return (
    <div className="containerCircular">
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
        <Typography variant="caption" component="div" color="white">
          {props.legend}
        </Typography>
      </div>
    </div>
  );
};

export default CircularProgressWithLabel;

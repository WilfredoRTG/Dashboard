import React from "react";
import { CircularProgress, Typography, Stack, Box, circularProgressClasses } from "@mui/material";
import "../home.css";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex", padding: "50px" }}>
      <Box sx={{ position: 'relative' }}>
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
          color: (theme) => (theme.palette.mode === 'light'),
          animationDuration: '550ms',
          width: "100px !important",
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
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
  );
}

const AvailableSpots = () => {
  return (
    <>
      <div className="containerSpots" style={{ marginTop: "25px" }}>
        <h3 className="text">Lugares disponibles</h3>
          <Stack spacing={2} direction="row">
            <CircularProgressWithLabel value={70} colorCircle={"13945C"} />
          
            <CircularProgressWithLabel value={70} colorCircle={"A812E0"} />
          
            <CircularProgressWithLabel value={70} colorCircle={"EABE3F"} />
          
            <CircularProgressWithLabel value={70} colorCircle={"E07B1D"} />
          </Stack>
      </div>
    </>
  );
};

export default AvailableSpots;

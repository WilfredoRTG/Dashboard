import React from "react";
import { CircularProgress, Typography, Grid, Box, circularProgressClasses } from "@mui/material";
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

const Capacity = () => {
  return (
    <>
      <div className="wrapper" style={{ marginTop: "25px" }}>
        <h3 className="text">Capacidad</h3>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <CircularProgressWithLabel value={70} colorCircle={"13945C"} />
          </Grid>
          <Grid xs={6}>
            <CircularProgressWithLabel value={70} colorCircle={"A812E0"} />
          </Grid>
          <Grid xs={6}>
            <CircularProgressWithLabel value={70} colorCircle={"EABE3F"} />
          </Grid>
          <Grid xs={6}>
            <CircularProgressWithLabel value={70} colorCircle={"E07B1D"} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Capacity;

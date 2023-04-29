import React from "react";
import "../home.css";
import { Stack, IconButton  } from "@mui/material";
import MapIcon from '@mui/icons-material/Map';

const Drawer = () => {
  return (
    <div className="containerDrawer">
      <div className="wrapperDrawer">
        <IconButton sx={{color: "#fff", backgroundColor: "#13945C", borderRadius: '30% !important'}}>
          <MapIcon />
        </IconButton>
        <IconButton sx={{margin: "40px 0", color: "#fff", backgroundColor: "#A812E0", borderRadius: '30% !important'}}>
          <MapIcon />
        </IconButton>
        <IconButton sx={{color: "#fff", backgroundColor: "#EABE3F", borderRadius: '30% !important'}}>
          <MapIcon />
        </IconButton>
        <IconButton sx={{marginTop: "40px", color: "#fff", backgroundColor: "#E07B1D", borderRadius: '30% !important'}} >
          <MapIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Drawer;

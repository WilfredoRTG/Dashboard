import React from "react";
import { Stack, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import "../individual.css";
import { useNavigate } from "react-router-dom";

const DrawerStudent = () => {
  const navigate = useNavigate();
  return (
    <div className="containerDrawer">
      <div className="wrapperDrawer">
        <IconButton
          onClick={() => {
            navigate("/")
          }}
          sx={{
            color: "#fff",
            backgroundColor: "#1296E0",
            borderRadius: "30% !important",
          }}
        >
          <PersonIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default DrawerStudent;

import React from "react";
import "../home.css";
import { Stack, IconButton } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from "react-router-dom";

const Drawer = () => {
  const navigate = useNavigate();
  return (
    <div className="containerDrawer">
      <div className="wrapperDrawer">
        <IconButton
          onClick={() => {
            navigate("/individual")
          }}
          sx={{
            color: "#fff",
            backgroundColor: "#1296E0",
            borderRadius: "30% !important",
          }}
        >
          <AdminPanelSettingsIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Drawer;

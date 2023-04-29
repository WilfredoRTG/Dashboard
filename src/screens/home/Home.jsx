import React from "react";
import "./home.css";
import MoreVisited from "./components/MoreVisited";
import Capacity from "./components/Capacity";
import Days from "./components/Days";
import AvailableSpots from "./components/AvailableSpots";
import Drawer from "./components/Drawer";

const Home = () => {
  return (
    <>
      <div className="root">
        <h1>Datos generales</h1>
        <div className="chartContainer">
          <div className="chartColumnLeft">
            <MoreVisited />
            <Capacity />
          </div>
          <div className="chartColumnRight">
            <Days/>
            <AvailableSpots/>
          </div>
        </div>
        <Drawer/>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { Grid } from "@mui/material";

const data = [
  {
    subject: "Enero",
    A: 120,
  },
  {
    subject: "Febrero",
    A: 98,
  },
  {
    subject: "Marzo",
    A: 86,
  },
  {
    subject: "Abril",
    A: 99,
  },
  {
    subject: "Mayo",
    A: 85,
  },
  {
    subject: "Junio",
    A: 65,
  },
];

const Chart = ({ lugar, color }) => {
  return (
    <div className="daysContainer">
      <h3 className="text">Mes mas concurrido en {lugar}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#fff"
            fill={color}
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

const Days = () => {
  return (
    <>
      <div className="wrapperDays">
        <div className="rowContainer">
          <Chart lugar="NE" color={"#EABE3F"}/>
          <Chart lugar="HU" color={"#A812E0"}/>
        </div>
        <div className="rowContainer">
          <Chart lugar="IA" color={"#13945C"}/>
          <Chart lugar="CE" color={"#E07B1D"}/>
        </div>
      </div>
    </>
  );
};

export default Days;

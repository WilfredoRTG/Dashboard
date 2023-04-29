import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Enero",
    A: 120,
  },
  {
    name: "Febrero",
    A: 98,
  },
  {
    name: "Marzo",
    A: 86,
  },
  {
    name: "Abril",
    A: 99,
  },
  {
    name: "Mayo",
    A: 85,
  },
  {
    name: "Junio",
    A: 65,
  },
];

const Chart = ({ lugar, color }) => {
  return (
    <div className="daysContainer">
      <h3 className="text">Mes mas concurrido en {lugar}</h3>
      <ResponsiveContainer width="70%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="A" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
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

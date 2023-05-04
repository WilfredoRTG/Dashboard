import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

import "../individual.css";

const data = [
  {
    name: "8:00",
    Visitas: 40,
  },
  {
    name: "9:00",
    Visitas: 60,
  },
  {
    name: "10:00",
    Visitas: 75,
  },
  {
    name: "11:00",
    Visitas: 70,
  },
  {
    name: "12:00",
    Visitas: 40,
  },
  {
    name: "13:00",
    Visitas: 60,
  },
  {
    name: "14:00",
    Visitas: 70,
  },
  {
    name: "15:00",
    Visitas: 40,
  },
  {
    name: "16:00",
    Visitas: 20,
  },
  {
    name: "17:00",
    Visitas: 40,
  },
  {
    name: "18:00",
    Visitas: 90,
  },
];

const MoreVisitedHours = () => {
    return (
    <>
        <div className="wrapperHours">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Visitas" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </>
  );
};

export default MoreVisitedHours;

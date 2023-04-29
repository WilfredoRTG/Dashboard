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

const data = [
  {
    name: "NE",
    Visitas: 40,
  },
  {
    name: "IA",
    Visitas: 60,
  },
  {
    name: "CE",
    Visitas: 75,
  },
  {
    name: "HU",
    Visitas: 70,
  },
];

const MoreVisited = () => {
    return (
    <>
        <div className="wrapper">
            <h3 className="text">Lugares mas visitados</h3>
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

export default MoreVisited;

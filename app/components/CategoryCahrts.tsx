"use client";

import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Define TypeScript types
interface DataItem {
  name: string;
  value: number;
  color: string;
}

// Sample data
const data: DataItem[] = [
  { name: "Burger", value: 71, color: "#0033cc" }, // Dark Blue
  { name: "Burger", value: 49, color: "#33334d" }, // Gray Blue
  { name: "Burger", value: 48, color: "#ff6600" }, // Orange
  { name: "Burger", value: 34, color: "#33ccff" }, // Light Blue
  { name: "Burger", value: 26, color: "#ff33cc" }, // Pink
  { name: "Burger", value: 13, color: "#3399ff" }, // Sky Blue
];

const PieChartCategory: React.FC = () => {
  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        {/* Optional Title or Description */}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              label={({ name, value }) => `${name} ${value}`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PieChartCategory;

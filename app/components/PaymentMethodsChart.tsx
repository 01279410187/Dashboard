"use client"
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

interface DataItem {
  name: string;
  value: number;
  percentage?: number;
}

const PaymentMethodsChart: React.FC = () => {
  const data: DataItem[] = [
    { name: 'Cash', value: 34 },
    { name: 'Credit Cash', value: 34 },
    { name: 'Vodafone Cash', value: 34 },
    { name: 'InstaPay', value: 34 }
  ];

  const COLORS: string[] = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  // Calculate total
  const total: number = data.reduce((sum, item) => sum + item.value, 0);
  
  // Calculate percentages
  const dataWithPercentage: DataItem[] = data.map(item => ({
    ...item,
    percentage: Math.round((item.value / total) * 100)
  }));

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
       
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={dataWithPercentage}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ name, percentage }: DataItem) => `${name}: ${percentage}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {dataWithPercentage.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number, name: string) => [
                `${value} (${Math.round((value / total) * 100)}%)`, 
                name
              ]}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PaymentMethodsChart;
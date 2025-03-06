"use client";

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";

// Define TypeScript types
interface Order {
  name: string;
  percent: string;
  category: string;
  categoryColor: string;
}

// Sample data
const orders: Order[] = [
  { name: "Beef", percent: "10 %", category: "Low Ordered", categoryColor: "text-yellow-500" },
  { name: "Beef", percent: "10 %", category: "Low Ordered", categoryColor: "text-yellow-500" },
  { name: "Beef", percent: "10 %", category: "Low Ordered", categoryColor: "text-yellow-500" },
  { name: "Beef", percent: "10 %", category: "Med Ordered", categoryColor: "text-red-500" },
  { name: "Beef", percent: "10 %", category: "Med Ordered", categoryColor: "text-red-500" },
  { name: "Beef", percent: "10 %", category: "High Ordered", categoryColor: "text-blue-700" },
  { name: "Beef", percent: "10 %", category: "High Ordered", categoryColor: "text-blue-700" },
];

const OrderTable: React.FC = () => {
  return (
    <div className="w-full  mx-auto p-4 bg-white rounded-lg shadow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-600 font-semibold">Name</TableHead>
            <TableHead className="text-gray-600 font-semibold">Percent</TableHead>
            <TableHead className="text-gray-600 font-semibold">Category</TableHead>
            <TableHead className="text-gray-600 font-semibold ">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{order.name}</TableCell>
              <TableCell>{order.percent}</TableCell>
              <TableCell className={`font-semibold ${order.categoryColor}`}>{order.category}</TableCell>
              <TableCell className="">
                <MoreHorizontal className="text-gray-500 cursor-pointer " />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

     
    </div>
  );
};

export default OrderTable;

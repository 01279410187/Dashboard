"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Filter, PlusCircle } from "lucide-react";
import SearchInput from "./SearchInput";
import CustomerDialog from "./CustomerDialog";
import { Order } from "../types/interfaces";
import UpdateStatusDialog from "./UpdateStatusDialog";
import ViewOrderDialog from "./ViewOrderDialog";

// Sample data
const orders: Order[] = [
  {
    id: 213,
    customer: "Ahmed Salem",
    price: "120",
    paymentMethod: "Cash",
    orderNote: "Manager, Add Spice",
    discount: "20%",
    status: "Preparing",
    statusColor: "text-yellow-500",
    statusDots: [true, true, false, false],
  },
  {
    id: 214,
    customer: "Ahmed Salem",
    price: "120 ",
    paymentMethod: "Cash",
    orderNote: "Manager, Add Spice",
    discount: "Promo:12312",
    status: "Delivered",
    statusColor: "text-green-500",
    statusDots: [true, true, true, true],
  },
  {
    id: 215,
    customer: "Ahmed Salem",
    price: "120 ",
    paymentMethod: "Cash",
    orderNote: "Manager, Add Spice",
    discount: "Promo:12312",
    status: "Pending",
    statusColor: "text-orange-500",
    statusDots: [true, false, false, false],
  },
  {
    id: 216,
    customer: "Ahmed Salem",
    price: "120 ",
    paymentMethod: "Cash",
    orderNote: "Manager, Add Spice",
    discount: "Promo:12312",
    status: "Delivered",
    statusColor: "text-green-500",
    statusDots: [true, true, true, true],
  },
  {
    id: 217,
    customer: "Ahmed Salem",
    price: "120 ",
    paymentMethod: "Cash",
    orderNote: "Manager, Add Spice",
    discount: "Promo:12312",
    status: "Pending",
    statusColor: "text-orange-500",
    statusDots: [true, false, false, false],
  },
];

const OrdersTableMore: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [orderToView, setOrderToView] = useState<Order | null>(null);
  const [orderToUpdate, setOrderToUpdate] = useState<Order | null>(null);
  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false);

  // Handle status update
  const handleUpdateStatus = (orderId: number, newStatus: string) => {
    console.log(`Updating order ${orderId} to status: ${newStatus}`);

    // Here you would typically update your state or call an API
    // For example:
    // const updatedOrders = orders.map(order =>
    //   order.id === orderId ? {...order, status: newStatus} : order
    // );

    // Close the dialog
    setIsStatusDialogOpen(false);
    setOrderToUpdate(null);
  };

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-center items-center mb-4 mt-5 max-w-7xl space-y-4 lg:space-y-0 lg:space-x-7">
        <SearchInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search For Entities"
          className="w-full lg:w-1/3"
        />
        <div className="flex gap-2">
          <Button className="bg-[#5D469F] hover:bg-[#9c8acf]">
            <Filter className="w-4 h-4 mr-2 text-white" />
            <p className="text-white font-bold text-[1rem]">Filter</p>
          </Button>
          <Button className="bg-[#5D469F] hover:bg-[#9c8acf]">Search</Button>
          <Button variant="outline" className="border-[#5D469F] border-2">
            <PlusCircle className="w-4 h-4 mr-2 text-[#5D469F]" />
            <p className="text-[#5D469F] font-bold text-[1rem]">
              Add New Order
            </p>
          </Button>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto p-6 bg-white rounded-lg shadow mt-8">
        {/* Orders Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order.NO</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Order Note</TableHead>
              <TableHead>Discount Promocode</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>#{order.id}</TableCell>
                <TableCell className="font-semibold cursor-pointer">
                  <CustomerDialog>
                    <span>{order.customer}</span>
                  </CustomerDialog>
                </TableCell>
                <TableCell className="font-bold">
                  {order.price} <span className="font-extrabold">EGP</span>
                </TableCell>
                <TableCell>{order.paymentMethod}</TableCell>
                <TableCell className="font-semibold">
                  {order.orderNote}
                </TableCell>
                <TableCell>{order.discount}</TableCell>
                <TableCell>
                  {/* Status Badge */}
                  <Badge
                    variant="outline"
                    className={`text-sm ${order.statusColor} w-full`}
                  >
                    {order.status}
                  </Badge>

                  <div className="flex items-center justify-between mt-1">
                    {order.statusDots.map((filled, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                          filled ? "bg-green-500" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex justify-between text-xs text-gray-600 font-medium mt-1">
                    <span>T</span>
                    <span>F</span>
                    <span>G</span>
                    <span>Y</span>
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreHorizontal className="text-gray-500 cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Return</DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          setOrderToUpdate(order);
                          setIsStatusDialogOpen(true);
                        }}
                      >
                        Update Status
                      </DropdownMenuItem>
                      <DropdownMenuItem>Print PDF</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setOrderToView(order)}>
                        View Order
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500">
                        Cancel
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Order Details Dialog - Now a separate component */}
      <ViewOrderDialog
        selectedOrder={orderToView}
        onOpenChange={(open) => {
          if (!open) setOrderToView(null);
        }}
      />

      {/* Update Status Dialog - Now a separate component */}
      <UpdateStatusDialog
        isOpen={isStatusDialogOpen}
        onOpenChange={setIsStatusDialogOpen}
        selectedOrder={orderToUpdate}
        onUpdateStatus={handleUpdateStatus}
      />
    </div>
  );
};

export default OrdersTableMore;

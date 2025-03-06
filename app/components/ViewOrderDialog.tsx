"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Order } from "../types/interfaces";


interface ViewOrderDialogProps {
  selectedOrder: Order | null;
  onOpenChange: (open: boolean) => void;
}

const ViewOrderDialog: React.FC<ViewOrderDialogProps> = ({
  selectedOrder,
  onOpenChange,
}) => {
  return (
    <Dialog
      open={!!selectedOrder}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="p-6 rounded-lg w-96">
        {selectedOrder && (
          <div className="text-center">
            <h2 className="text-xl font-bold">
              Order.NO : {selectedOrder.id}
            </h2>
            <p className="font-semibold text-[#5D469F]">Restaurant Details</p>
            <p className="text-[#8C8C8C] font-semibold">Macdonald</p>
            <p className="text-[#8C8C8C] font-semibold">Nasr City Branch</p>
            <p className="text-[#8C8C8C] font-semibold">
              58 Mostafa El Nahhas St., Sixth District
            </p>
            <hr className="my-2 border-dashed border-2 border-[#5D469F]" />
            <p className="font-semibold text-[#5D469F]">Transaction Date</p>
            <p className="text-[#8C8C8C] font-semibold">
              Thursday, November 17, 2022, 12:00 AM
            </p>
            <hr className="my-2 border-dashed border-2 border-[#5D469F]" />
            <p className="font-semibold text-[#5D469F]">Payment Method</p>
            <p className="text-[#8C8C8C] font-semibold">
              {selectedOrder.paymentMethod}
            </p>
            <hr className="my-2 border-dashed border-2 border-[#5D469F]" />
            <p className="font-semibold text-[#5D469F]">Your Order</p>
            <p className="text-[#8C8C8C] font-semibold">
              Order ID: 1212120213013
            </p>
            <div className="flex justify-between items-center">
              <p className="font-extrabold">2 Big Burger </p>
              <p className="text-[#17C173] font-bold">
                {selectedOrder.price}{" "}
                <span className="font-extrabold text-black">EGP</span>
              </p>
            </div>

            <hr className="my-2 border-dashed border-2 border-[#5D469F]" />
            <div className="flex justify-between items-center">
              <p className="font-semibold text-[#5D469F]">Subtotal </p>
              <p className="text-[#17C173] font-bold">
                {" "}
                240.00 <span className="font-extrabold text-black">EGP</span>
              </p>
            </div>

            <hr className="my-2 border-dashed border-2 border-[#5D469F]" />
            <div className="flex justify-between items-center">
              <p className="text-[#8C8C8C] font-semibold">
                Applied discount code
              </p>
              <p className="text-[#5d469f] font-semibold">20%OFF</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#8C8C8C] font-semibold">Discount</p>
              <p className="text-black font-semibold">-30.00EGP(20% OFF)</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#8C8C8C] font-semibold">VAT (20%)</p>
              <p className="text-[#C03744] font-semibold">+10.00 EGP</p>
            </div>
            <hr className="my-2 border-dashed border-2 border-[#5D469F]" />
            <div className="flex justify-between items-center">
              <p className="font-semibold text-[#5D469F]">Grand total </p>
              <p className="text-[#17C173] font-bold">
                {" "}
                210.00 <span className="font-extrabold text-black">EGP</span>
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ViewOrderDialog;
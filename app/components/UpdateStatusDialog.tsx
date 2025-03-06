"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Order } from "../types/interfaces";

interface UpdateStatusDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedOrder: Order | null;
  onUpdateStatus: (orderId: number, status: string) => void;
}

const UpdateStatusDialog: React.FC<UpdateStatusDialogProps> = ({
  isOpen,
  onOpenChange,
  selectedOrder,
  onUpdateStatus,
}) => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(
    selectedOrder?.status || null
  );

  useEffect(() => {
    if (selectedOrder) {
      setSelectedStatus(selectedOrder.status);
    }
  }, [selectedOrder]);

  const handleUpdateClick = () => {
    if (selectedOrder && selectedStatus) {
      onUpdateStatus(selectedOrder.id, selectedStatus);
      setSelectedStatus(null);
    }
  };

  // Reset status when dialog closes
  const handleOpenChange = (open: boolean) => {
    onOpenChange(open);
    if (!open) {
      setSelectedStatus(null);
    }
  };

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case "Preparing":
        return "text-yellow-500 font-extrabold";
      case "Cancelled":
        return "text-red-500 font-extrabold";
      case "Delivered":
        return "text-green-500 font-extrabold"; //
      default:
        return "text-black font-extrabold"; //
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px] rounded-lg">
        <DialogHeader className="relative">
          <DialogTitle className="text-center font-extrabold">
            Update Order Status
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-2">
            <p className="font-medium">Status</p>
            <Select
              value={selectedStatus || ""}
              onValueChange={(value) => setSelectedStatus(value)}
            >
              <SelectTrigger
                className={`col-span-4 w-full ${getStatusColor(
                  selectedStatus
                )}`}
              >
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value="Preparing"
                  className="text-yellow-500 font-extrabold"
                >
                  Preparing
                </SelectItem>
                <SelectItem value="Pending" className="font-extrabold">
                  Pending
                </SelectItem>
                <SelectItem value="Delivered" className="font-extrabold">
                  Delivered
                </SelectItem>
                <SelectItem
                  value="Cancelled"
                  className="text-red-500 font-extrabold"
                >
                  Cancelled
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleUpdateClick}
            className="bg-[#5D469F] hover:bg-[#9c8acf] text-white"
            disabled={!selectedStatus}
          >
            Update Status
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateStatusDialog;

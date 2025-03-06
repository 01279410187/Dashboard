"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CustomerDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex flex-col justify-center items-center max-w-xs rounded-lg p-4 ">
        <DialogTitle className="text-lg font-semibold">Status</DialogTitle>
        <p className="text-purple-600 font-medium ">Old Customer</p>
        
          <p className="font-semibold">Gender</p>
          <p>Male</p>
          <p className="font-semibold">Name</p>
          <p>Ahmed Salem Salem</p>
          <p className="font-semibold">Most Ordered</p>
          <p>Salat, Water, Burger, Cola, Salat, Water, Burger, Cola</p>
          <p className="font-semibold">Last Order</p>
          <p>12/12/2025</p>
       
      </DialogContent>
    </Dialog>
  );
}

import PieChartCategory from "@/app/components/CategoryCahrts";
import OrderTable from "@/app/components/OrderTable";
import PaymentMethodsChart from "@/app/components/PaymentMethodsChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, CircleX, FileCheck } from "lucide-react";

export default function Report() {
  return (
    <div>
      <p className="text-extrabold text-center text-[#1F1F1F] text-4xl mt-5">
        Report
      </p>

      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 mt-6 ">
        <Card className="bg-[#F3DEFF]">
          <CardHeader>
            <span className="bg-[#FF947A] flex justify-center rounded-full w-10 h-10 item-center">
              {" "}
              <FileCheck className="text-white mt-2" />
            </span>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-[#151D48]">
              {new Intl.NumberFormat("en-US").format(10000 / 100)}
            </p>
            <p className="text-l  text-[#425166]">Total Order</p>
          </CardContent>
        </Card>

        <Card className="bg-[#E2FFDE]">
          <CardHeader>
            <span className="bg-[#6CDC66] flex justify-center rounded-full w-10 h-10 item-center">
              {" "}
              <Check className="text-white mt-2" />
            </span>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-[#151D48]">
              {new Intl.NumberFormat("en-US").format(10000 / 100)}
            </p>
            <p className="text-l  text-[#425166]">Total Done</p>
          </CardContent>
        </Card>

        <Card className="bg-[#FFDEDE]">
          <CardHeader>
            <span className="bg-[#FF7A7A] flex justify-center rounded-full w-10 h-10 item-center">
              {" "}
              <CircleX className="text-white mt-2" />
            </span>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-[#151D48]">
              {new Intl.NumberFormat("en-US").format(10000 / 100)}
            </p>
            <p className="text-l  text-[#425166]">Total Canceled</p>
          </CardContent>
        </Card>

        <Card className="bg-[#FFDEDE]">
          <CardHeader>
            <span className="bg-[#FF7A7A] flex justify-center rounded-full w-10 h-10 item-center">
              {" "}
              <CircleX className="text-white mt-2" />
            </span>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-[#151D48]">
              {new Intl.NumberFormat("en-US").format(10000 / 100)}
            </p>
            <p className="text-l  text-[#425166]">Total Cash</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <p className="text-[40px] font-weight-700 text-[#5D469F] text-extrabold">
          Cash Statistics
        </p>
        <PaymentMethodsChart />
      </div>

      <div className="mt-6">
        <p className="text-[40px] font-weight-700 text-[#5D469F] text-extrabold">
          Category Statistics
        </p>
        <PieChartCategory />
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">High Ordered</h2>
        <OrderTable />

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <Button className="bg-purple-600 text-white px-6">Logout</Button>
          <Button
            variant="outline"
            className="border-purple-600 text-purple-600 px-6"
          >
            Back
          </Button>


         
        </div>
      </div>
    </div>
  );
}

import OrdersTableMore from "@/app/components/OrderTableDash";

export default function Orders (){
    return (
        <div className="mt-6">
            <p className="font-bold text-4xl">Last Orders</p>
            <OrdersTableMore />
        </div>
    )
}
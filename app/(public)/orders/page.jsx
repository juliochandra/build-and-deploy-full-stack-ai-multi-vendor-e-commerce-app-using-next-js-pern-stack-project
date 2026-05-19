"use client";
import { useEffect, useState } from "react";
import { orderDummyData } from "@/assets/assets";
import OrderItem from "@/components/OrderItem";
import PageTitle from "@/components/PageTitle";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(orderDummyData);
  }, []);

  return (
    <div className="mx-6 min-h-[70vh]">
      {orders.length > 0 ? (
        <div className="mx-auto my-20 max-w-7xl">
          <PageTitle
            heading="My Orders"
            text={`Showing total ${orders.length} orders`}
            linkText={"Go to home"}
          />

          <table className="w-full max-w-5xl table-auto border-separate border-spacing-x-4 border-spacing-y-12 text-slate-500">
            <thead>
              <tr className="text-slate-600 max-sm:text-sm max-md:hidden">
                <th className="text-left">Product</th>
                <th className="text-center">Total Price</th>
                <th className="text-left">Address</th>
                <th className="text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <OrderItem order={order} key={order.id} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mx-6 flex min-h-[80vh] items-center justify-center text-slate-400">
          <h1 className="font-semibold text-2xl sm:text-4xl">You have no orders</h1>
        </div>
      )}
    </div>
  );
}

"use client";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function OrdersAreaChart({ allOrders }) {
  // Group orders by date
  const ordersPerDay = allOrders.reduce((acc, order) => {
    const date = new Date(order.createdAt).toISOString().split("T")[0]; // format: YYYY-MM-DD
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  // Convert to array for Recharts
  const chartData = Object.entries(ordersPerDay).map(([date, count]) => ({
    date,
    orders: count,
  }));

  return (
    <div className="h-[300px] w-full max-w-4xl text-xs">
      <h3 className="mb-4 pt-2 text-right font-medium text-lg text-slate-800">
        {" "}
        <span className="text-slate-500">Orders /</span> Day
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            allowDecimals={false}
            label={{ value: "Orders", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="orders"
            stroke="#4f46e5"
            fill="#8884d8"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

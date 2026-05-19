"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { productDummyData } from "@/assets/assets";
import Loading from "@/components/Loading";

export default function StoreManageProducts() {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$";

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setProducts(productDummyData);
    setLoading(false);
  };

  const toggleStock = async (_productId) => {
    // Logic to toggle the stock of a product
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <Loading />;

  return (
    <>
      <h1 className="mb-5 text-2xl text-slate-500">
        Manage <span className="font-medium text-slate-800">Products</span>
      </h1>
      <table className="w-full max-w-4xl overflow-hidden rounded text-left text-sm ring ring-slate-200">
        <thead className="bg-slate-50 text-gray-700 uppercase tracking-wider">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="hidden px-4 py-3 md:table-cell">Description</th>
            <th className="hidden px-4 py-3 md:table-cell">MRP</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-slate-700">
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-gray-200 border-t hover:bg-gray-50"
            >
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <Image
                    width={40}
                    height={40}
                    className="cursor-pointer rounded p-1 shadow"
                    src={product.images[0]}
                    alt=""
                  />
                  {product.name}
                </div>
              </td>
              <td className="hidden max-w-md truncate px-4 py-3 text-slate-600 md:table-cell">
                {product.description}
              </td>
              <td className="hidden px-4 py-3 md:table-cell">
                {currency} {product.mrp.toLocaleString()}
              </td>
              <td className="px-4 py-3">
                {currency} {product.price.toLocaleString()}
              </td>
              <td className="px-4 py-3 text-center">
                <label className="relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    onChange={() =>
                      toast.promise(toggleStock(product.id), {
                        loading: "Updating data...",
                      })
                    }
                    checked={product.inStock}
                  />
                  <div className="peer h-5 w-9 rounded-full bg-slate-300 transition-colors duration-200 peer-checked:bg-green-600"></div>
                  <span className="dot absolute top-1 left-1 h-3 w-3 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-4"></span>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

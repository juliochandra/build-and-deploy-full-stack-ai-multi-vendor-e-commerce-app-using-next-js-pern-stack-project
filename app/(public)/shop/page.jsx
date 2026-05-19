"use client";
import { MoveLeftIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import ProductCard from "@/components/ProductCard";

function ShopContent() {
  // get query params ?search=abc
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const router = useRouter();

  const products = useSelector((state) => state.product.list);

  const filteredProducts = search
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      )
    : products;

  return (
    <div className="mx-6 min-h-[70vh]">
      <div className="mx-auto max-w-7xl">
        <h1
          onClick={() => router.push("/shop")}
          className="my-6 flex cursor-pointer items-center gap-2 text-2xl text-slate-500"
        >
          {" "}
          {search && <MoveLeftIcon size={20} />} All{" "}
          <span className="font-medium text-slate-700">Products</span>
        </h1>
        <div className="mx-auto mb-32 grid grid-cols-2 flex-wrap gap-6 sm:flex xl:gap-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={<div>Loading shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}

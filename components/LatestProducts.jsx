"use client";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Title from "./Title";

const LatestProducts = () => {
  const displayQuantity = 4;
  const products = useSelector((state) => state.product.list);

  return (
    <div className="mx-auto my-30 max-w-6xl px-6">
      <Title
        title="Latest Products"
        description={`Showing ${products.length < displayQuantity ? products.length : displayQuantity} of ${products.length} products`}
        href="/shop"
      />
      <div className="mt-12 grid grid-cols-2 flex-wrap justify-between gap-6 sm:flex">
        {products
          .slice()
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, displayQuantity)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default LatestProducts;

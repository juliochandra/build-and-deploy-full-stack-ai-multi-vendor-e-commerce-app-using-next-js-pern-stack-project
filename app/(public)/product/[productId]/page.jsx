"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductDescription from "@/components/ProductDescription";
import ProductDetails from "@/components/ProductDetails";

export default function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const products = useSelector((state) => state.product.list);

  const fetchProduct = async () => {
    const product = products.find((product) => product.id === productId);
    setProduct(product);
  };

  useEffect(() => {
    if (products.length > 0) {
      fetchProduct();
    }
    scrollTo(0, 0);
  }, [products, fetchProduct]);

  return (
    <div className="mx-6">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrums */}
        <div className="mt-8 mb-5 text-gray-600 text-sm">
          Home / Products / {product?.category}
        </div>

        {/* Product Details */}
        {product && <ProductDetails product={product} />}

        {/* Description & Reviews */}
        {product && <ProductDescription product={product} />}
      </div>
    </div>
  );
}

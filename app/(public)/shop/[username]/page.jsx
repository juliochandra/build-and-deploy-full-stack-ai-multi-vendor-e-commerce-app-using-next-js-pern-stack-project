"use client";
import { MailIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { dummyStoreData, productDummyData } from "@/assets/assets";
import Loading from "@/components/Loading";
import ProductCard from "@/components/ProductCard";

export default function StoreShop() {
  const { username } = useParams();
  const [products, setProducts] = useState([]);
  const [storeInfo, setStoreInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchStoreData = async () => {
    setStoreInfo(dummyStoreData);
    setProducts(productDummyData);
    setLoading(false);
  };

  useEffect(() => {
    fetchStoreData();
  }, [fetchStoreData]);

  return !loading ? (
    <div className="mx-6 min-h-[70vh]">
      {/* Store Info Banner */}
      {storeInfo && (
        <div className="mx-auto mt-6 flex max-w-7xl flex-col items-center gap-6 rounded-xl bg-slate-50 p-6 shadow-xs md:flex-row md:p-10">
          <Image
            src={storeInfo.logo}
            alt={storeInfo.name}
            className="size-32 rounded-md border-2 border-slate-100 object-cover sm:size-38"
            width={200}
            height={200}
          />
          <div className="text-center md:text-left">
            <h1 className="font-semibold text-3xl text-slate-800">
              {storeInfo.name}
            </h1>
            <p className="mt-2 max-w-lg text-slate-600 text-sm">
              {storeInfo.description}
            </p>
            <div className="mt-4 space-y-1 text-slate-500 text-xs"></div>
            <div className="space-y-2 text-slate-500 text-sm">
              <div className="flex items-center">
                <MapPinIcon className="mr-2 h-4 w-4 text-gray-500" />
                <span>{storeInfo.address}</span>
              </div>
              <div className="flex items-center">
                <MailIcon className="mr-2 h-4 w-4 text-gray-500" />
                <span>{storeInfo.email}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Products */}
      <div className="mx-auto mb-40 max-w-7xl">
        <h1 className="mt-12 text-2xl">
          Shop <span className="font-medium text-slate-800">Products</span>
        </h1>
        <div className="mx-auto mt-5 grid grid-cols-2 flex-wrap gap-6 sm:flex xl:gap-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

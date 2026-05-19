"use client";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { dummyStoreData } from "@/assets/assets";
import Loading from "../Loading";
import SellerNavbar from "./StoreNavbar";
import SellerSidebar from "./StoreSidebar";

const StoreLayout = ({ children }) => {
  const [isSeller, setIsSeller] = useState(false);
  const [loading, setLoading] = useState(true);
  const [storeInfo, setStoreInfo] = useState(null);

  const fetchIsSeller = async () => {
    setIsSeller(true);
    setStoreInfo(dummyStoreData);
    setLoading(false);
  };

  useEffect(() => {
    fetchIsSeller();
  }, [fetchIsSeller]);

  return loading ? (
    <Loading />
  ) : isSeller ? (
    <div className="flex h-screen flex-col">
      <SellerNavbar />
      <div className="no-scrollbar flex h-full flex-1 items-start overflow-y-scroll">
        <SellerSidebar storeInfo={storeInfo} />
        <div className="h-full flex-1 overflow-y-scroll p-5 lg:pt-12 lg:pl-12">
          {children}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="font-semibold text-2xl text-slate-400 sm:text-4xl">
        You are not authorized to access this page
      </h1>
      <Link
        href="/"
        className="mt-8 flex items-center gap-2 rounded-full bg-slate-700 p-2 px-6 text-white max-sm:text-sm"
      >
        Go to home <ArrowRightIcon size={18} />
      </Link>
    </div>
  );
};

export default StoreLayout;

"use client";
import Link from "next/link";

const StoreNavbar = () => {
  return (
    <div className="flex items-center justify-between border-slate-200 border-b px-12 py-3 transition-all">
      <Link href="/" className="relative font-semibold text-4xl text-slate-700">
        <span className="text-green-600">go</span>cart
        <span className="text-5xl text-green-600 leading-0">.</span>
        <p className="-top-1 -right-11 absolute flex items-center gap-2 rounded-full bg-green-500 p-0.5 px-3 font-semibold text-white text-xs">
          Store
        </p>
      </Link>
      <div className="flex items-center gap-3">
        <p>Hi, Seller</p>
      </div>
    </div>
  );
};

export default StoreNavbar;

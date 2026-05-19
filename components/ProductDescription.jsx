"use client";
import { ArrowRight, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductDescription = ({ product }) => {
  const [selectedTab, setSelectedTab] = useState("Description");

  return (
    <div className="my-18 text-slate-600 text-sm">
      {/* Tabs */}
      <div className="mb-6 flex max-w-2xl border-slate-200 border-b">
        {["Description", "Reviews"].map((tab, index) => (
          <button
            className={`${tab === selectedTab ? "border-b-[1.5px] font-semibold" : "text-slate-400"} px-3 py-2 font-medium`}
            key={index}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Description */}
      {selectedTab === "Description" && (
        <p className="max-w-xl">{product.description}</p>
      )}

      {/* Reviews */}
      {selectedTab === "Reviews" && (
        <div className="mt-14 flex flex-col gap-3">
          {product.rating.map((item, index) => (
            <div key={index} className="mb-10 flex gap-5">
              <Image
                src={item.user.image}
                alt=""
                className="size-10 rounded-full"
                width={100}
                height={100}
              />
              <div>
                <div className="flex items-center">
                  {Array(5)
                    .fill("")
                    .map((_, index) => (
                      <StarIcon
                        key={index}
                        size={18}
                        className="mt-0.5 text-transparent"
                        fill={item.rating >= index + 1 ? "#00C950" : "#D1D5DB"}
                      />
                    ))}
                </div>
                <p className="my-4 max-w-lg text-sm">{item.review}</p>
                <p className="font-medium text-slate-800">{item.user.name}</p>
                <p className="mt-3 font-light">
                  {new Date(item.createdAt).toDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Store Page */}
      <div className="mt-14 flex gap-3">
        <Image
          src={product.store.logo}
          alt=""
          className="size-11 rounded-full ring ring-slate-400"
          width={100}
          height={100}
        />
        <div>
          <p className="font-medium text-slate-600">
            Product by {product.store.name}
          </p>
          <Link
            href={`/shop/${product.store.username}`}
            className="flex items-center gap-1.5 text-green-500"
          >
            {" "}
            view store <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;

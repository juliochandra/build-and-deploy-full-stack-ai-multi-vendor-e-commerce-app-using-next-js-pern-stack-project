"use client";
import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import CategoriesMarquee from "./CategoriesMarquee";

const Hero = () => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$";

  return (
    <div className="mx-6">
      <div className="mx-auto my-10 flex max-w-7xl gap-8 max-xl:flex-col">
        <div className="group relative flex flex-1 flex-col rounded-3xl bg-green-200 xl:min-h-100">
          <div className="p-5 sm:p-16">
            <div className="inline-flex items-center gap-3 rounded-full bg-green-300 p-1 pr-4 text-green-600 text-xs sm:text-sm">
              <span className="rounded-full bg-green-600 px-3 py-1 text-white text-xs max-sm:ml-1">
                NEWS
              </span>{" "}
              Free Shipping on Orders Above $50!{" "}
              <ChevronRightIcon
                className="transition-all group-hover:ml-2"
                size={16}
              />
            </div>
            <h2 className="my-3 max-w-xs bg-gradient-to-r from-slate-600 to-[#A0FF74] bg-clip-text font-medium text-3xl text-transparent leading-[1.2] sm:max-w-md sm:text-5xl">
              Gadgets you'll love. Prices you'll trust.
            </h2>
            <div className="mt-4 font-medium text-slate-800 text-sm sm:mt-8">
              <p>Starts from</p>
              <p className="text-3xl">{currency}4.90</p>
            </div>
            <button className="mt-4 rounded-md bg-slate-800 px-7 py-2.5 text-sm text-white transition hover:scale-103 hover:bg-slate-900 active:scale-95 sm:mt-10 sm:px-12 sm:py-5">
              LEARN MORE
            </button>
          </div>
          <Image
            className="right-0 bottom-0 w-full sm:absolute sm:max-w-sm md:right-10"
            src={assets.hero_model_img}
            alt=""
          />
        </div>
        <div className="flex w-full flex-col gap-5 text-slate-600 text-sm md:flex-row xl:max-w-sm xl:flex-col">
          <div className="group flex w-full flex-1 items-center justify-between rounded-3xl bg-orange-200 p-6 px-8">
            <div>
              <p className="max-w-40 bg-gradient-to-r from-slate-800 to-[#FFAD51] bg-clip-text font-medium text-3xl text-transparent">
                Best products
              </p>
              <p className="mt-4 flex items-center gap-1">
                View more{" "}
                <ArrowRightIcon
                  className="transition-all group-hover:ml-2"
                  size={18}
                />{" "}
              </p>
            </div>
            <Image className="w-35" src={assets.hero_product_img1} alt="" />
          </div>
          <div className="group flex w-full flex-1 items-center justify-between rounded-3xl bg-blue-200 p-6 px-8">
            <div>
              <p className="max-w-40 bg-gradient-to-r from-slate-800 to-[#78B2FF] bg-clip-text font-medium text-3xl text-transparent">
                20% discounts
              </p>
              <p className="mt-4 flex items-center gap-1">
                View more{" "}
                <ArrowRightIcon
                  className="transition-all group-hover:ml-2"
                  size={18}
                />{" "}
              </p>
            </div>
            <Image className="w-35" src={assets.hero_product_img2} alt="" />
          </div>
        </div>
      </div>
      <CategoriesMarquee />
    </div>
  );
};

export default Hero;

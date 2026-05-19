"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Title = ({ title, description, visibleButton = true, href = "" }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-semibold text-2xl text-slate-800">{title}</h2>
      <Link
        href={href}
        className="mt-2 flex items-center gap-5 text-slate-600 text-sm"
      >
        <p className="max-w-lg text-center">{description}</p>
        {visibleButton && (
          <button className="flex items-center gap-1 text-green-500">
            View more <ArrowRight size={14} />
          </button>
        )}
      </Link>
    </div>
  );
};

export default Title;

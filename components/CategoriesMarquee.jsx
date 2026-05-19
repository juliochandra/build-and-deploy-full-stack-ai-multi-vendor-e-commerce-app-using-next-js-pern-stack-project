import { categories } from "@/assets/assets";

const CategoriesMarquee = () => {
  return (
    <div className="group relative mx-auto w-full max-w-7xl select-none overflow-hidden sm:my-20">
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="flex min-w-[200%] animate-[marqueeScroll_10s_linear_infinite] gap-4 sm:animate-[marqueeScroll_40s_linear_infinite] group-hover:[animation-play-state:paused]">
        {[...categories, ...categories, ...categories, ...categories].map(
          (company, index) => (
            <button
              key={index}
              className="rounded-lg bg-slate-100 px-5 py-2 text-slate-500 text-xs transition-all duration-300 hover:bg-slate-600 hover:text-white active:scale-95 sm:text-sm"
            >
              {company}
            </button>
          ),
        )}
      </div>
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent md:w-40" />
    </div>
  );
};

export default CategoriesMarquee;

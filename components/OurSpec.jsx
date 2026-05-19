import { ourSpecsData } from "@/assets/assets";
import Title from "./Title";

const OurSpecs = () => {
  return (
    <div className="mx-auto my-20 max-w-6xl px-6">
      <Title
        visibleButton={false}
        title="Our Specifications"
        description="We offer top-tier service and convenience to ensure your shopping experience is smooth, secure and completely hassle-free."
      />

      <div className="mt-26 grid grid-cols-1 gap-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {ourSpecsData.map((spec, index) => {
          return (
            <div
              className="group relative flex h-44 w-full flex-col items-center justify-center rounded-lg border px-8 text-center"
              style={{
                backgroundColor: spec.accent + 10,
                borderColor: spec.accent + 30,
              }}
              key={index}
            >
              <h3 className="font-medium text-slate-800">{spec.title}</h3>
              <p className="mt-3 text-slate-600 text-sm">{spec.description}</p>
              <div
                className="-top-5 absolute flex size-10 items-center justify-center rounded-md text-white transition group-hover:scale-105"
                style={{ backgroundColor: spec.accent }}
              >
                <spec.icon size={20} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurSpecs;

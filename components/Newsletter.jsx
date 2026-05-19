import Title from "./Title";

const Newsletter = () => {
  return (
    <div className="mx-4 my-36 flex flex-col items-center">
      <Title
        title="Join Newsletter"
        description="Subscribe to get exclusive deals, new arrivals, and insider updates delivered straight to your inbox every week."
        visibleButton={false}
      />
      <div className="my-10 flex w-full max-w-xl rounded-full border-2 border-white bg-slate-100 p-1 text-sm ring ring-slate-200">
        <input
          className="flex-1 pl-5 outline-none"
          type="text"
          placeholder="Enter your email address"
        />
        <button className="rounded-full bg-green-500 px-7 py-3 font-medium text-white transition hover:scale-103 active:scale-95">
          Get Updates
        </button>
      </div>
    </div>
  );
};

export default Newsletter;

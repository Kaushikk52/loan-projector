import HeroComponent from "@/components/HeroComponent";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <HeroComponent />
      <div className="flex flex-col items-center justify-center gap-2 md:gap-5">
        <div className="text-center">
          <h1 className="text-lg md:text-2xl lg:text-4xl text-blue-900 font-black font-nunito">
            Different Types of Loan Services,
          </h1>
          <h1 className="text-lg md:text-2xl lg:text-4xl text-blue-900 font-black font-nunito ">
            Including Short-Term Loan
          </h1>
        </div>
        <div className="text-center">
          <p className="text-sm md:text-md lg:text-lg text-balance text-slate-500 font-semibold font-nunito">
            We offer short-term loans to ensure financial commitment for
            different household needs.
          </p>
        </div>
      </div>
    </div>
  );
}

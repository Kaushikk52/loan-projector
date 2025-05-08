import HeroComponent from "@/components/HeroComponent";
import LoadCardContainer from "@/components/LoanCardsContainer";
import { ourJourneyData } from "@/constants/constants";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mb-52">
      <HeroComponent />
      <div className="flex flex-col items-center justify-center gap-2 md:gap-5">
        <div className="text-center">
          <h1 className="text-lg md:text-2xl lg:text-4xl text-blue-900 font-black font-nunito">
            Different Types of Loan Services,
          </h1>
          <h1 className="text-lg md:text-2xl lg:text-4xl text-blue-900 font-black font-nunito">
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
      <div>
        <LoadCardContainer />
      </div>
      <div className="flex flex-col gap-10 items-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-nunito text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-600 to-amber-950">
          OUR JOURNEY SO FAR
        </h1>
        <div className="flex items-center gap-10">
          {ourJourneyData.map((data) => (
            <div className="flex items-center gap-2" key={data.tag}>
              <h1 className="">{data.amount}</h1>
              <span>{data.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

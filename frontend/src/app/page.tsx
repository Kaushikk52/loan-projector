import { AnimatedNumberInView } from "@/components/AnimatedNumber";
import HeroComponent from "@/components/HeroComponent";
import ImageSlider from "@/components/ImageSlider";
import LoadCardContainer from "@/components/LoanCardsContainer";
import { ourJourneyData } from "@/constants/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-20">
        <HeroComponent />

        {/* Section Title & Description */}
        <div className="flex flex-col items-center justify-center gap-2 md:gap-5 text-center px-4">
          <div>
            <h1 className="text-lg md:text-2xl lg:text-4xl text-blue-900 font-black font-nunito">
              Different Types of Loan Services,
            </h1>
            <h1 className="text-lg md:text-2xl lg:text-4xl text-blue-900 font-black font-nunito">
              Including Short-Term Loan
            </h1>
          </div>
          <p className="text-sm md:text-md lg:text-lg text-slate-500 font-semibold font-nunito max-w-2xl">
            We offer short-term loans to ensure financial commitment for
            different household needs.
          </p>
        </div>

        {/* Loan Cards */}
        <div className="w-full max-w-7xl mx-auto px-4">
          <LoadCardContainer />
        </div>

        {/* Journey + Short-Term Loans Section */}
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col gap-52">
          {/* OUR JOURNEY */}
          <div className="flex flex-col gap-10 items-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-nunito text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-600 to-amber-950">
              OUR JOURNEY SO FAR
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-10">
              {ourJourneyData.map((data) => (
                <div
                  className="flex flex-col md:flex-row items-center gap-5"
                  key={data.tag}
                >
                  <div className="flex items-center">
                    <h1 className="text-xl">
                      <AnimatedNumberInView countValue={data.amount} />
                    </h1>
                    <span className="text-4xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold font-nunito text-zinc-800">
                      {data.unit}
                    </span>
                  </div>
                  <span className="font-semibold text-slate-500 font-nunito text-lg">
                    {data.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SHORT-TERM LOANS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            <div className="flex justify-center items-center">
              <Image
                src="/financial-requirement.png"
                height={500}
                width={500}
                alt="financial-requirement-image"
                className="object-cover object-center"
              />
            </div>

            <div className="flex flex-col items-center lg:items-start justify-center gap-2 md:gap-5">
              <div className="flex flex-col gap-2 mb-4 text-start text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold font-nunito text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-600 to-amber-950">
                <h1 className="">SHORT-TERM LOANS FOR ANY</h1>
                <h1>FINANCIAL REQUIREMENTS</h1>
              </div>
              <p className="text-xs md:text-sm lg:text-md text-start text-slate-500 md:font-semibold font-nunito max-w-xl">
                Also, you will get an easy EMI option to pay your{" "}
                <strong>short-term loan</strong> amount with Everyday Loan India
                on our loan scheme. The repayments will be online to enjoy the
                accessibility and luxury regarding the refunds of the amount. We
                have offered one of the finest services, making us a more
                reputed fintech company, and we have been working to provide you
                with the best services in less time. Everydayloanindia is an
                online platform that provides quick financial support and
                services by
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="mt-32">
        <ImageSlider />
      </div>
    </div>
  );
}

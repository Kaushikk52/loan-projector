import { aboutUsImpactData } from "@/constants/constants";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20">
      <div className="bg-slate-100 w-full py-10">
        <div className="flex flex-col items-center justify-center gap-5 mx-auto max-w-4xl text-center mt-10">
          <h1 className="text-xl lg:text-4xl font-nunito font-bold text-blue-800">
            ABOUT THE COMPANY
          </h1>
          <p className="text-sm lg:text-md font-nunito font-semibold text-slate-500 text-balance md:text-pretty">
            Founded by tech-elites and financiers having collective expertise of
            over 25 years in secured & unsecured direct lending, Loan Projector
            deals with consumers all along the credit spectrum.{" "}
          </p>
          <p className="text-sm lg:text-md font-nunito font-semibold text-slate-500 text-balance md:text-pretty">
            The mission is to offer a variety of easily accessible loan services
            in a secure, proficient, and professional medium to all needful
            customers without any preconceptions or inclinations based only on
            the customer’s ability to repay.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto space-y-5">
        {aboutUsImpactData.map((data) => (
          <div
            key={data.tag}
            className={`flex flex-col gap-5 items-center justify-center text-center ${
              data.border ? "border-l-2 border-r-2" : ""
            }`}
          >
            <h1 className="border-2 border-blue-400 rounded-full p-5">
              <data.icon size={40} color="#346397" />
            </h1>
            <h1 className="text-2xl font-nunito font-extrabold text-blue-800">
              {data.tag}
            </h1>
            <p className="text-sm font-nunito font-semibold text-balance text-slate-500">
              {data.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full bg-gradient-to-r from-blue-50 via-blue-200 to-blue-300 py-20">
        <div className="flex flex-col items-center justify-center gap-5 mx-auto max-w-4xl text-center space-y-10">
          <h1 className="font-nunito text-5xl font-extrabold">Aim</h1>
          <p className="font-nunito font-semibold text-xl text-slate-700">
            To foster financial inclusion by leveraging technology to support
            borrowers with hassle-free loans.
          </p>
        </div>
      </div>
      {/* <ImageSlider /> */}
    </div>
  );
}

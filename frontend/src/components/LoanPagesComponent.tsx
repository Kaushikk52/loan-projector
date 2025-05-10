import { benifitsCardData } from "@/constants/constants";
import Image from "next/image";

export default function LoanPagesComponent() {
  return (
    <div className="flex flex-col items-center gap-20  max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center mt-10 gap-10 lg:gap-20 px-2">
        <div>
          <Image
            src={"/medical-loan-img.avif"}
            height={2300}
            width={2300}
            alt="medical-loan-img"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold font-nunito text-zinc-800">
            Medical Loan
          </h1>
          <p className="text-lg font-medium font-nunito text-balance">
            Medical emergencies can be extremely frightening, especially if you
            are unprepared! While many people have started investing in medical
            insurance, a large number of people are still uncovered, especially
            for emergencies. And at times, even insurance will not cover certain
            medical expenses.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-nunito font-bold">
          Medical Loan Features & Benefits
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2">
          {benifitsCardData.map((data) => (
            <div
              key={data.title}
              className="border p-3 flex flex-col items-start gap-5 rounded-xl shadow-sm"
            >
              <div className="flex items-center justify-center text-[#346397] p-2 rounded bg-blue-200">
                <data.icon size={20} />
              </div>
              <div>
                <h1 className="text-lg font-nunito font-semibold">
                  {data.title}
                </h1>
                <p className="text-sm font-medium text-gray-500">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { benifitsCardData } from "@/constants/constants";
import Image from "next/image";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

type LoanPagesComponentProps = {
  title: string;
  desc: string;
  imgSrc: string;
};

export default function LoanPagesComponent({
  title,
  desc,
  imgSrc,
}: LoanPagesComponentProps) {
  console.log(imgSrc, "image");

  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);
  return (
    <div className="flex flex-col items-center gap-20  max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center mt-10 gap-10 lg:gap-20 px-2">
        <div>
          <Image
            src={imgSrc}
            height={2300}
            width={2300}
            alt="medical-loan-img"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold font-nunito text-zinc-800">
            {title}
          </h1>
          <p className="text-lg font-medium font-nunito text-balance">{desc}</p>
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
      <div className="flex flex-col gap-5 w-full">
        <div
          className={`w-full border-y border-gray-600 py-5 md:px-0 px-5 transition-all duration-500 ease-in-out ${
            isEligibilityOpen ? "bg-white scale-100" : "scale-[0.99]"
          }`}
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsEligibilityOpen(!isEligibilityOpen)}
          >
            <h1 className="text-start text-2xl font-bold font-nunito">
              Eligibility Criteria for a {title}
            </h1>
            {isEligibilityOpen ? <FiMinus size={24} /> : <GoPlus size={24} />}
          </div>

          {/* Accordion Body with smooth expand/collapse */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isEligibilityOpen
                ? "max-h-[1000px] opacity-100 scale-100 mt-6"
                : "max-h-0 opacity-0 scale-95"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-base">
              {/* Left Column: Title */}
              <div>
                <h2 className="text-lg font-semibold">
                  Fulfil our simple eligibility criteria:
                </h2>
              </div>

              {/* Right Column: Points */}
              <div className="flex flex-col gap-4 text-gray-700">
                <p>
                  ✓ <span className="font-bold">Age:</span> must be above 21 and
                  up to 60 years.
                </p>
                <p>
                  ✓ <span className="font-bold">Citizenship:</span> Indian.
                </p>
                <p>
                  ✓ <span className="font-bold">Documents:</span> Documents
                  required are PAN, Aadhar, Salary Slip, Bank Statement, Utility
                  Bills, Rent Agreements, etc.
                </p>
                <p>
                  ✓ <span className="font-bold">Income:</span> The per month
                  income should be at least 20,000.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`w-full border-y border-gray-600 px-4 md:px-0 py-5 transition-all duration-500 ease-in-out ${
            isEligibilityOpen ? "bg-white scale-100" : "scale-[0.99]"
          }`}
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsDocumentOpen(!isDocumentOpen)}
          >
            <h1 className="text-start text-2xl font-bold font-nunito">
              Documents Required for a {title}
            </h1>
            {isDocumentOpen ? <FiMinus size={24} /> : <GoPlus size={24} />}
          </div>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isDocumentOpen
                ? "max-h-[1000px] opacity-100 scale-100"
                : "max-h-0 opacity-0 scale-95"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 text-base">
              {/* Left Column: Title */}
              <div>
                <h2 className="text-lg font-semibold">
                  Submit just a few essential documents:
                </h2>
              </div>

              {/* Right Column: Points */}
              <div className="flex flex-col gap-4 text-gray-700">
                <p>
                  ✓ <span className="font-bold">Aadhar Card</span>
                </p>
                <p>
                  ✓ <span className="font-bold">PAN Card</span>
                </p>
                <p>
                  ✓ <span className="font-bold">Salary Slip</span> (for salaried
                  Person)
                </p>
                <p>
                  ✓ <span className="font-bold">Bank Statement</span>
                </p>
                <p>
                  ✓ <span className="font-bold">ITR</span> (for self-employed)
                </p>
                <p>
                  ✓ <span className="font-bold">Utility bills</span> like
                  electricity Bills, Gas Bills, telephone bills, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="">
 
        <div className="flex flex-col gap-5 items-center border-2 p-5 border-gray-100 text-center rounded-lg shadow-sm">
          <h1 className="text-2xl font-nunito font-bold border-b border-gray-500 py-2 w-full">
            Required Documents
          </h1>
          <div className="flex flex-col">
            {documentsRequiredData.map((data) => (
              <h1
                className="text-balance text-start border-b border-gray-300 py-5 text-sm font-medium text-gray-600 flex items-center gap-5"
                key={data.title}
              >
                <span>
                  <data.icon size={24} color="#4C8CF5" />
                </span>
                {data.title}
              </h1>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}

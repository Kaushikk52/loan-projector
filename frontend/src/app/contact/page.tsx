import Image from "next/image";
import React from "react";
import { FiClock, FiMail, FiPhone } from "react-icons/fi";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-6 py-12 max-w-6xl mx-auto gap-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-10">
          <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-nunito font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-700 font-nunito text-md font-semibold">
            If you have any questions or want to{" "}
            <strong className="font-semibold font-nunito">
              get a free estimate
            </strong>{" "}
            for your mold situation, contact us via email or phone call. We will
            be very happy to help you!
          </p>

          <p className="text-sm font-semibold mt-1 flex flex-col gap-5">
            <span className="flex items-center gap-2">
              <FiPhone color="#004DCB" /> +91 78297 12159
            </span>
            <span className="flex items-center gap-2">
              <FiMail color="#004DCB" /> info@loanprojector.com
            </span>
            <span className="flex items-center gap-2">
              <FiClock color="#004DCB" /> 9:30 AM – 6:30 PM, Monday to Saturday
            </span>
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/contact-img.jpg"
            alt="contact us image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="">
          <Image src={"/final-map.png"} alt="map" height={1000} width={1000} />
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl font-nunito font-bold text-balance">
            Loan projector is Now Available Across India
          </h1>
          <div className="grid grid-cols-2 gap-5">
            <h1 className="text-xl font-nunito font-medium text-slate-600 flex items-center gap-2">
              <span className="text-blue-600 text-5xl">•</span> Delhi
            </h1>
            <h1 className="text-xl font-nunito font-medium text-slate-600 flex items-center gap-2">
              <span className="text-blue-600 text-5xl">•</span> Mumbai
            </h1>
            <h1 className="text-xl font-nunito font-medium text-slate-600 flex items-center gap-2">
              <span className="text-blue-600 text-5xl">•</span> Bengaluru
            </h1>
            <h1 className="text-xl font-nunito font-medium text-slate-600 flex items-center gap-2">
              <span className="text-blue-600 text-5xl">•</span> Pune
            </h1>
            <h1 className="text-xl font-nunito font-medium text-slate-600 flex items-center gap-2">
              <span className="text-blue-600 text-5xl">•</span> Kolkata
            </h1>
            <h1 className="text-xl font-nunito font-medium text-slate-600 flex items-center gap-2">
              <span className="text-blue-600 text-5xl">•</span> Chennai
            </h1>
            <h1 className="text-xl font-nunito font-medium text-slate-600 flex items-center gap-2">
              <span className="text-blue-600 text-5xl">•</span> Hyderabad
            </h1>
            <h1 className="text-xl font-nunito font-medium text-slate-600 flex items-center gap-2">
              <span className="text-blue-600 text-5xl">•</span> Ahmedabad
            </h1>
            <h1 className="text-xl font-nunito font-medium text-slate-600 flex items-center gap-2">
              <span className="text-blue-600 text-5xl">•</span> Maharashtra
            </h1>
            <h1 className="text-xl font-nunito font-medium text-slate-600 flex items-center gap-2">
              <span className="text-blue-600 text-5xl">•</span> National Capital
              Territory
            </h1>
            <h1 className="text-xl font-nunito font-medium text-slate-600 flex items-center gap-2">
              <span className="text-blue-600 text-5xl">•</span> West Bengal
            </h1>
            <h1 className="text-xl font-nunito font-medium text-slate-600 flex items-center gap-2">
              <span className="text-blue-600 text-5xl">•</span> Tamil Nadu
            </h1>
            <h1 className="text-xl font-nunito font-medium text-slate-600 flex items-center gap-2">
              <span className="text-blue-600 text-5xl">•</span> Karnataka
            </h1>
            <h1 className="text-xl font-nunito font-medium text-slate-600 flex items-center gap-2">
              <span className="text-blue-600 text-5xl">•</span> Telangana
            </h1>
            <h1 className="text-xl font-nunito font-medium text-slate-600 flex items-center gap-2">
              <span className="text-blue-600 text-5xl">•</span> Andhra Pradesh
            </h1>
            <h1 className="text-xl font-nunito font-medium text-slate-600 flex items-center gap-2">
              <span className="text-blue-600 text-5xl">•</span> Gujarat
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

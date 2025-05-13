import Image from "next/image";
import React from "react";
import { FiClock, FiMail, FiPhone } from "react-icons/fi";

export default function ContactUs() {
  return (
    <div className="flex items-center justify-center bg-white px-6 py-12 max-w-6xl mx-auto">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-10">
          <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-nunito font-medium text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-700 font-nunito text-sm font-medium">
            If you have any questions or want to{" "}
            <strong className="font-semibold font-nunito">
              get a free estimate
            </strong>{" "}
            for your mold situation, contact us via email or phone call. We will
            be very happy to help you!
          </p>

          <p className="text-sm mt-1 flex flex-col gap-5">
            <span className="flex items-center gap-2">
              <FiPhone color="#004DCB" /> 1800-102-4145
            </span>
            <span className="flex items-center gap-2">
              <FiMail color="#004DCB" /> Customer.Care@HeroFinCorp.com
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
    </div>
  );
}

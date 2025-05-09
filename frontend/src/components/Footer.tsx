import { loanCardsData, navItems } from "@/constants/constants";
import Image from "next/image";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { FiClock, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="pt-10 mt-10 border-2 bg-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 items-center">
        <div className="col-span-9 grid grid-cols-3 gap-6 border-r-2 pr-10 justify-items-center">
          <div className="pl-4">
            <Image src="/footer-logo.png" height={200} width={200} alt="logo" />
            <p className="font-nunito text-md font-semibold mt-4 text-balance text-slate-500 ">
              We are a new-age Fin-Tech platform which aims to foster financial
              inclusion by leveraging technology to support borrowers with
              hassle-free loans.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="font-nunito text-xl font-bold mb-5">Links</h2>
            {navItems.slice(0, 5).map((item, idx) => (
              <p
                key={idx}
                className="font-nunito text-md font-semibold mt-3 text-balance text-slate-500"
              >
                {item.label}
              </p>
            ))}
          </div>

          {/* Services */}
          <div>
            <h2 className="font-nunito text-xl font-bold mb-5">Services</h2>
            {loanCardsData.slice(0, 5).map((service, idx) => (
              <p
                key={idx}
                className="font-nunito text-md font-semibold mt-3 text-balance text-slate-500"
              >
                {service.label}
              </p>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-3 flex flex-col items-center">
          <h2 className="font-nunito text-lg font-semibold mb-4">
            Connect With Us
          </h2>
          <div className="flex gap-4">
            <FaFacebookF className="text-xl hover:text-blue-400 cursor-pointer" />
            <FaXTwitter className="text-xl hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="text-xl hover:text-pink-400 cursor-pointer" />
            <FaYoutube className="text-xl hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-white bg-[#1d1d26] w-full mt-5 p-10  gap-8">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 items-center">
          {/* Left Section: Our Address */}
          <div className="col-span-6 space-y-4">
            <h1 className="text-lg font-semibold text-white">Our Address</h1>

            <div className="grid grid-cols-2 space-y-4 text-slate-300">
              {/* Corporate Office */}
              <div>
                <h2 className="font-bold text-sm">CORPORATE OFFICE</h2>
                <p className="text-xs mt-1">
                  09, Basant Lok, Vasant Vihar, New Delhi - 110057 <br />
                  Tel. +91-11-49487150 <br />
                  Fax. +91-11-49487197, +91-11-49487198
                </p>
              </div>

              {/* Operation Center */}
              <div>
                <h2 className="font-bold text-sm">OPERATION CENTER</h2>
                <p className="text-xs mt-1">
                  A-44, Mohan Co-Operative Industrial Estate, Near Mohan Estate
                  Metro Station, Mathura Road, New Delhi, 110044 – India
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Connect With Us */}
          <div className="col-span-6 space-y-4">
            <h1 className="text-lg font-semibold text-white">
              Connect With Us
            </h1>

            <div className="grid grid-cols-2 space-y-4">
              {/* Retail Customer Care */}
              <div className="text-slate-300">
                <h2 className="font-bold text-sm">RETAIL CUSTOMER CARE HELP</h2>
                <p className="text-xs mt-1 flex flex-col gap-1">
                  <span className="flex items-center gap-2">
                    <FiPhone /> 1800-102-4145
                  </span>
                  <span className="flex items-center gap-2">
                    <FiMail /> Customer.Care@HeroFinCorp.com
                  </span>
                  <span className="flex items-center gap-2">
                    <FiClock /> 9:30 AM – 6:30 PM, Monday to Saturday
                  </span>
                </p>
              </div>

              {/* Corporate Customer Care */}
              <div className="text-slate-300">
                <h2 className="font-bold text-sm">
                  CORPORATE CUSTOMER CARE HELP
                </h2>
                <p className="text-xs mt-1 flex flex-col gap-1">
                  <span className="flex items-center gap-2">
                    <FiPhone /> 1800-103-5271
                  </span>
                  <span className="flex items-center gap-2">
                    <FiMail /> Corporate.Care@HeroFinCorp.com
                  </span>
                  <span className="flex items-center gap-2">
                    <FiClock /> 10:00 AM – 6:00 PM, Monday to Friday
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white bg-[#2D363D] p-5">
        <div className="flex justify-between max-w-7xl mx-auto">
          <div className="flex justify-start">
            <span>Privacy Policy</span>
            <span>Terms And Conditions</span>
            <span>Disclaimer</span>
          </div>
          <div className="flex self-end">
            <p>Copyright © 2025 IIFL Finance Limited. All rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { footerLinksLabel, servicesData } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { FiClock, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="pt-10 mt-10 border-t-2 bg-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-6 items-start px-4 xl:px-0  xl:justify-items-center mb-5 xl:mb-0">
        {/* Left Section */}
        <div className="xl:col-span-9 grid grid-cols-1 xl:grid-cols-3 gap-6 xl:border-r-2 xl:pr-10  xl:justify-items-center">
          <div>
            <Image src="/main-logo.png" height={200} width={200} alt="logo" />
            <p className="font-nunito text-md font-semibold mt-4 text-slate-500">
              We are a new-age Fin-Tech platform which aims to foster financial
              inclusion by leveraging technology to support borrowers with
              hassle-free loans.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="font-nunito text-xl font-bold mb-5">Links</h2>
            {footerLinksLabel.slice(0, 5).map((item) => (
              <Link href={item.path} key={item.name}>
                <p className="font-nunito text-md font-semibold mt-3 text-slate-500">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h2 className="font-nunito text-xl font-bold mb-5">Services</h2>
            {servicesData.slice(0, 7).map((service) => (
              <Link href={service.path} key={service.name}>
                <p className="font-nunito text-md font-semibold mt-3 text-slate-500">
                  {service.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="xl:col-span-3 flex flex-col space-y-5 h-9/12">
          <h2 className="font-nunito text-xl font-bold mb-5">
            Connect with us
          </h2>
          <div>
            <h2 className="font-bold text-sm">RETAIL CUSTOMER CARE HELP</h2>
            <p className="text-sm mt-1 flex flex-col gap-1">
              <span className="flex items-center gap-2">
                <FiPhone /> +91 78297 12159
              </span>
              <span className="flex items-center gap-2">
                <FiMail /> info@loanprojector.com
              </span>
              <span className="flex items-center gap-2">
                <FiClock /> 9:30 AM – 6:30 PM, Monday to Saturday
              </span>
            </p>
          </div>
          {/* Push this div to the bottom */}
          <div className="flex gap-4 mt-auto">
            <FaFacebookF className="text-xl hover:text-blue-400 cursor-pointer" />
            <FaXTwitter className="text-xl hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="text-xl hover:text-pink-400 cursor-pointer" />
            <FaYoutube className="text-xl hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* <div className="bg-[#1d1d26] w-full mt-10 p-6 md:p-10 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-6 items-start px-4 xl:px-0">
          <div className="xl:col-span-6 space-y-4">
            <h1 className="text-lg font-semibold">Our Address</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
              <div>
                <h2 className="font-bold text-sm">CORPORATE OFFICE</h2>
                <p className="text-xs mt-1">
                  09, Basant Lok, Vasant Vihar, New Delhi - 110057 <br />
                  Tel. +91-11-49487150 <br />
                  Fax. +91-11-49487197, +91-11-49487198
                </p>
              </div>

              <div>
                <h2 className="font-bold text-sm">OPERATION CENTER</h2>
                <p className="text-xs mt-1">
                  A-44, Mohan Co-Operative Industrial Estate, Near Mohan Estate
                  Metro Station, Mathura Road, New Delhi, 110044 – India
                </p>
              </div>
            </div>
          </div>

          <div className="xl:col-span-6 space-y-4">
            <h1 className="text-lg font-semibold">Connect With Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
              <div>
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

              <div>
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
      </div> */}

      {/* Bottom Bar */}
      <div className="bg-[#2D363D] p-5 text-white">
        <div className="text-xs text-center">
          Copyright © 2025 Loan Projector. All rights Reserved by A9 Business.
        </div>
      </div>
    </footer>
  );
}

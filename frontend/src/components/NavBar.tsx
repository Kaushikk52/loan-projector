"use client";

import { navItems, navItemsForTablets } from "@/constants/constants";
import MobileSidebar from "./MobileSidebar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import ServicesDropDown from "./ServicesDropDown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ApplyNow from "./ApplyNow";
import { useScrollContext } from "@/context/ScrollContext";
import RepayLoan from "./RepayLoan";

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showDropDown, setShowDropdown] = useState(false);
  const [openApplyNow, setOpenApplyNow] = useState(false);
  const [openRepay, setOpenRepay] = useState(false);

  const { scrollToRef } = useScrollContext();

  const pathname = usePathname();

  const handleDialogeOpen = (isDialog: boolean) => {
    if (isDialog) {
      setOpenRepay(true);
    }
  };

  const handleApplyNow = () => {
    setOpenApplyNow(true);
  };

  return (
    <div className="flex items-center justify-between p-4 md:px-8 md:py-4 shadow-lg relative z-50">
      <Link href={"/"}>
        <div>
          <Image src={"/main-logo.jpeg"} height={200} width={200} alt="logo" />
        </div>
      </Link>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="hidden lg:block">
          <div className="flex items-center md:space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropMenu && setShowDropdown(true)}
                onMouseLeave={() => item.dropMenu && setShowDropdown(false)}
              >
                <Link href={item.path}>
                  <h1
                    onClick={() =>
                      handleDialogeOpen(
                        item.openDialoge ? item.openDialoge : false
                      )
                    }
                    className={`cursor-pointer font-black text-[14px] text-[#25406e] hover:text-blue-700 font-nunito transition duration-200 flex items-center gap-2 ${
                      pathname === item.path
                        ? "text-blue-700"
                        : "text-[#25406e]"
                    }`}
                  >
                    {item.label}
                    {item.dropMenu && (
                      <ChevronDown
                        size={16}
                        className={`${
                          showDropDown && "rotate-180"
                        } transition-transform duration-200`}
                      />
                    )}
                  </h1>
                </Link>

                {item.label === "Services" && showDropDown && (
                  <div className="absolute top-full left-0 mt-1">
                    <ServicesDropDown setShowDropdown={setShowDropdown} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">
          <div className="flex items-center md:space-x-4 lg:space-x-8">
            {navItemsForTablets.map((item) => (
              <div
                key={item.label}
                className="relative"
                onClick={() => item.dropMenu && setShowDropdown(!showDropDown)}
              >
                <Link href={item.path}>
                  <h1
                    onClick={() =>
                      handleDialogeOpen(
                        item.openDialoge ? item.openDialoge : false
                      )
                    }
                    className={`cursor-pointer font-black text-[14px] text-[#25406e] hover:text-blue-700 font-nunito transition duration-200 flex items-center gap-2 ${
                      pathname === item.path
                        ? "text-blue-700"
                        : "text-[#25406e]"
                    }`}
                  >
                    {item.label}
                    {item.dropMenu && (
                      <ChevronDown
                        size={16}
                        className={`${
                          showDropDown && "rotate-180"
                        } transition-transform duration-200`}
                      />
                    )}
                  </h1>
                </Link>

                {item.label === "Services" && showDropDown && (
                  <div className="absolute top-full left-0 mt-1">
                    <ServicesDropDown setShowDropdown={setShowDropdown} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div
          onClick={handleApplyNow}
          className="bg-blue-500 text-base font-semibold font-nunito md:text-[14px] py-2 px-3 md:px-4 md:py-2 text-white cursor-pointer hover:bg-blue-700 transition duration-300 rounded-lg"
        >
          <h1 className="text-md font-nunito flex items-center gap-2">
            Apply <span className="hidden md:block">Now</span>
          </h1>
        </div>
        <button
          className="flex items-center gap-2 bg-blue-500 text-base font-semibold font-nunito md:text-[14px] py-2 px-3 md:px-4 md:py-2 text-white cursor-pointer hover:bg-blue-700 transition duration-300 rounded-lg"
          onClick={scrollToRef}
        >
          <span className="hidden md:block">EMI</span> Calculator
        </button>
        <ApplyNow
          openApplyNow={openApplyNow}
          setOpenApplyNow={setOpenApplyNow}
        />
        <RepayLoan openRepay={openRepay} setOpenRepay={setOpenRepay} />
      </div>
      <div className="block md:hidden">
        <button>
          <GiHamburgerMenu size={16} onClick={() => setIsSidebarOpen(true)} />
        </button>
        <MobileSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
    </div>
  );
}

"use client";

import { navItems } from "@/constants/constants";
import MobileSidebar from "./MobileSidebar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import ServicesDropDown from "./ServicesDropDown";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showDropDown, setShowDropdown] = useState(false);

  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between p-4 md:px-8 md:py-4 shadow-lg relative z-50">
      <Link href={"/"}>
        <div>
          <Image src={"/main-logo.png"} height={100} width={100} alt="logo" />
        </div>
      </Link>
      <div className="hidden md:block">
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
                  className={`cursor-pointer font-black text-[14px] text-[#25406e] hover:text-blue-700 font-nunito transition duration-200 flex items-center gap-2 ${
                    pathname === item.path ? "text-blue-700" : "text-[#25406e]"
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

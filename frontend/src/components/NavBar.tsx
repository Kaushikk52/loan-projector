"use client";

import { navItems } from "@/constants/constants";
import MobileSidebar from "./MobileSidebar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex items-center justify-between p-4 md:px-8 md:py-4 shadow-lg">
      <div>
        <h1 className="text-lg md:text-2xl uppercase font-bold text-[#25406e]">
          Loan Projector
        </h1>
      </div>
      <div className="hidden md:block">
        <div className="flex items-center md:space-x-4 lg:space-x-8">
          {navItems.map((item) => (
            <div key={item.label}>
              <h1 className="cursor-pointer font-black text-[14px] text-[#25406e] hover:text-blue-700 font-nunito transition duration-200">
                {item.label}
              </h1>
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

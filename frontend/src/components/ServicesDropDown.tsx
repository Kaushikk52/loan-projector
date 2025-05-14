"use client";

import { loanCardsData } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ServicesDropDownProps = {
  isMobileSidebar?: boolean;
  setShowDropdown?: (value: boolean) => void;
  setIsSidebarOpen?: (value: boolean) => void;
};

const ServicesDropDown = ({
  setShowDropdown,
  isMobileSidebar,
  setIsSidebarOpen,
}: ServicesDropDownProps) => {
  const pathname = usePathname();

  return (
    <div
      onMouseEnter={() => setShowDropdown?.(true)}
      className={`w-52 bg-white   ${
        isMobileSidebar ? "" : "shadow-lg border z-50 rounded-md"
      }`}
    >
      {loanCardsData.map((loan) => (
        <Link
          href={loan.path}
          key={loan.label}
          onClick={() => setIsSidebarOpen?.(false)}
        >
          <div
            className={`py-2 px-4 text-sm font-medium hover:bg-gray-100 cursor-pointer ${
              pathname === loan.path ? "text-blue-600" : "text-gray-800"
            }`}
          >
            {loan.label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServicesDropDown;

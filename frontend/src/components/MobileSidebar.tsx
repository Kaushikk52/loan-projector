"use client";

import { ChevronDown, X } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import { navItems } from "@/constants/constants";
import { useState } from "react";
import ServicesDropDown from "./ServicesDropDown";
import { usePathname } from "next/navigation";
import RepayLoan from "./RepayLoan";

type SidebarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
};

export default function MobileSidebar({
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) {
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [openRepay, setOpenRepay] = useState(false);

  const pathname = usePathname();

  const handleLinkClick = (isOpen: boolean) => {
    setIsSidebarOpen(false);
    if (isOpen) {
      setOpenRepay(true);
    }
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        className={clsx(
          "fixed inset-0 bg-opacity-40 transition-opacity duration-300 z-20",
          isSidebarOpen ? "opacity-40 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* SIDEBAR */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-[75%] bg-white shadow-lg transition-transform duration-600 z-50 flex flex-col",
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end items-center p-4">
          <button onClick={() => setIsSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col flex-1 px-4">
          <div className="flex flex-col gap-8">
            {navItems.map((tag) => (
              <div key={tag.label} className="flex flex-col">
                {tag.dropMenu ? (
                  <>
                    <div
                      onClick={() =>
                        setShowServiceDropdown(!showServiceDropdown)
                      }
                      className="text-sm uppercase font-medium text-slate-700 hover:text-slate-800 hover:font-semibold cursor-pointer flex items-center gap-2"
                    >
                      {tag.label}
                      {tag.dropMenu && (
                        <ChevronDown
                          size={16}
                          className={`${
                            showServiceDropdown && "rotate-180"
                          } transition-transform duration-200`}
                        />
                      )}
                    </div>
                    {showServiceDropdown && (
                      <div className="ml-4 mt-2">
                        <ServicesDropDown
                          setShowDropdown={setShowServiceDropdown}
                          isMobileSidebar={true}
                          setIsSidebarOpen={setIsSidebarOpen}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    onClick={() =>
                      handleLinkClick(tag.openDialoge ? tag.openDialoge : false)
                    }
                    href={tag.path}
                    className={`text-sm uppercase font-medium hover:font-semibold cursor-pointer ${
                      pathname === tag.path ? "text-blue-600" : "text-gray-600"
                    }`}
                  >
                    {tag.label}
                  </Link>
                )}
                <RepayLoan openRepay={openRepay} setOpenRepay={setOpenRepay} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

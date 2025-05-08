import { X } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import { navItems } from "@/constants/constants";

type SidebarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
};

export default function MobileSidebar({
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) {
  return (
    <>
      {/* BACKDROP */}
      <div
        className={clsx(
          "fixed inset-0 bg-opacity-40 transition-opacity duration-300 z-20",
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* SIDEBAR */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-[50%] bg-white shadow-lg transition-transform duration-600 z-50 flex flex-col",
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="flex justify-end items-center p-4">
          <button onClick={() => setIsSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col flex-1 px-4">
          <div className="flex flex-col gap-8">
            {navItems.map((tag) => (
              <Link
                onClick={() => setIsSidebarOpen(false)}
                href={tag.path}
                key={tag.label}
                className="text-sm uppercase font-medium text-slate-700 hover:text-slate-800 hover:font-semibold cursor-pointer"
              >
                {tag.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

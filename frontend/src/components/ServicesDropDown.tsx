import { loanCardsData } from "@/constants/constants";
import Link from "next/link";

type ServicesDropDownProps = {
  isMobileSidebar?: boolean;
  setShowDropdown?: (value: boolean) => void;
};

const ServicesDropDown = ({
  setShowDropdown,
  isMobileSidebar,
}: ServicesDropDownProps) => {
  return (
    <div
      onMouseEnter={() => setShowDropdown?.(true)}
      className={`w-52 bg-white   ${
        isMobileSidebar ? "" : "shadow-lg border z-50 rounded-md"
      }`}
    >
      {loanCardsData.map((loan) => (
        <Link href={loan.path} key={loan.label}>
          <div className="py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-100 cursor-pointer">
            {loan.label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServicesDropDown;

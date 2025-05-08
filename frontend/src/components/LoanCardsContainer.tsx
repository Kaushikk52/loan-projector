import { loanCardsData } from "@/constants/constants";
import LoanCard from "./LoanCard";

export default function LoadCardContainer() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 box-border border-transparent">
      {loanCardsData.map((card) => (
        <LoanCard
          key={card.label}
          label={card.label}
          theme={card.theme}
          icon={card.icon}
        />
      ))}
    </div>
  );
}

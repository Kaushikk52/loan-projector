import { IconType } from "react-icons";

type LoanCardProps = {
  label: string;
  theme: string;
  icon: IconType;
};

export default function LoanCard({ label, theme, icon: Icon }: LoanCardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-5 py-10 w-[200px] rounded loan-card-hover transition duration-300 cursor-pointer border border-transparent box-border`}
      style={{ backgroundColor: theme }}
    >
      <Icon size={50} color="#515151" />
      <h1 className="text-sm text-slate-700 font-black font-nunito">{label}</h1>
    </div>
  );
}

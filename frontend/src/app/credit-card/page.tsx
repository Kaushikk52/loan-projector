import LoanPagesComponent from "@/components/LoanPagesComponent";

export default function CreditCard() {
  return (
    <div>
      <LoanPagesComponent
        title="Creadit card loan"
        imgSrc="/credit-card-img.png"
        desc="Are you thinking of buying your first car, but facing budget constraints? Or, are you looking to buy a second vehicle for your family’s needs? In either case, a used or pre-owned vehicle could be your best bet."
        documents=" required are PAN, Aadhar, Salary Slip, Bank Statement,Car Registration Copy, Utility Bills, Rent Agreements, etc."
      />
    </div>
  );
}

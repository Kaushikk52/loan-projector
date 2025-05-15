import LoanPagesComponent from "@/components/LoanPagesComponent";

export default function PayDayLoanPage() {
  return (
    <div>
      <LoanPagesComponent
        title="Payday loan"
        imgSrc="/payday-loan-img.png"
        desc="Unexpected expenses can strike when you’re least prepared—be it for rent, bills, or daily needs.
       In such moments, a payday loan can offer quick financial relief to help you stay afloat.
    While it's a short-term solution, it provides the support you need until your next paycheck arrives."
        isPayday={true}
      />
    </div>
  );
}

import LoanPagesComponent from "@/components/LoanPagesComponent";

export default function HomeLoanPage() {
  return (
    <div>
      <LoanPagesComponent
        title="Home loan"
        imgSrc="/home-loan-img.png"
        desc="Owning a home is more than just a milestone—it’s about building a space filled with comfort, memories, and a sense of belonging. A home loan helps turn this dream into reality by offering the financial support you need to buy, build, or renovate your perfect living space. With attractive interest rates, long-term repayment options, and easy eligibility, a home loan brings you one step closer to the joy of having a place you can truly call your own."
        isHomeLoan={true}
      />
    </div>
  );
}

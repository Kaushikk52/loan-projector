import LoanPagesComponent from "@/components/LoanPagesComponent";

export default function MedicalLoanPage() {
  return (
    <div>
      <LoanPagesComponent
        imgSrc="/medical-loan-img.png"
        title="Medical Loan"
        desc="Medical emergencies can be extremely frightening, especially if you
            are unprepared! While many people have started investing in medical
            insurance, a large number of people are still uncovered, especially
            for emergencies. And at times, even insurance will not cover certain
            medical expenses."
      />
    </div>
  );
}

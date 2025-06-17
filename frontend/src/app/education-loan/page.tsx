import LoanPagesComponent from "@/components/LoanPagesComponent";

export default function EducationLoan() {
  return (
    <div>
      <LoanPagesComponent
        title="Education Loan"
        imgSrc="/education-loan-img.png"
        desc="Fund Your Education with Our Flexible Education Loans
Dream Big, Study Anywhere – We’ve Got You Covered!
Pursue your academic goals in India or abroad with our tailored education loans. Whether it’s engineering, medicine, management, or any career-oriented course, our loans offer competitive interest rates, flexible repayment options, and hassle-free processing to help you focus on your studies."
        documents=" required are PAN, Aadhar, Salary Slip, Bank Statement,Car Registration Copy, Utility Bills, Rent Agreements, etc."
      />
    </div>
  );
}

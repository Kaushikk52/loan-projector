import LoanPagesComponent from "@/components/LoanPagesComponent";

export default function CreditCard() {
  const requirementData = [
    {
      title: "Age",
      desc: "18+ for student/add-on cards; 21–60 for primary cards.",
    },
    {
      title: "Income",
      desc: "Minimum ₹15,000/month (salaried) or ₹2 lakh/year ITR (self-employed). Students may need a co-applicant or fixed deposit.",
    },
    {
      title: "Documents - Identity Proof",
      desc: "Aadhaar, PAN, Passport, or Voter ID.",
    },
    {
      title: "Documents - Address Proof",
      desc: "Aadhaar, utility bill, or rent agreement.",
    },
    {
      title: "Documents - Income Proof",
      desc: "Salary slips, ITR, or bank statements (waived for some student cards).",
    },
    {
      title: "Documents - For Students",
      desc: "Admission letter, academic records, or co-applicant’s income proof.",
    },
    {
      title: "Credit Score",
      desc: "720+ preferred; new-to-credit applicants can opt for secured cards.",
    },
  ];

  const dynamicDocs = [
    {
      title: "Identity Proof (Any one of the following)",
      points: [
        "Aadhaar Card (mandatory for e-KYC in most cases)",
        "PAN Card (mandatory for credit assessment)",
        "Passport",
        "Voter ID Card",
        "Driving License",
      ],
    },
    {
      title: "Address Proof (Any one of the following)",
      points: [
        "Aadhaar Card",
        "Passport",
        "Voter ID Card",
        "Ration Card",
        "Utility Bills (electricity, telephone, not older than 3 months)",
        "Registered Rent/Lease Agreement",
      ],
    },
    {
      title: "Income Proof - Salaried Individuals",
      points: [
        "Salary slips for the last 3 months",
        "Bank statements for the last 3–6 months",
        "Form 16 or Income Tax Returns (ITR) for the last 1–2 years",
      ],
    },
    {
      title: "Income Proof - Self-Employed Individuals",
      points: [
        "ITR for the last 2 years",
        "Audited balance sheet and profit & loss statement (if applicable)",
        "Bank statements for the last 6 months",
      ],
    },
    {
      title: "Income Proof - Students",
      points: [
        "Income proof may be waived for student-specific cards (e.g., SBI Student Plus Advantage, ICICI Student Credit Card)",
        "Co-applicant’s (parent/guardian) income proof: Salary slips, ITR, or bank statements",
        "Fixed deposit documents (for secured cards against FD)",
      ],
    },
    {
      title: "Additional Documents",
      points: [
        "Application Form: Complete the online or physical form provided by the bank",
        "Photographs: 2–3 recent passport-sized photographs (some banks may not require this for digital applications)",
        "Enrollment Proof (Students): Admission letter or academic records (Class 10/12 mark sheets) for student credit cards",
        "Banking Relationship Proof: Existing account statements (if applying with a bank where you hold an account)",
        "UPI-Enabled Cards: No additional documents required; link your card to UPI apps (e.g., BHIM, Google Pay) post-approval",
      ],
    },
  ];

  return (
    <div>
      <LoanPagesComponent
        title="Credit card loan"
        imgSrc="/credit-card-img.png"
        desc="Discover the Perfect Credit Card for Your Journey
Empower your financial freedom with our range of credit cards, crafted for students, professionals, and dreamers alike. Whether you’re funding study expenses, traveling abroad, or building your credit, we have a card that fits your lifestyle.
Key Features of Our Credit Cards"
        documents=" required are PAN, Aadhar, Salary Slip, Bank Statement,Car Registration Copy, Utility Bills, Rent Agreements, etc."
        isDynamicRequirement={true}
        dynamicRequirement={requirementData}
        isDynamicDocs={true}
        dynamicDocs={dynamicDocs}
      />
    </div>
  );
}

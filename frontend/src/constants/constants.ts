import {
  FaHandHoldingUsd,
  FaRegAddressCard,
  FaRegCheckSquare,
  FaUserTie,
} from "react-icons/fa";
import { GiAmbulance, GiFamilyHouse } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";
import { IoCarSportSharp, IoDiamond } from "react-icons/io5";
import { MdCardTravel } from "react-icons/md";
import { BsCreditCard, BsShieldFillCheck } from "react-icons/bs";
import { PiMoney } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { GrDocument } from "react-icons/gr";

export const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "", dropMenu: true },
  { label: "Repay Loan", path: "", openDialoge: true },
  { label: "Contact Us", path: "/contact" },
];

export const loanCardsData = [
  {
    label: "Personal / Business Loans",
    theme: "pink",
    icon: MdCardTravel,
    description:
      "Secure funds quickly for your personal or business needs with flexible repayment options.",
    path: "/personal-loan",
  },
  {
    label: "Payday Loan",
    theme: "orange",
    icon: FaHandHoldingUsd,
    description:
      "Cover urgent expenses before your next paycheck with our fast and easy payday loan service.",
    path: "/payday-loan",
  },
  {
    label: "Medical Loans",
    theme: "blue",
    icon: GiAmbulance,
    description:
      "Easily confront a medical emergency with a quick medical loan designed to support your health needs.",
    path: "/medical-loan",
  },
  {
    label: "Home / Mortgage Loan",
    theme: "purple",
    icon: GiFamilyHouse,
    description:
      "Get a loan for your dream house and mortagage for your current home.",
    path: "/home-loan",
  },
  {
    label: "Used Car Loan",
    theme: "purple",
    icon: IoCarSportSharp,
    description:
      "Get higher loan eligibility up to 200% of the car valuation from across 30+ lenders at attractive interest rates all across India.",
    path: "/car-loan",
  },
  {
    label: "Shopping Loans",
    theme: "green",
    icon: IoMdCart,
    description:
      "Shop without financial stress using our loan options that give you the freedom to buy what you need.",
    path: "/shopping-loan",
  },
];

export const ourJourneyData = [
  { amount: 56, tag: "Loans sanctioned", unit: "L" },
  { amount: 60, tag: "Loan amount disbursed", unit: "Cr+" },
  { amount: 25, tag: "Active Loans", unit: "L+" },
];

export const homeSliderData = [
  "/hdfc-img.png",
  "/icici-img.avif",
  "/incred-img.jpeg",
  "/indusind-img.png",
  "/kotak-img.jpg",
  "/tata-img.png",
  "/pnb-housing-img.webp",
  "dhfl_logo-img.png",
  "adani-capital-img.jpeg",
  "yes-bank-img.jpeg",
];

export const aboutUsImpactData = [
  {
    icon: BsShieldFillCheck,
    tag: "Secure",
    desc: "We prioritize your safety and data security, ensuring that all your transactions and personal information are protected with the latest encryption technology.",
  },
  {
    icon: IoDiamond,
    tag: "Proficient",
    border: true,
    desc: "Our team is highly skilled and proficient in delivering high-quality solutions that exceed expectations, making sure your needs are met with precision.",
  },
  {
    icon: FaUserTie,
    tag: "Professional",
    desc: "We maintain a high standard of professionalism in everything we do, ensuring timely delivery, clear communication, and exceptional customer service.",
  },
];

export const benifitsCardData = [
  {
    icon: FaRegCheckSquare,
    desc: "Since an emergency can emerge at any time in different forms where you have to arrange the cash in a short period. It gives you freedom for multiple usages of loans.",
    title: "Multiple Usage",
  },
  {
    icon: PiMoney,
    desc: "You have complete freedom to choose a convenient rate of interest and we are providing a competitive rate of interest that makes your borrowing easy and convenient.",
    title: "Interest Rate",
  },
  {
    icon: GrDocument,
    desc: "It imparts freedom for the application while applying for an emergency loan. It can be done from anywhere at any time. As per the instant requirement, you can proceed at any time.",
    title: "Less Documentation",
  },
  {
    icon: BsCreditCard,
    desc: "Your frequent borrowing and timely repayment boost your credit score therefore it can help you get financial assistance easily.",
    title: "Credit Score",
  },
  {
    icon: SlCalender,
    desc: "As per the requirement like confronting an emergency, it emphasises on saving time and therefore we always try to impart the best lending experience to our valuable customers.",
    title: "Saviour of Time",
  },
  {
    icon: FaRegAddressCard,
    desc: "While applying for the emergency loan you don’t have to send the physical or hard copy of the documents. You need to send them in a softcopy only. Less documentation helps.",
    title: "Freedom of Application",
  },
];

export const heroImageData = [
  "/hero-img-1.jpeg",
  "/hero-img-2.jpg",
  "/hero-img-3.jpeg",
];

export const footerLinksLabel = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Conatct Us", path: "/contact" },
];

export const servicesData = [
  { name: "Business Loan", path: "/business-loan" },
  { name: "Personal Loan", path: "/personal-loan" },
  { name: "Payday Loan", path: "/payday-loan" },
  { name: "Medical Loan", path: "/medical-loan" },
  { name: "Home / Mortgage Loan", path: "/home-loan" },
  { name: "Used car Loan", path: "/car-loan" },
  { name: "Shopping Loan", path: "/shopping-loan" },
];

import { FaHandHoldingUsd, FaUserTie } from "react-icons/fa"
import { GiAmbulance, GiFamilyHouse } from "react-icons/gi"
import { IoMdCart } from "react-icons/io"
import { IoCarSportSharp, IoDiamond } from "react-icons/io5"
import { MdCardTravel } from "react-icons/md"
import { BsShieldFillCheck } from "react-icons/bs";


export const navItems =[
    {label:"Home",path:"/"},
    {label:"About Us",path:"/about"},
    {label:"Services",path:"/",dropMenu:true},
    {label:"Repay Loan",path:"/repay"},
    {label:"Contact Us",path:"/contact"},
]

export const loanCardsData = [
    {
      label: "Personal / Business Loans",
      theme: "pink",
      icon: MdCardTravel,
      description: "Secure funds quickly for your personal or business needs with flexible repayment options."
    },
    {
      label: "Payday Loan",
      theme: "orange",
      icon: FaHandHoldingUsd,
      description: "Cover urgent expenses before your next paycheck with our fast and easy payday loan service."
    },
    {
      label: "Medical Loans",
      theme: "blue",
      icon: GiAmbulance,
      description: "Easily confront a medical emergency with a quick medical loan designed to support your health needs."
    },
    {
      label: "Home / Mortgage Loan",
      theme: "purple",
      icon: GiFamilyHouse,
      description: "Get a loan for household needs or mortgage expenses that require immediate attention and convenience."
    },
    {
      label: "Used Car Loan",
      theme: "purple",
      icon: IoCarSportSharp,
      description: "Drive home your dream used car with our easy and affordable loan options tailored just for you."
    },
    {
      label: "Shopping Loans",
      theme: "green",
      icon: IoMdCart,
      description: "Shop without financial stress using our loan options that give you the freedom to buy what you need."
    }
  ];
  

export const ourJourneyData=[
    {amount:56,tag:"Loans sanctioned",unit:"L"},
    {amount:60,tag:"Loan amount disbursed",unit:"Cr+"},
    {amount:25,tag:"Active Loans",unit:"L+"},
]

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
  "yes-bank-img.jpeg"
];

export const aboutUsImpactData = [
  { icon: BsShieldFillCheck, tag: "Secure", desc: "We prioritize your safety and data security, ensuring that all your transactions and personal information are protected with the latest encryption technology." },
  { icon: IoDiamond, tag: "Proficient",border:true, desc: "Our team is highly skilled and proficient in delivering high-quality solutions that exceed expectations, making sure your needs are met with precision." },
  { icon: FaUserTie, tag: "Professional", desc: "We maintain a high standard of professionalism in everything we do, ensuring timely delivery, clear communication, and exceptional customer service." },
];

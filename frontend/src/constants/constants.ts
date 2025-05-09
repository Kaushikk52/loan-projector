import { FaHandHoldingUsd } from "react-icons/fa"
import { GiAmbulance, GiFamilyHouse } from "react-icons/gi"
import { IoMdCart } from "react-icons/io"
import { IoCarSportSharp } from "react-icons/io5"
import { MdCardTravel } from "react-icons/md"

export const navItems =[
    {label:"Home",path:"/"},
    {label:"About Us",path:"/about"},
    {label:"Services",path:"/"},
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
  "/fibe-img.jpg",
  "/hdfc-img.png",
  "/icici-img.avif",
  "/incred-img.jpeg",
  "/indusind-img.png",
  "/kotak-img.jpg",
  "/kredit-bee-img.png",
  "/mpokket-img.webp",
  "/tata-img.png",
  "/zype-img.png",
  "/pnb-housing-img.webp",
  "dhfl_logo-img.png"
];

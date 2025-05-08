import { BsCreditCardFill } from "react-icons/bs"
import { FaHandHoldingUsd } from "react-icons/fa"
import { GiAmbulance, GiFamilyHouse } from "react-icons/gi"
import { IoMdCart } from "react-icons/io"
import { MdCardTravel } from "react-icons/md"

export const navItems =[
    {label:"Home",path:"/"},
    {label:"About Us",path:"/about"},
    {label:"Services",path:"/"},
    {label:"Repay Loan",path:"/repay"},
    {label:"Contact Us",path:"/contact"},
]

export const loanCardsData=[
    {label:"Household Loans",theme:"#F7D8E3",icon:GiFamilyHouse },
    {label:"Financial Loans",theme:"#A8D1DF",icon:FaHandHoldingUsd },
    {label:"Medical Loans",theme:"#CDC2F5",icon:GiAmbulance },
    {label:"Holiday/Travels Loans",theme:"#C6B7FE",icon:MdCardTravel },
    {label:"Shopping Loans",theme:"#F7D0AF",icon:IoMdCart },
    {label:"Credit bills Loans",theme:"#CAF7B7",icon:BsCreditCardFill },
]

export const ourJourneyData=[
    {amount:56,tag:"Loans sanctioned",unit:"L"},
    {amount:17,tag:"Loan amount disbursed",unit:"Cr+"},
    {amount:25,tag:"Active Loans",unit:"L+"},
]
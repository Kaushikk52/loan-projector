"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

type LoanCalculatorProps = {
  minLoanAmount: number;
  maxLoanAmount: number;
  minInterestRate: number;
  maxInterestRate: number;
  minTenure: number;
  maxTenure: number;
  isShortTerm?: boolean;
  isPayday?: boolean;
};

export default function LoanCalculator(props: LoanCalculatorProps) {
  const [loanAmount, setLoanAmount] = useState(86000);
  const [interestRate, setInterestRate] = useState(props.isShortTerm ? 0.9 : 9);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  const [interestPayable, setInterestPayable] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const minLoanAmount = props.minLoanAmount;
  const maxLoanAmount = props.maxLoanAmount;
  const minInterestRate = props.minInterestRate;
  const maxInterestRate = props.maxInterestRate;
  const minTenure = props.minTenure;
  const maxTenure = props.maxTenure;
  const isShortTerm = props.isShortTerm || false;

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, tenure, isShortTerm]);

  const calculateEMI = () => {
    let emiValue = 0;
    let totalInterest = 0;
    let totalPaymentValue = 0;

    if (isShortTerm || props.isPayday) {
      const dailyInterestRate = interestRate / 100; // No division by 30

      totalInterest = loanAmount * dailyInterestRate * tenure;

      totalPaymentValue = loanAmount + totalInterest;

      emiValue = totalPaymentValue / tenure;
    } else {
      const monthlyInterestRate = interestRate / 100 / 12;
      const totalMonths = tenure * 12;

      if (monthlyInterestRate === 0) {
        emiValue = loanAmount / totalMonths;
        totalPaymentValue = loanAmount;
        totalInterest = 0;
      } else {
        emiValue =
          (loanAmount *
            monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, totalMonths)) /
          (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

        totalPaymentValue = emiValue * totalMonths;
        totalInterest = totalPaymentValue - loanAmount;
      }
    }

    setEmi(Math.round(emiValue));
    setTotalPayment(Math.round(totalPaymentValue));
    setInterestPayable(Math.round(totalInterest));
  };

  const handleLoanAmountChange = (value: number[]) => {
    setLoanAmount(value[0]);
  };

  const handleLoanInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || 0;
    if (value >= minLoanAmount && value <= maxLoanAmount) {
      setLoanAmount(value);
    }
  };

  const handleInterestRateChange = (value: number[]) => {
    setInterestRate(value[0]);
  };

  const handleInterestInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number.parseFloat(e.target.value) || 0;
    if (value >= minInterestRate && value <= maxInterestRate) {
      setInterestRate(value);
    }
  };

  const handleTenureChange = (value: number[]) => {
    setTenure(value[0]);
  };

  const handleTenureInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || 0;
    if (value >= minTenure && value <= maxTenure) {
      setTenure(value);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        {isShortTerm ? "Short-Term Loan Calculator" : "EMI Calculator"}
      </h1>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="loanAmount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Enter Loan Amount
          </label>
          <Input
            id="loanAmount"
            type="number"
            value={loanAmount}
            onChange={handleLoanInputChange}
            className="mb-2"
          />
          <div className="mt-2">
            <Slider
              value={[loanAmount]}
              min={minLoanAmount}
              max={maxLoanAmount}
              step={1000}
              onValueChange={handleLoanAmountChange}
              className="my-4"
              thumbClassName="bg-blue-500 border-indigo-800"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>₹ {minLoanAmount.toLocaleString()}</span>
              <span>₹ {maxLoanAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="interestRate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Interest Rate
            </label>
            <Input
              id="interestRate"
              type="number"
              value={interestRate}
              onChange={handleInterestInputChange}
              className="mb-2"
              step="0.1"
            />
            <div className="mt-2">
              <Slider
                value={[interestRate]}
                min={minInterestRate}
                max={maxInterestRate}
                step={0.1}
                onValueChange={handleInterestRateChange}
                className="my-4"
                thumbClassName="bg-blue-500 border-indigo-800"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>{minInterestRate}%</span>
                <span>{maxInterestRate}%</span>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="tenure"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tenure ({isShortTerm || props.isPayday ? "days" : "years"})
            </label>
            <Input
              id="tenure"
              type="number"
              value={tenure}
              onChange={handleTenureInputChange}
              className="mb-2"
            />
            <div className="mt-2">
              <Slider
                value={[tenure]}
                min={minTenure}
                max={maxTenure}
                step={1}
                onValueChange={handleTenureChange}
                className="my-4"
                thumbClassName="bg-blue-500 border-indigo-800"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>
                  {minTenure} {isShortTerm || props.isPayday ? "days" : "years"}
                </span>
                <span>
                  {maxTenure} {isShortTerm || props.isPayday ? "days" : "years"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-md p-4 flex items-center justify-evenly gap-4 text-center">
          <div>
            <p className="text-sm text-gray-600">
              {isShortTerm || props.isPayday ? "Daily Payment" : "Monthly EMI"}
            </p>
            <p className="text-xl font-bold">₹ {emi.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Interest Payable</p>
            <p className="text-xl font-bold">
              ₹ {interestPayable.toLocaleString()}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-gray-600">Total Amount Payable</p>
            <p className="text-xl font-bold">
              ₹ {totalPayment.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

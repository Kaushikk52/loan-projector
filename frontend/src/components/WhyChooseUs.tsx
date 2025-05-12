import { MdDone } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import Image from "next/image"; // Only if using Next.js
import { JSX } from "react";

type WhyChooseUsProps = {
  title: string;
  imgSrc: string;
};

const WhyChooseUs = ({ title, imgSrc }: WhyChooseUsProps) => {
  console.log(imgSrc);

  return (
    <div className="min-h-fit bg-gradient-to-b from-[#ebf2f7] to-[#cbe8fc] p-8 w-full py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Centered Heading */}
        <h2 className="text-center text-3xl lg:text-4xl font-bold text-blue-800 font-nunito mb-8">
          Why choose Loan Projector for {title} ?
        </h2>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Left: Feature Cards */}
          <div className="flex-1 space-y-6 w-full">
            <Feature
              icon={<MdDone className="text-blue-600 text-3xl" />}
              title="Instant Approval"
              desc="Get loan approval immediately after quick verification."
            />
            <Feature
              icon={
                <BsFillLightningChargeFill className="text-red-500 text-3xl" />
              }
              title="Fast Disbursal"
              desc="Quick loan disbursal process with minimal delay."
            />
            <Feature
              icon={<FaMoneyCheckAlt className="text-green-600 text-3xl" />}
              title="Competitive Repayment"
              desc="Lower your repayment burden with our affordable plans."
            />
            <Feature
              icon={<GiTakeMyMoney className="text-purple-500 text-3xl" />}
              title="Multi-purpose Usage"
              desc="Use the loan amount for any emergency or personal need."
            />
          </div>

          {/* Right: Image */}
          <div className="flex-1 max-w-lg">
            <Image
              src={imgSrc}
              alt="Loan consultation"
              height={1000}
              width={1000}
              className="rounded-3xl shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature = ({
  icon,
  title,
  desc,
}: {
  icon: JSX.Element;
  title: string;
  desc: string;
}) => (
  <div className="flex items-start gap-4 p-4 bg-white shadow rounded-xl">
    <div>{icon}</div>
    <div>
      <h3 className="text-lg font-bold text-blue-800">{title}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  </div>
);

export default WhyChooseUs;

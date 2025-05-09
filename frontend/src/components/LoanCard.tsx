"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

type LoanCardProps = {
  label: string;
  theme: string;
  icon: IconType;
  description: string;
};

const LoanCard = ({ label, theme, icon: Icon, description }: LoanCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-slate-50 rounded-3xl p-3 flex flex-col items-center text-center cursor-pointer relative overflow-hidden h-64 pt-10"
      // style={{ backgroundColor: theme }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Icon */}
      <motion.div
        className="w-60 h-16 rounded-full flex items-center justify-center"
        initial={{ y: 0 }}
        animate={{
          y: isHovered ? -100 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Icon size={50} color={theme} />
      </motion.div>

      {/* Title */}
      <motion.h3
        className={`text-${theme}-800 text-center font-bold text-xl absolute w-full px-6`}
        initial={{ y: 80 }}
        animate={{
          y: isHovered ? 10 : 80,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          delay: isHovered ? 0.1 : 0,
        }}
      >
        {label}
      </motion.h3>

      {/* Description */}
      {description && (
        <motion.p
          className="text-gray-600 text-sm absolute w-full left-0 px-8"
          initial={{ y: 240, opacity: 0 }}
          style={{ color: theme }}
          animate={{
            y: isHovered ? 80 : 240,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: isHovered ? 0.2 : 0,
          }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default LoanCard;

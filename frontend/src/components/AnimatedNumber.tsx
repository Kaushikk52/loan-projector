"use client";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

type animaedNumberProps = {
  countValue: number;
};

export function AnimatedNumberInView({ countValue }: animaedNumberProps) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setValue(countValue);
    } else {
      setValue(0); // Reset when out of view
    }
  }, [isInView, countValue]);

  return (
    <div className="flex w-full items-center justify-center" ref={ref}>
      <AnimatedNumber
        className="inline-flex items-center text-4xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold font-nunito text-zinc-800 dark:text-zinc-50"
        springOptions={{
          bounce: 0,
          duration: 1500,
        }}
        value={value}
      />
    </div>
  );
}

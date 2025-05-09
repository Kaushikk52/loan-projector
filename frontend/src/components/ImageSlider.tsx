import { homeSliderData } from "@/constants/constants";
import Image from "next/image";
import { InfiniteSlider } from "./motion-primitives/infinite-slider";

export default function ImageSlider() {
  return (
    <InfiniteSlider
      speedOnHover={20}
      gap={24}
      // className="flex max-w-xs sm:max-w-lg md:max-w-sm lg:max-w-xl xl:max-w-7xl"
    >
      {homeSliderData.map((path) => (
        <div
          key={path}
          className="shrink-0 w-[100px] h-[100px] flex items-center justify-center"
        >
          <Image
            src={path}
            alt={`${path} image`}
            width={100}
            height={100}
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </InfiniteSlider>
  );
}

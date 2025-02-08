import React from "react";
import Navbar from "./Navbar";

const Background: React.FC<{
  image: string;
  heading: string;
  paragraph: string;
}> = ({ image, heading, paragraph }) => {
  return (
    <div
      className="flex relative w-[1728px] h-[600px] px-[166px] py-[252px] items-center gap-2.5 flex-shrink-0 flex-col"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-0 w-full mt-4">
        <Navbar />
      </div>
      <h4 className="self-stretch text-white text-center text-[36px] font-medium leading-[58px] tracking-[4.32px]">
        {heading}
      </h4>
      <p className="w-[673px] text-[#E6E5E6] text-center font-[Poppins] text-[16px] font-normal leading-[26px]">
        {paragraph}
      </p>
    </div>
  );
};

export default Background;

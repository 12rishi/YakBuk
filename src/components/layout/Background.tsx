import React from "react";
import Navbar from "./Navbar";

const Background: React.FC<{
  image: string;
  heading: string;
  paragraph: string;
}> = ({ image, heading, paragraph }) => {
  return (
    <div
      className="flex relative w-[100vw] h-[37.5rem] px-[10.375rem] py-[15.75rem] items-center gap-2.5 flex-shrink-0 flex-col"
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
      <h4 className="self-stretch text-white text-center text-[2.25rem] font-medium leading-[3.625rem] tracking-[0.27rem]">
        {heading}
      </h4>
      <p className="w-[51.25rem] h-[3.25rem]  text-[#E6E5E6] text-center font-[Poppins] text-[1rem] font-normal leading-[1.625rem]">
        {paragraph}
      </p>
    </div>
  );
};

export default Background;

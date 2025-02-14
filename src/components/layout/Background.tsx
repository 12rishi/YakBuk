import React from "react";
import Navbar from "./Navbar";

const Background: React.FC<{
  image: string;
  heading: string;
  paragraph: string;
}> = ({ image, heading, paragraph }) => {
  return (
    <div
      className=" w-[100vw] sm:h-[50vh] lg:h-[37.5rem] "
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="h-full w-full flex flex-col items-center sm:gap-4 lg:gap-16 lg:mt-16 sm:mt-12  lg:px-0 md:px-0 ">
        <h4 className="self-stretch text-white text-center sm:text-[4vw] lg:text-[2.25rem] font-medium  lg:leading-[3.625rem] sm:tracking-[0.15rem] lg:tracking-[0.27rem]">
          {heading}
        </h4>
        <p className="lg:w-[51.25rem] sm:w-[100vw] sm:h-[1rem] lg:h-[3.25rem]  text-[#E6E5E6] text-center font-[Poppins] sm:text-sm md:text-[1rem] sm:px-2  md:px-6 lg:text-[1rem] font-normal sm:leading-[1rem] lg:leading-[1.625rem] ">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Background;

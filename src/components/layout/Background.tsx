import React from "react";
import Navbar from "./Navbar";

const Background: React.FC<{
  image: string;
  heading: string;
  paragraph: string;
}> = ({ image, heading, paragraph }) => {
  return (
    <div
      className=" w-[100vw] h-[37.5rem] "
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />

      <div className="h-full w-full flex flex-col items-center gap-16  mt-36">
        <h4 className="self-stretch text-white text-center text-[2.25rem] font-medium leading-[3.625rem] tracking-[0.27rem]">
          {heading}
        </h4>
        <p className="lg:w-[51.25rem] sm:w-[100vw] h-[3.25rem]  text-[#E6E5E6] text-center font-[Poppins] text-[1rem] font-normal leading-[1.625rem] ">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Background;

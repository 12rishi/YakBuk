import React from "react";
import Navbar from "../../../../components/layout/Navbar";

const Hero = () => {
  return (
    <>
      <div
        className="w-[100vw] absolute h-[60rem] p-3 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage:
            "radial-gradient(26.81% 44.26% at 50.48% 11.56%, rgba(0, 0, 0, 0) 0%, rgba(0, 11, 0, 0.72) 0%),url('/images/headerbackground.png') ",
        }}
      >
        <Navbar />
        <div className="w-8/12 h-full align-middle justify-center mx-auto flex flex-col gap-[0.75rem] text-white">
          <div className="flex justify-center">
            <h2 className="self-stretch text-white font-poppins text-[2.25rem] font-medium leading-[3.625rem] tracking-[0.27rem]">
              Rare beans Bold flavors. Pure adventure
            </h2>
          </div>
          <div>
            <h3 className="self-stretch text-[#E6E5E6] text-center font-poppins text-[1rem] font-normal leading-[1.625rem]">
              The mountains may challenge you, but we’re here to comfort
              you—with rich coffee, soulful flavors, and a warm{" "}
              <span className="block text-center">Himalayan welcome.</span>
            </h3>
          </div>
        </div>
        <div className="w-full h-auto align-middle items-center absolute bottom-0 flex justify-between px-12">
          <div className="flex flex-col w-[207px] h-[103.25px] items-center">
            <figure>
              <img
                src="/images/headerCup.png"
                alt=""
                width="90px"
                height="80.255px"
              />
            </figure>

            <p className="font-poppins font-medium text-sm leading-6 tracking-[0.16em] text-[#FFFFFF]">
              From Peaks, With Love.
            </p>
          </div>
          <div className="mr-6 mb-10 ">
            <figure className="m-0 relative">
              <img
                src="/images/headermountain.png"
                alt=""
                width="226px"
                height="40px"
                className="m-0 p-0"
              />
            </figure>
            <div className="mb-16 absolute  bottom-4">
              {" "}
              <p className="flex items-center font-poppins font-medium text-sm leading-6 tracking-[0.16em] text-[#FFFFFF]">
                <span className="flex-1 h-[2px] bg-[#4A494B]"></span>
                <span className="px-2">100%</span>
                <span className="flex-1 h-[2px] bg-[#4A494B]"></span>
              </p>
              <p className="font-poppins font-medium text-sm leading-6 tracking-[0.16em] text-[#FFFFFF] text-center">
                Premium Mountain Roast
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-[107.5rem] h-[9.5rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1728 154"
            className="w-[107.5rem] h-[9.5rem] shrink-0 fill-white stroke-white stroke-[0.125rem]"
          >
            <path d="M863.5 1L0 153H1728L863.5 1Z" />
          </svg>

          <div className="absolute top-[0.625rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42.5rem] h-[31.375rem] bg-[url('/images/headeryakbukCup.png')] bg-cover bg-no-repeat"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;

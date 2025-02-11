import React from "react";
import Navbar from "../../../../components/layout/Navbar";

const Hero = () => {
  return (
    <>
      <div
        className="w-[100vw]  lg:h-[60rem] p-3 bg-cover bg-center bg-no-repeat sm:h-[40rem] sm:p-4 "
        style={{
          backgroundImage:
            "radial-gradient(26.81% 44.26% at 50.48% 11.56%, rgba(0, 0, 0, 0) 0%, rgba(0, 11, 0, 0.72) 0%),url('/images/headerbackground.png') ",
        }}
      >
        <Navbar />
        <div className="lg:w-8/12 h-full align-middle justify-center mx-auto flex flex-col gap-[0.75rem] text-white sm:w-full ">
          <div className="flex justify-center">
            <h2 className="self-stretch text-white font-poppins sm:text-[1.25rem] lg:text-[2.25rem] text-center font-medium leading-[3.625rem] tracking-[0.27rem] sm:font-light lg:font-medium md:font-light">
              Rare beans Bold flavors. Pure adventure
            </h2>
          </div>
          <div>
            <h3 className="self-stretch text-[#E6E5E6] text-center font-poppins sm:text-[0.9rem] lg:text-[1rem] font-normal leading-[1.625rem]">
              The mountains may challenge you, but we’re here to comfort
              you—with rich coffee, soulful flavors, and a warm{" "}
              <span className="block text-center">Himalayan welcome.</span>
            </h3>
          </div>
        </div>
        <div className="w-full h-auto align-middle items-center absolute bottom-0 flex justify-between sm:px-4 lg:px-12 ">
          <div className="flex flex-col lg:w-[207px] sm:w-[130px] sm:h-[110px] lg:h-[103.25px] items-center">
            <figure>
              <img
                src="/images/headerCup.png"
                alt=""
                width="90px"
                height="80.255px"
              />
            </figure>

            <p className="font-poppins font-medium lg:text-sm leading-6 tracking-[0.16em] text-[#FFFFFF] sm:text-[8px] sm:w-full ">
              From Peaks, With Love.
            </p>
          </div>
          <div className="mr-6 mb-10 ">
            <figure className="m-0 relative sm:w-[100px] ">
              <img
                src="/images/headermountain.png"
                alt=""
                width="226px"
                height="40px"
                className="m-0 p-0"
              />
            </figure>
            <div className="mb-16 absolute sm:-bottom-14  lg:bottom-4 sm:text-[]">
              {" "}
              <p className="flex items-center font-poppins font-medium lg:text-sm sm:text-[8px] leading-6 tracking-[0.16em] text-[#FFFFFF]">
                <span className="flex-1 h-[2px] bg-[#4A494B]"></span>
                <span className="px-2">100%</span>
                <span className="flex-1 h-[2px] bg-[#4A494B]"></span>
              </p>
              <p className="font-poppins font-medium sm:text-[8px] lg:text-sm leading-6 tracking-[0.16em] text-[#FFFFFF] text-center">
                Premium Mountain Roast
              </p>
            </div>
          </div>
        </div>
        <div className="absolute lg:bottom-0 sm:-bottom-[12vw] w-[100vw]  h-[9.5rem]  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1728 154"
            className="lg:w-[107.5rem] sm:w-[100vw] sm:h-[20vh] lg:h-[9.5rem] shrink-0 fill-white stroke-white stroke-[0.125rem] sm:block lg:block"
          >
            <path d="M863.5 1L0 153H1728L863.5 1Z" />
          </svg>

          {/* <div className="lg:absolute lg:top-[0.625rem] lg:left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[42.5rem] lg:h-[31.375rem] bg-[url('/images/headeryakbukCup.png')] bg-cover bg-no-repeat sm:absolute sm:left-[18%] sm:top-[80%] sm:w-[30rem] sm:h-[26rem]"></div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;

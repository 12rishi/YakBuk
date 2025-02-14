
import Navbar from "../../../../components/layout/Navbar";

const Hero = () => {
  return (
    <>
      <div
        className="w-full sm:w-full lg:h-[60rem] p-3 bg-cover bg-center bg-no-repeat sm:h-[40rem] sm:p-4 relative"
        style={{
          backgroundImage:
            "radial-gradient(26.81% 44.26% at 50.48% 11.56%, rgba(0, 0, 0, 0) 0%, rgba(0, 11, 0, 0.72) 0%),url('/images/headerbackground.png')",
        }}
      >
        <Navbar />
        {/* Hero Text Section */}
        <div className="lg:w-8/12 h-full align-middle justify-center mx-auto flex flex-col gap-[0.75rem] text-white sm:w-full sm:px-4 md:px-6">
          <div className="flex justify-center">
            <h2 className="self-stretch text-white font-poppins sm:text-[1.25rem] md:text-[1.5rem] lg:text-[2.25rem] text-center font-medium sm:leading-[2rem] lg:leading-[3.625rem] tracking-[0.27rem] sm:font-light lg:font-medium md:font-light ">
              Rare beans Bold flavors. Pure adventure
            </h2>
          </div>
          <div>
            <h3 className="self-stretch text-[#E6E5E6] text-center font-poppins sm:text-[0.9rem] md:text-[1rem] lg:text-[1rem] font-normal leading-[2rem] lg:w-full sm:w-full">
              The mountains may challenge you, but we’re here to comfort
              you—with rich coffee, soulful flavors, and a warm{" "}
              <span className="block text-center ">Himalayan welcome.</span>
            </h3>
          </div>
        </div>

        {/* Cup and Mountain Section */}
        <div className="lg:w-full sm:w-full h-auto align-middle items-center absolute bottom-0 flex justify-between px-4 sm:px-4 md:px-8">
          {/* Cup Section */}
          <div className="flex flex-col items-center sm:w-[120px] md:w-[150px]">
            <figure>
              <img
                src="/images/headerCup.png"
                alt="Coffee Cup"
                className="sm:w-[70px] sm:h-[60px] md:w-[90px] md:h-[80px]"
              />
            </figure>
            <p className="font-poppins font-medium text-[#FFFFFF] sm:text-[8px] md:text-[10px] leading-4 tracking-[0.16em] mt-1 text-center">
              From Peaks, With Love.
            </p>
          </div>

          {/* Mountain Section */}
          <div className="flex flex-col items-center  sm:mr-8 sm:w-[40px] md:w-[150px] lg:p-8 ">
            <figure className="relative sm:w-[50px] md:w-[150px]">
              <img
                src="/images/headermountain.png"
                alt="Mountain"
                className="w-full h-auto"
              />
            </figure>
            <div className="mt-2 text-center sm:mr-6 md:mr-0 lg:mr-0">
              <p className="flex items-center font-poppins font-medium text-[#FFFFFF] sm:text-[8px] md:text-[10px] leading-4 tracking-[0.16em]">
                <span className="flex-1 h-[1px] bg-[#4A494B]"></span>
                <span className="px-2">100%</span>
                <span className="flex-1 h-[1px] bg-[#4A494B]"></span>
              </p>
              <p className="font-poppins font-medium text-[#FFFFFF] sm:text-[8px] md:text-[10px] leading-4 tracking-[0.16em] mt-1 lg:w-full sm:w-[6rem] md:w-[10vw] ">
                Premium Mountain Roast
              </p>
            </div>
          </div>
        </div>

        {/* SVG and Yakbuk Cup Container */}
        <div className="absolute -bottom-2 w-full">
          {/* SVG */}
          <div className="w-full h-[9.5rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1728 154"
              className="w-full h-full fill-white stroke-white stroke-[0.125rem] lg:block md:hidden sm:hidden"
            >
              <path d="M863.5 1L0 153H1728L863.5 1Z" />
            </svg>
          </div>

          {/* Yakbuk Cup */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[url('/images/headeryakbukCup.png')] bg-cover bg-center bg-no-repeat mx-auto 
              sm:w-[10rem] sm:h-[9rem] 
              md:w-[25rem] md:h-[25rem] 
               lg:w-[42.5rem] lg:h-[31.375rem] lg:bottom-10"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Hero;

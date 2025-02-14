import { useState } from "react";
import CupWithLogo from "../../../../components/layout/CupWithLogo";

const ThirdSection = () => {
  const [number, setNumber] = useState<number>(1);

  const text = [
    {
      heading: "Everest Expresso",
      detail:
        "A strong bold espresso served in a cup of the highest quality beans from local farms",
    },
    {
      heading: "Yak Butter Coffee",
      detail:
        "A traditional Himalayan Brew, rich with butter and coffee, perfect for high-altitude energy",
    },
    {
      heading: "Sherpa's Hot Chocolate",
      detail:
        "Rich creamy hot chocolate made with high-quality cocoa and a touch of Himalayan salt.",
    },
    {
      heading: "Mountaintop Mocha",
      detail:
        "A smooth mocha made with espresso, chocolate, and a dash of Himalayan sea salt for a unique flavor.",
    },
  ];

  const increaseNumber = () => {
    setNumber((prev) => (prev >= text?.length ? 1 : prev + 1));
  };

  const decreaseNumber = () => {
    setNumber((prev) => (prev <= 1 ? text?.length : prev - 1));
  };

  return (
    <>
      <div className="relative w-full sm:h-screen lg:h-[1780px] sm:bg-[#084525] lg:bg-white  lg:mt-8 sm:py-16 lg:py-0 sm:mt-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1728 1268"
          className="w-full lg:h-full flex-shrink-0 fill-[#084525] stroke-black stroke-[1px] relative sm:h-[100vh] sm:hidden lg:block"
        >
          <path d="M110.584 120.22C63.5609 80.9933 17.2684 63.042 0 59.0393V1265L1728 1267V54.6755C1716.04 57.1772 1700.1 37.664 1677.69 37.664C1655.27 37.664 1657.27 12.6469 1639.83 5.6422C1622.4 -1.36255 1620.9 1.63949 1601.48 1.63949C1582.05 1.63949 1567.11 31.1596 1529.75 25.1555C1492.39 19.1515 1451.04 81.1935 1429.62 90.6999C1408.2 100.206 1348.93 145.237 1337.97 160.747C1329 172.755 1288.15 205.778 1264.74 212.783C1241.33 219.787 1205.96 199.273 1188.53 199.273C1171.09 199.273 1166.11 173.756 1146.69 167.252C1127.26 160.747 1093.89 153.743 1078.44 141.234C1063 128.726 1028.13 98.7053 1008.21 115.217C988.283 131.728 980.312 133.229 962.878 133.229C945.444 133.229 917.549 162.248 903.601 179.76C889.654 197.272 854.785 221.288 818.92 212.783C783.054 204.277 765.62 230.294 726.766 243.303C687.912 256.312 670.478 290.835 642.583 313.851C614.688 336.867 515.063 339.869 487.666 318.854C460.269 297.84 403.482 261.315 371.602 257.313C346.098 254.111 358.651 255.979 368.115 257.313C346.032 254.978 290.208 241.702 243.584 207.279C185.303 164.25 169.363 169.253 110.584 120.22Z" />
        </svg>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[95%] md:w-[80%] lg:w-full lg:h-[618px] -translate-y-1/2 mx-auto grid grid-cols-1 sm:grid-cols-2 place-items-center justify-between lg:px-9 sm:-translate-y-60">
          {/* Left Section */}
          <div className="flex flex-col items-start w-full sm:w-[80%] md:w-[70%] lg:w-[45%] gap-4 sm:gap-4">
            <p className="text-[#A76E50] font-poppins text-[25px] sm:text-[20px] md:text-[36px] font-normal leading-[58px] tracking-[4.32px]">
              Brewed{" "}
              <span className="block text-center sm:text-left">For You</span>
            </p>
            <div className="text-[#FFF] font-poppins text-[25px] sm:text-[20px] md:text-[36px] font-normal sm:leading-[45px] lg:leading-[58px] tracking-[4.32px]">
              <p>{text[number - 1]?.heading}</p>
            </div>
            <div className="text-[#E6E5E6] font-poppins text-[12px] sm:text-[12px] md:text-[16px] font-normal leading-[26px]">
              {text[number - 1]?.detail}
            </div>
            <button className="flex justify-center items-center gap-2 px-4 py-2 sm:px-2 sm:py-2 rounded-[24px] bg-[#A76E50] text-[#fff]">
              See All
            </button>
            <div className="flex items-center gap-2 lg:w-[167px] sm:w-[30vw] h-[59px]">
              {/* Left Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer"
                onClick={decreaseNumber}
              >
                <path
                  d="M19 12.5H5M5 12.5L12 19.5M5 12.5L12 5.5"
                  stroke="#A76E50"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* 1/4 */}
              <div className="flex items-center justify-center relative">
                <p className="text-white font-poppins text-[12px] sm:text-[12px] md:text-[18px] font-medium leading-[32px] tracking-[3.24px] absolute top-[-30px]">
                  {number}
                </p>
                <div className="w-[48px] h-[1px] bg-[#4A494B] rotate-[-45deg]"></div>
                <p className="text-[#4A494B] font-poppins text-[12px] sm:text-[12px] md:text-[18px] font-medium leading-[32px] tracking-[3.24px] absolute bottom-[-30px]">
                  4
                </p>
              </div>

              {/* Right Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 25 25"
                className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer"
                onClick={increaseNumber}
              >
                <path
                  d="M5.27148 12.5H19.2715M19.2715 12.5L12.2715 5.5M19.2715 12.5L12.2715 19.5"
                  stroke="#A76E50"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-[200px] sm:hidden md:block lg:block h-[200px] sm:w-[20vw] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[511.893px] lg:h-[511.893px] flex-shrink-0 bg-[url('/images/blankcup.png')] bg-cover relative mt-8 sm:mt-0">
            <div className="w-[80px] h-[80px] md:block sm:hidden lg:block sm:w-[120px] sm:h-[120px] md:w-[172.065px] md:h-[172.065px] flex-shrink-0 bg-[url('/images/logo.png')] bg-lightgray bg-cover bg-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <CupWithLogo val={"home"} />

          {/* Background Beans Image */}
          <div className="w-[200px] h-[200px] sm:hidden lg:block md:hidden sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[716px] lg:h-[606px] absolute right-0 -z-10 flex-shrink-0 bg-[url('/images/beans.png')] bg-cover bg-center bg-no-repeat sm:right-20"></div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;

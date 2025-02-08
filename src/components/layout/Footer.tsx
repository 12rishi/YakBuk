import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-[1728px] h-[500px] flex-shrink-0 bg-[#052E19]  flex flex-col justify-center align-middle items-center p-4">
      <div className="flex justify-between w-10/12 items-center align-middle  ">
        <div className="flex flex-col items-start w-[245px] gap-[15px]">
          <h4 className="self-stretch text-[#FFF] font-[Poppins] text-[24px] font-medium leading-[39px]">
            Contact
          </h4>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px] fill-none"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#FFF] text-center font-[Poppins] text-[16px] font-normal leading-[26px] ml-2">
              +977 123-456-789
            </span>
          </p>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px]"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.5 18L14.8571 12M9.14286 12L2.50003 18M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-[#FFF] text-center font-[Poppins] text-[16px] font-normal leading-[26px] ml-2">
              info@yakBuckCoffee.com
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="text-[#FFF] text-center font-[Poppins] text-[20px] font-normal leading-[32px] tracking-[1.6px]">
            Namche Bazar, Solukhumbu
          </h5>
          <h5 className="text-[#FFF] text-center font-[Poppins] text-[20px] font-normal leading-[32px] tracking-[1.6px] items-center">
            Nepal
          </h5>
          <div className="w-[120px] h-[120px] flex-shrink-0 bg-[url('/images/logo.png')]  bg-center bg-cover"></div>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="self-stretch text-[#FFF] text-center font-[Poppins] text-[24px] font-medium leading-[39px]">
            {" "}
            Follow Us
          </h4>
          <div className="flex">
            <FaInstagram size="36" className=" text-white" />
            <FiFacebook size="36" className="text-white" />
          </div>
        </div>
      </div>
      <div className="flex w-[100vw] items-center align-middle gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[493px] h-[76px] flex-shrink-0 fill-black"
          viewBox="0 0 493 76"
          fill="none"
        >
          <path
            d="M104.653 44.2437C81.1628 47.7502 25.0967 66.8756 0 76L103.148 48.7095L126.487 55.8215L235.658 12.7356L251.921 23.9826L308.539 3.63874L376.451 42.5071L401.899 35.7258L458.818 63.099L493 75.9173L400.544 32.7486C395.775 34.4577 385.064 38.0744 380.366 38.8683C375.668 39.6622 332.23 13.2869 311.099 0C292.226 7.16721 254.21 21.452 253.126 21.2535C252.041 21.0551 241.029 14.1139 235.658 10.6681L128.294 52.4309C126.126 52.6955 111.63 47.0831 104.653 44.2437Z"
            fill="black"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[334.5px] h-[59.314px] flex-shrink-0 fill-black"
          viewBox="0 0 335 60"
          fill="none"
        >
          <path
            d="M114.63 31.1687C88.9004 34.3521 27.4893 51.716 0 60L112.981 35.2231L138.546 41.6801L258.125 2.56259L275.938 12.7737L334.5 55L277.257 10.296C276.07 10.1158 264.007 3.81395 258.125 0.685547L140.525 38.6018C138.15 38.842 122.272 33.7465 114.63 31.1687Z"
            fill="black"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[595px] h-[117px] flex-shrink-0 fill-black mb-9"
          viewBox="0 0 595 117"
        >
          <path d="M126.306 68.1121C97.9551 73.5101 30.2891 102.953 0 117L124.488 74.9869L152.657 85.9358L284.415 19.6061L304.042 36.9206L372.375 5.60174L454.337 65.4385L485.05 54.9989L553.746 97.1393L595 116.873L483.415 50.4157C477.66 53.0468 464.732 58.6146 459.062 59.8368C453.392 61.059 400.968 20.4548 375.464 0C352.687 11.0337 306.805 33.0248 305.496 32.7193C304.188 32.4137 290.897 21.728 284.415 16.4233L154.838 80.716C152.221 81.1234 134.726 72.4831 126.306 68.1121Z" />
        </svg>
      </div>
      <div className="flex justify-between w-11/12 mx-auto ">
        <p className="text-[#929292] text-center font-[Poppins] text-[16px] font-normal leading-[26px]">
          &copy; 2025 Yak Buck Coffee.All rignts reserved
        </p>
        <p className="text-white text-center font-[Poppins] text-[16px] font-normal leading-[26px] flex justify-between items-center ">
          Designed and Developed By{" "}
          <div className="w-[42px] h-[13.059px] bg-[url('/images/webx.png')] bg-gray-300 bg-cover bg-center ml-2"></div>
        </p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import CupWithLogo from "../../layout/CupWithLogo";
import { Link, Element } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Items {
  itemName: string;
  itemDetail: string;
  itemPrice: string;
}

interface MenuItems {
  heading: string;
  paragraph: string;
  items: Items[];
}

function moveUpward() {
  window.scrollTo(0, 0);
}

const MenuOverview: React.FC<{ menuItems: MenuItems[] }> = ({ menuItems }) => {
  const menuOverView = [
    "Yak Buck Special",
    "Coffee",
    "Espresso",
    "Iced Blended Drinks",
    "Snacks & Pastries",
  ];

  // Settings for the carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ChevronLeft color="black" className="z-20" />,
    nextArrow: <ChevronRight color="black" className="z-20" />,
  };

  return (
    <div className="lg:flex w-[100vw] justify-between mt-6 mb-7 px-11 relative sm:flex-col">
      {" "}
      <div className="sticky sm:top-0  lg:top-6 h-max lg:w-[10%] z-20 sm:w-full lg:shadow-none sm:shadow sm:shadow-black bg-[#ffff] lg:p-0 sm:p-4 ">
        <h5 className="overflow-hidden text-black text-ellipsis self-stretch font-poppins text-[1.25rem] font-medium leading-[2rem] line-clamp-1 ">
          Menu Overview
        </h5>
        {menuOverView.map((val, index) => (
          <Link
            to={index}
            smooth={true}
            duration={500}
            key={index}
            className="w-[9.94rem] sm:hidden lg:block overflow-hidden cursor-pointer text-black text-ellipsis self-stretch font-poppins text-[1rem] font-normal leading-[1.625rem] line-clamp-1"
          >
            {val}
          </Link>
        ))}
        <div className="sm:grid grid-cols-3 lg:hidden gap-6 w-auto">
          {menuOverView.map((val, index) => (
            <Link
              to={index}
              smooth={true}
              duration={500}
              key={index}
              className=" hidden sm:block  overflow-hidden cursor-pointer text-black text-ellipsis self-stretch font-poppins w-full text-[1rem] font-normal leading-[1.625rem] line-clamp-1"
            >
              {val}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 justify-items-center w-[100%]">
        {menuItems.map((data, index) => (
          <Element name={index} key={index}>
            <div className="w-[70vw] h-[40.81rem] flex flex-col items-center lg:mt-2.5 sm:mt-[4rem] ">
              <h2 className="self-stretch text-center text-[#A76E50] font-poppins text-[2.25rem] font-normal leading-[3.625rem] tracking-[0.27rem] w-full">
                {data.heading}
              </h2>
              <div className="w-[2.25rem] h-[0.125rem] bg-[#A76E50] text-white">
                .
              </div>
              <p className="text-black mt-4 text-center font-poppins text-[1rem] font-light leading-[1.625rem] lg:w-[56.81rem] h-[1.625rem] sm:w-[300px]">
                {data.paragraph}
              </p>

              {/* Carousel for small screens */}
              <div className="lg:hidden    w-full mt-14">
                <Slider {...carouselSettings}>
                  {data.items.map((val, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center p-4 mx-2 bg-y-300 bg-[#084525] justify-center " // Add mx-2 for horizontal gap
                    >
                      <div className="w-full flex  justify-center">
                        <CupWithLogo val={"menu"} />
                      </div>
                      <h3 className="self-stretch text-center text-[#ffff] font-poppins text-[1.75rem] font-medium leading-[2.813rem] ">
                        {val.itemName}
                      </h3>
                      <p className="text-center  h-[4.875rem] text-[#ffff] font-poppins text-[1rem] font-light leading-[1.625rem] w-full">
                        {val?.itemDetail}
                      </p>
                      <h3 className="self-stretch text-center text-[#0D713D] font-poppins text-[1.75rem] font-medium leading-[2.813rem]">
                        {val?.itemPrice}
                      </h3>
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Grid layout for large screens */}
              <div className="sm:hidden md:hidden lg:grid w-full grid-cols-3 items-center gap-12 mt-2">
                {data.items.map((val, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col w-[26.38rem] h-[40.81rem] items-center"
                  >
                    <CupWithLogo />
                    <h3 className="self-stretch text-center text-[#0D0D0D] font-poppins text-[1.75rem] font-medium leading-[2.813rem]">
                      {val.itemName}
                    </h3>
                    <p className="text-center w-[16.31rem] h-[4.875rem]  lg:text-[#616062] font-poppins text-[1rem] font-normal leading-[1.625rem]">
                      {val?.itemDetail}
                    </p>
                    <h3 className="self-stretch text-center text-[#0D713D] font-poppins text-[1.75rem] font-medium leading-[2.813rem]">
                      {val?.itemPrice}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </Element>
        ))}
      </div>
      <button
        onClick={moveUpward}
        className="lg:fixed bottom-5 lg:right-5 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300
    sm:bottom-0 sm:left-1/2 sm:transform sm:-translate-x-1/5 
    md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 sm:hidden "
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

export default MenuOverview;

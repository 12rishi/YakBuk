import React from "react";
import CupWithLogo from "../../layout/CupWithLogo";
import { Link, Element } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

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

  return (
    <div className="flex w-[100vw] justify-between mt-6 gap-2.25 mb-7 px-11 relative">
      <div className="sticky top-6 h-max">
        <h5 className="overflow-hidden text-black text-ellipsis self-stretch font-poppins text-[1.25rem] font-medium leading-[2rem] line-clamp-1">
          Menu Overview
        </h5>
        {menuOverView.map((val, index) => (
          <Link
            to={index}
            smooth={true}
            duration={500}
            key={index}
            className="w-[9.94rem] overflow-hidden cursor-pointer text-black text-ellipsis self-stretch font-poppins text-[1rem] font-normal leading-[1.625rem] line-clamp-1"
          >
            {val}
          </Link>
        ))}
      </div>

      <div className="mx-auto grid grid-cols-1">
        {menuItems.map((data, index) => (
          <Element name={index} key={index}>
            <div className="w-[79.38rem] h-[40.81rem] flex flex-col items-center mt-2.5">
              <h2 className="self-stretch text-center text-[#A76E50] font-poppins text-[2.25rem] font-normal leading-[3.625rem] tracking-[0.27rem]">
                {data.heading}
              </h2>
              <div className="w-[2.25rem] h-[0.125rem] bg-[#A76E50] text-white">
                .
              </div>
              <p className="text-black mt-4 text-center font-poppins text-[1rem] font-light leading-[1.625rem] w-[56.81rem] h-[1.625rem]">
                {data.paragraph}
              </p>
              <div className="w-full grid grid-cols-3 items-center mt-2">
                {data.items.map((val, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-[26.38rem] h-[40.81rem] items-center"
                  >
                    <CupWithLogo />
                    <h3 className="self-stretch text-center text-[#0D0D0D] font-poppins text-[1.75rem] font-medium leading-[2.813rem]">
                      {val.itemName}
                    </h3>
                    <p className="text-center w-[16.31rem] h-[4.875rem] text-[#616062] font-poppins text-[1rem] font-normal leading-[1.625rem]">
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
        className="fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

export default MenuOverview;

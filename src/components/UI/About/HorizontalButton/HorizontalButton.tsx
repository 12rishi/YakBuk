import React from "react";

const HorizontalButton = () => {
  return (
    <>
      <div className="w-[238px] h-[553px] flex-shrink-0 rounded-[2000px] bg-[#084525] relative">
        <div className="w-[181px] h-[57px] absolute left-1/2 transform -translate-x-1/2 top-1/4">
          <h5 className="text-white text-center font-[Poppins] text-[20px] font-medium leading-[32px]">
            Nima Sherpa{" "}
            <span className="block text-sm font-light">
              Chief Marketing Officer
            </span>
          </h5>
        </div>
        <div className="w-[238px] h-[349px] flex-shrink-0 rounded-[2000px] bg-[url('/images/cupholding.jpeg')] bg-center bg-cover bg-no-repeat absolute bottom-0"></div>
      </div>
    </>
  );
};

export default HorizontalButton;

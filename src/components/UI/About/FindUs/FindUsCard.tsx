import React from "react";

const FindUsCard = () => {
  return (
    <div className="w-full h-[37.5rem] flex-shrink-0 bg-[#084525] flex flex-col items-center justify-center mt-36">
      <div className="grid grid-cols-3 items-center max-w-[108rem] w-full">
        <div className="w-[24.56rem] h-[26.56rem] flex-shrink-0 bg-[url('/images/coffeebeanAbout.png')] bg-lightgray bg-[length:221.239%_128.235%] bg-no-repeat bg-[position:-0.234px_0px]"></div>
        <div className="flex items-center flex-col gap-4 text-center">
          <h3 className="text-white font-[Poppins] text-[1.75rem] font-medium leading-[2.8125rem]">
            Be part of the Yak Buck family.
          </h3>
          <p className="w-[39.75rem] text-white font-[Poppins] text-[1rem] font-normal leading-[1.625rem]">
            Experience the perfect blend of coffee and mountain hospitality
          </p>
          <button className="inline-flex px-[1.375rem] py-[0.75rem] justify-center items-center gap-[0.625rem] rounded-[1.5rem] bg-[#A76E50]">
            Find Us
          </button>
        </div>
        <div className="w-[36.75rem] h-[30.5rem] flex-shrink-0 bg-[url('/images/coffeeBagAbout.png')] bg-lightgray bg-center bg-cover bg-no-repeat"></div>
      </div>
    </div>
  );
};

export default FindUsCard;

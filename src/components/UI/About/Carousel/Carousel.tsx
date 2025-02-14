import React from "react";

const Carousel: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="grid grid-rows-2 w-full h-full py-10 justify-items-center ">
      <div
        className="w-[150px] h-[210px]   flex-shrink-0 bg-center bg-cover  bg-no-repeat "
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      ></div>
      <h5 className="text-white text-center font-[Poppins] text-[16px] font-medium leading-[28px]">
        {data.name}
        <span className="block text-xs  font-light text-[#B0AFB1]">
          {data?.role}
        </span>
      </h5>
    </div>
  );
};

export default Carousel;

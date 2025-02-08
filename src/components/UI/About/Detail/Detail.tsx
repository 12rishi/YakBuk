import React from "react";

const Detail = () => {
  return (
    <div className="flex flex-col items-center gap-[17px] w-[187px] h-[297px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[40px] h-[40px]"
        viewBox="0 0 41 40"
        fill="none"
      >
        <path
          d="M26.2148 18.5713C26.2148 17.8136 25.9138 17.0868 25.378 16.551C24.8422 16.0152 24.1155 15.7142 23.3577 15.7142H9.07199C8.31423 15.7142 7.5875 16.0152 7.05168 16.551C6.51586 17.0868 6.21484 17.8136 6.21484 18.5713V32.857C6.21484 34.3726 6.81688 35.826 7.88852 36.8977C8.96016 37.9693 10.4136 38.5713 11.9291 38.5713H20.5006C22.0161 38.5713 23.4695 37.9693 24.5412 36.8977C25.6128 35.826 26.2148 34.3726 26.2148 32.857M26.2148 18.5713V32.857M26.2148 18.5713H27.6434C29.5378 18.5713 31.3546 19.3239 32.6942 20.6634C34.0337 22.003 34.7863 23.8198 34.7863 25.7142C34.7863 27.6086 34.0337 29.4254 32.6942 30.7649C31.3546 32.1045 29.5378 32.857 27.6434 32.857H26.2148M11.9291 1.42847V7.14275M20.5006 1.42847V7.14275"
          stroke="#0D713D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <h4 className="text-center text-black font-medium text-[24px] leading-[39px] font-[Poppins] self-stretch">
        Quality First
      </h4>
      <p className="text-center text-[#303031] font-normal text-[14px] leading-[23px] font-[Poppins] self-stretch">
        We are committed to delivering the highest quality coffee and products,
        ensuring that every cup and experience meets the highest standards for
        our customers.
      </p>
    </div>
  );
};

export default Detail;

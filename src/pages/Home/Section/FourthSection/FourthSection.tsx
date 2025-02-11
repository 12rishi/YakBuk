import React from "react";

const FourthSection = () => {
  return (
    <>
      <div className="w-[100vw] lg:h-[400px] bg-[#0D713D] -mt-[10rem] relative flex justify-center items-center sm:h-[300px]">
        <div className="lg:w-[628px] lg:h-[556px] relative flex-shrink-0 bg-[url('/images/thirdsectioncup.png')] bg-lightgray bg-cover bg-center sm:w-[368px] sm:h-[336px]">
          <div className="inline-flex p-8 lg:w-[315px] sm:w-[260px] h-[190px] justify-center items-center gap-[10px] rounded-[16px] border border-[0.5px] absolute border-gray-500 bg-white/10 backdrop-blur-[10px] top-1/5 left-5/7">
            <p className="w-[315px] h-[180px] text-center text-[#E6E5E6] font-[Poppins] lg:text-[16px] sm:text-[10px] font-[500px] leading-[32px]">
              Here in the heart of Namche, you’re never just a customer—you’re a
              traveler, a storyteller, and a friend. Let’s share a cup and a
              moment together.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthSection;

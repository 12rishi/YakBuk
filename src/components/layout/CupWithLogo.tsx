import React from "react";

const CupWithLogo: React.FC<{ val: string }> = ({ val }) => {
  return (
    <>
      {val === "home" ? (
        <div className="lg:w-[357px] lg:hidden sm:block md:hidden lg:h-[357px] sm:w-[200px] sm:h-[200px] flex-shrink-0 bg-[url('/images/blankcup.png')] bg-cover relative ">
          <div className="lg:w-[120px] lg:h-[120px] lg:hidden sm:block md:hidden sm:w-[60px] sm:h-[60px] flex-shrink-0 bg-[url('/images/logo.png')] bg-lightgray bg-cover bg-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      ) : (
        <div className="lg:w-[357px] lg:h-[357px] sm:w-[200px] sm:h-[200px] flex-shrink-0 bg-[url('/images/blankcup.png')] bg-cover relative ">
          <div className="lg:w-[120px] lg:h-[120px] sm:w-[60px] sm:h-[60px] flex-shrink-0 bg-[url('/images/logo.png')] bg-lightgray bg-cover bg-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      )}
    </>
  );
};

export default CupWithLogo;

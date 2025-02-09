import React from "react";

const CupWithLogo = () => {
  return (
    <div className="w-[357px] h-[357px] flex-shrink-0 bg-[url('/images/blankcup.png')] bg-cover relative">
      <div className="w-[120px] h-[120px] flex-shrink-0 bg-[url('/images/logo.png')] bg-lightgray bg-cover bg-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default CupWithLogo;

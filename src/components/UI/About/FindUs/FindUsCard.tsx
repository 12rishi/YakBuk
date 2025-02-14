const FindUsCard = () => {
  return (
    <div className="w-full h-auto flex-shrink-0 bg-[#084525] flex flex-col items-center justify-center mt-36 py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 items-center max-w-[108rem] w-full gap-8 md:gap-0">
        <div className="hidden lg:block w-full h-[26.56rem] flex-shrink-0 bg-[url('/images/coffeebeanAbout.png')] bg-lightgray bg-[length:221.239%_128.235%] bg-no-repeat bg-[position:-0.234px_0px] bg-center bg-cover"></div>
        <div className="flex items-center flex-col gap-4 text-center px-4 relative z-10">
          <h3 className="text-white font-[Poppins] text-[1.5rem] md:text-[1.75rem] font-medium leading-[2.5rem] md:leading-[2.8125rem]">
            Be part of the Yak Buck family.
          </h3>
          <p className="w-full md:w-[39.75rem] text-white font-[Poppins] text-[0.9rem] md:text-[1rem] font-normal leading-[1.5rem] md:leading-[1.625rem]">
            Experience the perfect blend of coffee and mountain hospitality
          </p>
          <button className="inline-flex px-6 py-3 justify-center items-center gap-2 rounded-[1.5rem] bg-[#A76E50] text-[#fff] text-sm md:text-base">
            Find Us
          </button>
        </div>
        <div className="block md:hidden sm:hidden w-full h-[20rem] bg-[url('/images/coffeeBagAbout.png')] bg-lightgray bg-center bg-cover bg-no-repeat absolute bottom-0"></div>
        <div className="sm:hidden md:hidden lg:block  w-full h-[30.5rem] flex-shrink-0 bg-[url('/images/coffeeBagAbout.png')] bg-lightgray bg-center bg-cover bg-no-repeat"></div>
      </div>
    </div>
  );
};

export default FindUsCard;

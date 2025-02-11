const SeventhSection = () => {
  return (
    <>
      <div className="w-[100vw] relative lg:h-[500px] sm:h-[300px] flex-shrink-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),url('/images/map.png')] bg-cover bg-center bg-no-repeat mt-36">
        <div className="lg:w-[1728px] h-[190px] flex-shrink-0 -top-4 absolute sm:hidden md:hidden lg:block sm:w-[100vw] md:w-[100vw]  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full sm:hidden lg:block md:block"
            viewBox="0 0 1728 190"
            fill="none"
          >
            <path
              d="M863.5 189.526L0 0.000183105H1728L863.5 189.526Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="absolute inset-0 flex items-center justify-center lg:top-1/2 sm:top-2/4 sm:left-30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[30px] h-[30px] flex-shrink-0"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M15 16.25C17.0711 16.25 18.75 14.5711 18.75 12.5C18.75 10.4289 17.0711 8.75 15 8.75C12.9289 8.75 11.25 10.4289 11.25 12.5C11.25 14.5711 12.9289 16.25 15 16.25Z"
              stroke="#0D713D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 27.5C20 22.5 25 18.0228 25 12.5C25 6.97715 20.5228 2.5 15 2.5C9.47715 2.5 5 6.97715 5 12.5C5 18.0228 10 22.5 15 27.5Z"
              stroke="#0D713D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="w-[2px] lg:h-[170px] sm:h-[100px] bg-[#0D713D] absolute bottom-0 top-4/8"></div>
        </div>
      </div>
    </>
  );
};

export default SeventhSection;

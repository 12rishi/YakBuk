import React from "react";

interface VentureData {
  image: string | null;
  heading: string;
  paragraph: string;
  content: string[];
}

const Card: React.FC<{ ventureData: VentureData[] }> = ({ ventureData }) => {
  return (
    <div className="grid grid-rows-2 gap-16 w-full px-4">
      {ventureData.map((data: VentureData, index) => (
        <div
          key={index}
          className={`flex flex-wrap items-center lg:justify-evenly sm:justify-center gap-6 w-full p-4 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div
            className="w-[85vw] sm:w-[320px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[500px] rounded-full bg-lightgray bg-center bg-cover bg-no-repeat bg-[#D9D9D9]"
            style={{ backgroundImage: `url(${data.image})` }}
          ></div>

          {/* Text Content */}
          <div className="flex flex-col items-center text-center max-w-[450px]">
            <h2 className="text-[#A76E50] font-poppins text-lg sm:text-xl md:text-2xl font-semibold leading-tight tracking-[1px]">
              {data.heading}
            </h2>
            <div className="w-[30px] h-[1px] bg-[#A76E50] my-3"></div>
            <p className="text-[#303031] font-poppins text-xs sm:text-sm md:text-base leading-[18px] sm:leading-[22px] px-2">
              {data.paragraph}
            </p>

            {/* List Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {data.content.map((val: string, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 35 35"
                    fill="none"
                    className="w-[16px] sm:w-[20px] h-[16px] sm:h-[20px]"
                  >
                    <g clipPath="url(#clip0_154_1682)">
                      <path
                        d="M10.6797 17.7278L24.8203 17.9347M24.8203 17.9347L17.6466 24.9016M24.8203 17.9347L17.8534 10.7609"
                        stroke="#0D713D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_154_1682">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="matrix(-0.696686 -0.717376 -0.717376 0.696686 34.7188 18.0795)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-[#000] font-poppins text-xs sm:text-sm leading-[16px] sm:leading-[20px]">
                    {val}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="flex items-center justify-center gap-2 mt-5 px-5 py-2.5 rounded-[20px] bg-[#0B5B32] hover:bg-[#094726] transition duration-300">
              <button className="flex items-center gap-2 text-white text-xs sm:text-sm">
                Visit our site
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 sm:w-5 h-4 sm:h-5"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M7.71875 17.7375L17.7188 7.73749M17.7188 7.73749V17.7375M17.7188 7.73749H7.71875"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

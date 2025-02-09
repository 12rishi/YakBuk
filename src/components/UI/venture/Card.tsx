import React from "react";
interface VentureData {
  image: string | null;
  heading: string;
  paragraph: string;
  content: string[];
}
const Card: React.FC<{ ventureData: VentureData[] }> = ({ ventureData }) => {
  return (
    <>
      <div className="flex flex-col gap-16">
        {ventureData.map((data: VentureData, index) => (
          <div className="flex w-[100vw] items-center justify-center mt-10">
            <div
              className={`inline-flex items-center align-middle gap-72 w-[1189px] h-[622px] ${
                index == 1 && "flex-row-reverse"
              } `}
            >
              <div
                className="w-[500px] h-[621.6px] rounded-[2000px]  bg-lightgray bg-center bg-cover bg-no-repeat bg-[#D9D9D9]"
                style={{ backgroundImage: `url(${data.image})` }}
              ></div>
              <div className="flex flex-col items-center gap-4">
                <h2 className="w-[365px] text-[#A76E50] text-center font-poppins text-[36px] font-normal leading-[58px] tracking-[4.32px]">
                  {data.heading}
                </h2>
                <div className="w-[36px] h-[1px] bg-[#A76E50] mb-6"></div>
                <p className="self-stretch text-[#303031] text-center font-poppins text-[16px] font-normal leading-[26px] w-[517px] h-[104px] mb-4">
                  {data.paragraph}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {data.content.map((val: string, index) => (
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 35 35"
                        fill="none"
                        className="w-[24px] h-[24px]"
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
                      <p className="text-[#000] font-poppins text-[14px] font-normal leading-[23px]">
                        {val}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex text-[#fff] items-center justify-center gap-2.5 px-6 py-3.5 rounded-[24px] bg-[#0B5B32]">
                  <button className="flex items-center gap-2">
                    Visit our site
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M7.71875 17.7375L17.7188 7.73749M17.7188 7.73749V17.7375M17.7188 7.73749H7.71875"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      ;
    </>
  );
};

export default Card;

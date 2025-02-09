import React from "react";

interface Data {
  name: string | null;
  role: string | null;
  image: string | null;
}

const HorizontalButton: React.FC<{ horizontalButtonData: Data[] }> = ({
  horizontalButtonData,
}) => {
  return (
    <>
      <div className="mt-40 w-full flex flex-col items-center">
        <div className="text-center">
          <h4 className="text-[#A76E50] font-poppins text-xl font-normal leading-[39px] tracking-[2.88px]">
            Meet
          </h4>
          <h3 className="text-[#A76E50] font-poppins text-4xl font-normal leading-[58px] tracking-[4.32px]">
            Our Team
          </h3>
          <div className="w-[36px] h-[1px] bg-[#A76E50] mx-auto mt-2"></div>
        </div>

        <div className="flex w-8/12 mx-auto gap-4 mt-32 justify-center">
          {horizontalButtonData.map((data: Data, index) => (
            <div
              key={index}
              className={`w-[238px] h-[553px] flex-shrink-0 rounded-[2000px] bg-[#084525] relative ${
                index === 1 || index === 3 ? "top-[80px]" : ""
              }`}
            >
              <div className="w-[181px] h-[57px] absolute left-1/2 transform -translate-x-1/2 top-10">
                <h5 className="text-white text-center font-[Poppins] text-[20px] font-medium leading-[32px]">
                  {data.name}
                  <span className="block text-sm font-light text-[#B0AFB1]">
                    {data?.role}
                  </span>
                </h5>
              </div>
              <div
                className="w-[238px] h-[349px] flex-shrink-0 rounded-[2000px] bg-center bg-cover bg-no-repeat absolute bottom-0"
                style={{
                  backgroundImage: `url(${data.image})`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HorizontalButton;

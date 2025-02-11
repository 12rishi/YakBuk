import React from "react";

interface OurValuesSection {
  image: any | null;
  header: string | null;
  paragraph: string | null;
}
const Detail: React.FC<{ ourValuesSec: OurValuesSection[] }> = ({
  ourValuesSec,
}) => {
  return (
    <>
      <div className="w-[100vw] flex flex-col items-center mt-8">
        <h4 className="text-[#A76E50] text-center font-poppins text-xl font-normal leading-[39px] tracking-[2.88px]">
          Our
        </h4>
        <h3 className="text-[#A76E50] font-poppins text-4xl font-normal leading-[58px] tracking-[4.32px]">
          Values
        </h3>
        <div className="w-[36px] h-[1px] bg-[#A76E50]"></div>
      </div>
      <div className="w-[100vw] flex justify-between px-4 py-4 sm:w-[100vw]">
        {ourValuesSec.map((value: OurValuesSection, index) => (
          <>
            <>
              <div className="flex flex-col items-center gap-[17px] w-[187px] h-[297px]">
                <div
                  className="w-[40px] h-[60px] bg-cover p-5 "
                  style={{
                    backgroundImage: `url(${value.image})`,
                  }}
                ></div>
                <h4 className="text-center text-black font-medium text-[24px] leading-[39px] font-[Poppins] self-stretch">
                  {value.header}
                </h4>
                <p className="text-center text-[#303031] font-normal text-[14px] leading-[23px] font-[Poppins] self-stretch">
                  {value.paragraph}
                </p>
              </div>
            </>
            ;
          </>
        ))}
      </div>
    </>
  );
};

export default Detail;

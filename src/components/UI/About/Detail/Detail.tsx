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
      <div className="w-full flex flex-col items-center sm:mt-8 md:mt-10 lg:mt-8 px-4">
        <h4 className="text-[#A76E50] text-center font-poppins text-xl font-normal leading-[39px] tracking-[2.88px]">
          Our
        </h4>
        <h3 className="text-[#A76E50] font-poppins text-4xl font-normal leading-[58px] tracking-[4.32px]">
          Values
        </h3>
        <div className="w-[36px] h-[1px] bg-[#A76E50]"></div>
      </div>
      <div className="w-full lg:flex lg:flex-wrap lg:justify-between lg:gap-4 px-4 py-4 sm:w-full  sm:grid sm:grid-rows-1 sm:gap-2 sm:justify-items-center md:grid md:grid-cols-2  ">
        {ourValuesSec.map((value: OurValuesSection, index) => (
          <div
            key={index}
            className="flex flex-col items-center lg:gap-[17px] w-[187px] lg:h-[297px] sm:h-[250px] "
          >
            <div
              className="lg:w-[50px] lg:h-[50px] bg-center bg-cover p-5"
              style={{
                backgroundImage: `url(${value.image})`,
              }}
            ></div>
            <h4 className="text-center text-black font-medium text-[24px] leading-[39px] font-[Poppins] self-stretch">
              {value.header}
            </h4>
            <p className="text-center text-[#303031] font-normal text-[14px] leading-[23px] font-[Poppins] lg:self-stretch lg:w-[200px] sm:w-[300px]">
              {value.paragraph}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Detail;

import { DiVim } from "react-icons/di";
import AboutDetailType from "../../../../types/type";

const People: React.FC<{ detailArr: AboutDetailType[] }> = ({ detailArr }) => {
  return (
    <div className="h-auto w-full lg:mt-4 sm:mt-10">
      {detailArr?.map((detail: AboutDetailType, index) => (
        <div
          key={index}
          className={`flex w-[100vw] items-center align-middle justify-evenly sm:gap-[40px] lg:gap-[76px] text-[#303031] sm:mt-14 ${
            index === 0 || index === 2
              ? "lg:flex-row-reverse sm:flex-col md:flex-row-reverse"
              : "lg:flex-row sm:flex-col md:flex-row"
          }`}
        >
          {/* Image Section */}
          <div
            className={`lg:w-[500px] lg:h-[621.6px] flex-shrink-0 lg:rounded-[2000px] bg-cover bg-center sm:w-[200px] sm:h-[200px] md:w-[400px] md:h-[400px] sm:rounded-[200px] sm:order-1 ${
              index == 0 ? "relative" : ""
            }`}
            style={{
              backgroundImage: `url(${detail.image})`,
              backgroundColor: "#D9D9D9",
            }}
          >
            {index == 0 && (
              <div className="lg:w-[361.807px] z-40 sm:w-[100px] sm:h-[100px] lg:h-[288.023px] bg-[url('/images/aboutBlackCoffee.png')] bg-lightgray bg-no-repeat bg-cover bg-center  absolute sm:translate-y-1/2 bottom-4 lg:-bottom-9 lg:-translate-y-0  left-1/2 transform -translate-x-1/2 "></div>
            )}
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-center sm:gap-0 sm:order-2">
            <h2 className="text-[#A76E50] text-center font-[Poppins] sm:text-sm lg:text-[36px] md:text-[30px] font-normal sm:leading-[10px] md:leading-[60px] lg:leading-[98px]  lg:tracking-[4.32px]  sm:tracking-[2px]">
              {detail.name}
            </h2>
            <h4 className="text-[#A76E50] font-[Poppins] sm:text-sm lg:text-[36px] md:text-[28px] font-normal md:leading-[29px] lg:leading-[39px] lg:tracking-[2.88px] sm:tracking-[2px] md:tracking-[2.88px]">
              {detail.role}
            </h4>
            <div className="w-[36px] h-[1px] bg-[#A76E50]"></div>

            <p className="text-[#303031] text-center font-[Poppins] lg:text-[16px] font-normal sm:leading-[20px] lg:leading-[26px] md:leading-[26px] lg:w-[440px] sm:mt-2 lg:mt-12 sm:w-[300px] sm:text-sm md:text-lg md:w-[400px]">
              {detail.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default People;

import { DiVim } from "react-icons/di";
import AboutDetailType from "../../../../types/type";

const People: React.FC<{ detailArr: AboutDetailType[] }> = ({ detailArr }) => {
  return (
    <div className="h-auto w-full lg:mt-4 sm:mt-10">
      {detailArr?.map((detail: AboutDetailType, index) => (
        <div
          key={index}
          className={`flex w-[100vw] items-center align-middle justify-evenly sm:gap-[40px] lg:gap-[76px] text-[#303031] ${
            index === 1 ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="flex flex-col items-center sm:gap-0">
            <h2 className="text-[#A76E50] text-center font-[Poppins] sm:text-[12px] lg:text-[36px] font-normal sm:leading-[10px] lg:leading-[98px] lg:tracking-[4.32px] sm:tracking-[2px]">
              {detail.name}
            </h2>
            <h4 className="text-[#A76E50] font-[Poppins] sm:text-[8px] lg:text-[36px] font-normal lg:leading-[39px] lg:tracking-[2.88px] sm:tracking-[2px]">
              {detail.role}
            </h4>
            <div className="w-[36px] h-[1px] bg-[#A76E50]"></div>

            <p className="text-[#303031] text-center font-[Poppins] lg:text-[16px] font-normal leading-[26px] lg:w-[440px] mt-12 sm:w-[200px] sm:text-[8px]">
              {detail.detail}
            </p>
          </div>
          <div
            className={`lg:w-[500px] lg:h-[621.6px] flex-shrink-0 lg:rounded-[2000px] bg-cover bg-center sm:w-[200px] sm:h-[200px] sm:rounded-[200px] ${
              index == 0 ? "relative" : ""
            }`}
            style={{
              backgroundImage: `url(${detail.image})`,
              backgroundColor: "#D9D9D9",
            }}
          >
            {index == 0 && (
              <div className="lg:w-[361.807px] sm:w-[100px] sm:h-[100px] lg:h-[288.023px] bg-[url('/images/aboutBlackCoffee.png')] bg-lightgray bg-no-repeat bg-cover bg-center lg:bg-[position:-0.174px_-66.511px] absolute sm:translate-y-1/2 bottom-4 lg:-bottom-9 left-1/2 transform -translate-x-1/2"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default People;

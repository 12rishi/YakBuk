import AboutDetailType from "../../../../types/type";

const People: React.FC<{ detailArr: AboutDetailType[] }> = ({ detailArr }) => {
  return (
    <div className="h-auto w-full mt-4">
      {detailArr?.map((detail: AboutDetailType, index) => (
        <div
          key={index}
          className={`flex w-[100vw] items-center justify-evenly gap-[76px] text-[#303031] ${
            index === 1 ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="flex flex-col items-center">
            <h2 className="text-[#A76E50] text-center font-[Poppins] text-[36px] font-normal leading-[58px] tracking-[4.32px]">
              {detail.name}
            </h2>
            <h4 className="text-[#A76E50] font-[Poppins] text-[24px] font-normal leading-[39px] tracking-[2.88px]">
              {detail.role}
            </h4>
            <div className="w-[36px] h-[1px] bg-[#A76E50]"></div>

            <p className="text-[#303031] text-center font-[Poppins] text-[16px] font-normal leading-[26px] w-[440px] mt-12">
              {detail.detail}
            </p>
          </div>
          <div
            className="w-[500px] h-[621.6px] flex-shrink-0 rounded-[2000px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${detail.image})`,
              backgroundColor: "#D9D9D9",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};
export default People;

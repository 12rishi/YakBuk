import Footer from "../../components/layout/Footer";

import FifthSection from "./Section/FifthSection/FifthSection";
import FourthSection from "./Section/FourthSection/FourthSection";
import Hero from "./Section/Hero/Hero";
import SecondSection from "./Section/SecondSection/SecondSection";
import SeventhSection from "./Section/SeventhSection/SeventhSection";
import SixthSection from "./Section/SixthSection/SixthSection";
import ThirdSection from "./Section/ThirdSection/ThirdSection";

const Home = () => {
  return (
    <>
      <div className="relative w-full min-h-screen bg-[#fff] ">
        {" "}
        {/* Main container */}
        <div className="absolute top-0 w-full">
          <Hero />
        </div>
        <div className="absolute top-[70rem] w-full">
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SixthSection />
          <SeventhSection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;

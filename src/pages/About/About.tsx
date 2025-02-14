import { useEffect } from "react";
import Background from "../../components/layout/Background";
import Footer from "../../components/layout/Footer";
import Detail from "../../components/UI/About/Detail/Detail";

import People from "../../components/UI/About/Detail/People";
import FindUsCard from "../../components/UI/About/FindUs/FindUsCard";
import HorizontalButton from "../../components/UI/About/HorizontalButton/HorizontalButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Slider from "react-slick";
import Carousel from "../../components/UI/About/Carousel/Carousel";

const About = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    prevArrow: <ChevronLeft color="black" className="z-20" />,
    nextArrow: <ChevronRight color="black" className="z-20" />,

    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const detailArr = [
    {
      name: "From",
      role: "Dream To Realty",
      image: "/images/aboutPouringcoffee.jpeg",
      detail:
        "Founded by a local couple with a shared passion for coffee and community, Yak Buck Coffee started as a dream to bring specialty coffee culture to the heart of the Himalayas. Located in the bustling town of Namche Bazar, we've created a warm and welcoming space where trekkers, locals, and coffee enthusiasts can come together.",
    },
    {
      name: "Nima Sherpa",
      role: "Chief Marketing Officer(CMO)",
      image: "/images/cupholding.jpeg",
      detail:
        "Nima Sherpa, passionate about both the mountains and coffee, brings expertise in business to lead the brand development and marketing of Yak Buck. They focus on building strong connections with the community and spreading the café’s spirit beyond Namche Bazar, making it a place where people gather, relax, and enjoy great coffee.",
    },
    {
      name: "Tenzing Sherpa",
      role: "Founder & Managing Director",
      image: "/images/Tenzing.jpeg",
      detail:
        "Tenzing Sherpa grew up surrounded by the beauty of the Himalayas and wanted to share its warmth with the world. With a background in business, they manage the daily operations of Yak Buck, ensuring high-quality service and a welcoming atmosphere for everyone who walks through the door.",
    },
  ];
  const ourValuesSec = [
    {
      image: "/images/streamline.svg",
      header: "Quality First",
      paragraph:
        " We are committed to delivering the highest quality coffee and products, ensuring that every cup and experience meets the highest standards for our customers.",
    },
    {
      image: "/images/love.svg",
      header: "Community Focus",
      paragraph:
        "At Yak Buck, we prioritize building strong connections with our local and global communities, offering a welcoming space for people to gather, share stories, and enjoy a warm drink together.",
    },
    {
      image: "/images/lucideMountain.svg",
      header: "Mountain Heritage",
      paragraph:
        "Rooted in the breathtaking beauty and traditions of the Himalayas, we celebrate the rich cultural heritage of the mountains, bringing its essence to every aspect of our brand.",
    },
    {
      image: "/images/Vector.svg",
      header: "Warm Hospitality",
      paragraph:
        "We believe in providing a friendly and inviting atmosphere, where every guest feels like part of the Yak Buck family, with personalized service and a genuine warmth that makes them feel at home.",
    },
  ];
  const horizontalButtonData = [
    {
      name: "Tenzing Sherpa",
      role: "Founder & ManagingDirector",
      image: "/images/Tenzing.jpeg",
    },
    {
      name: "Nima Sherpa",
      role: "Chief Marketing Officer",
      image: "/images/cupholding.jpeg",
    },
    { name: "Pasang Rai", role: "Barista", image: "/images/pasangSherpa.jpeg" },
    {
      name: "Karma Sherpa",
      role: "Waitstaff",
      image: "/images/KarmaSherpa.jpeg",
    },
    { name: "Rama Tamang", role: "Cashier", image: "/images/RamaTamang.jpeg" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Background
        image="/images/coffeebean.jpeg"
        heading="Our Story"
        paragraph="Where passion for Coffee meets Himalayan hospitality"
      />

      <People detailArr={detailArr} />
      <Detail ourValuesSec={ourValuesSec} />
      <div className="sm:hidden lg:block">
        <HorizontalButton horizontalButtonData={horizontalButtonData} />
      </div>

      <div className="lg:hidden md:block sm:block  w-[100vw]  flex items-center justify-center   ">
        <div className="text-center">
          <h4 className="text-[#A76E50] font-poppins text-xl font-normal leading-[39px] tracking-[2.88px]">
            Meet
          </h4>
          <h3 className="text-[#A76E50] font-poppins text-4xl font-normal leading-[58px] tracking-[4.32px]">
            Our Team
          </h3>
          <div className="w-[36px] h-[1px] bg-[#A76E50] mx-auto mb-11"></div>
        </div>

        <Slider
          {...settings}
          className="sm:flex md:flex lg:hidden w-[80vw] mx-auto text-black h-[50vh] bg-[#084525] "
        >
          {horizontalButtonData.map((data) => (
            <Carousel data={data} />
          ))}
        </Slider>
      </div>

      <FindUsCard />
      <Footer />
    </>
  );
};

export default About;

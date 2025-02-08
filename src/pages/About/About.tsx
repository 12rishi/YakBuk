import Background from "../../components/layout/Background";
import Footer from "../../components/layout/Footer";

import People from "../../components/UI/About/Detail/People";

const About = () => {
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
      role: "Nima SherpaChief Marketing Officer(CMO)",
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
  return (
    <>
      <Background
        image="/images/coffeebean.jpeg"
        heading="Our Story"
        paragraph="Where passion for Coffee meets Himalayan hospitality"
      />
      <People detailArr={detailArr} />
      <Footer />
    </>
  );
};

export default About;

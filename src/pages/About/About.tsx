import Background from "../../components/layout/Background";
import Footer from "../../components/layout/Footer";
import Detail from "../../components/UI/About/Detail/Detail";

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
  const ourValuesSec = [
    {
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[40px] h-[40px]"
          viewBox="0 0 41 40"
          fill="none"
        >
          <path
            d="M26.2148 18.5713C26.2148 17.8136 25.9138 17.0868 25.378 16.551C24.8422 16.0152 24.1155 15.7142 23.3577 15.7142H9.07199C8.31423 15.7142 7.5875 16.0152 7.05168 16.551C6.51586 17.0868 6.21484 17.8136 6.21484 18.5713V32.857C6.21484 34.3726 6.81688 35.826 7.88852 36.8977C8.96016 37.9693 10.4136 38.5713 11.9291 38.5713H20.5006C22.0161 38.5713 23.4695 37.9693 24.5412 36.8977C25.6128 35.826 26.2148 34.3726 26.2148 32.857M26.2148 18.5713V32.857M26.2148 18.5713H27.6434C29.5378 18.5713 31.3546 19.3239 32.6942 20.6634C34.0337 22.003 34.7863 23.8198 34.7863 25.7142C34.7863 27.6086 34.0337 29.4254 32.6942 30.7649C31.3546 32.1045 29.5378 32.857 27.6434 32.857H26.2148M11.9291 1.42847V7.14275M20.5006 1.42847V7.14275"
            stroke="#0D713D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      header: "Quality First",
      paragraph:
        " We are committed to delivering the highest quality coffee and products, ensuring that every cup and experience meets the highest standards for our customers.",
    },
    {
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[41px] h-[31px]"
          viewBox="0 0 41 40"
          fill="none"
        >
          <path
            d="M20.0549 10.1315L20.5007 11.0089L20.9464 10.1315C22.3465 7.37548 25.1239 5.5 28.3273 5.5C32.9195 5.5 36.6673 9.34086 36.6673 14.135C36.6673 18.9972 34.2062 23.1645 29.8833 27.2256L29.8832 27.2257C27.8559 29.1311 25.4451 30.9687 23.5344 32.3338C22.5804 33.0153 21.7539 33.577 21.1664 33.9681C20.8846 34.1556 20.6579 34.3037 20.4986 34.407C20.3342 34.3021 20.0988 34.1504 19.806 33.958C19.204 33.5624 18.3603 32.9953 17.395 32.3104C15.4608 30.9378 13.0535 29.1024 11.1237 27.2311C7.24713 23.4717 4.33398 18.974 4.33398 14.135C4.33398 9.35532 8.08236 5.5 12.674 5.5C15.8774 5.5 18.6548 7.37548 20.0549 10.1315Z"
            stroke="#0D713D"
          />
          <path
            d="M28.3273 5C24.9206 5 21.979 6.995 20.5007 9.905C19.0223 6.995 16.0807 5 12.674 5C7.79065 5 3.83398 9.095 3.83398 14.135C3.83398 19.175 6.86232 23.795 10.7757 27.59C14.689 31.385 20.5007 35 20.5007 35C20.5007 35 26.124 31.445 30.2256 27.59C34.6006 23.48 37.1673 19.19 37.1673 14.135C37.1673 9.08 33.2106 5 28.3273 5Z"
            stroke="#0D713D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      header: "Community Focus",
      paragraph:
        "At Yak Buck, we prioritize building strong connections with our local and global communities, offering a welcoming space for people to gather, share stories, and enjoy a warm drink together.",
    },
    {
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          fill="none"
          className="w-10 h-10"
        >
          <path
            d="M13.334 5L20.0007 18.3333L28.334 10L36.6673 35H3.33398L13.334 5Z"
            stroke="#0D713D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      header: "Mountain Heritage",
      paragraph:
        "Rooted in the breathtaking beauty and traditions of the Himalayas, we celebrate the rich cultural heritage of the mountains, bringing its essence to every aspect of our brand.",
    },
    {
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
        >
          <path
            d="M20.0549 10.1315L20.5007 11.0089L20.9464 10.1315C22.3465 7.37548 25.1239 5.5 28.3273 5.5C32.9195 5.5 36.6673 9.34086 36.6673 14.135C36.6673 18.9972 34.2062 23.1645 29.8833 27.2256L29.8832 27.2257C27.8559 29.1311 25.4451 30.9687 23.5344 32.3338C22.5804 33.0153 21.7539 33.577 21.1664 33.9681C20.8846 34.1556 20.6579 34.3037 20.4986 34.407C20.3342 34.3021 20.0988 34.1504 19.806 33.958C19.204 33.5624 18.3603 32.9953 17.395 32.3104C15.4608 30.9378 13.0535 29.1024 11.1237 27.2311C7.24713 23.4717 4.33398 18.974 4.33398 14.135C4.33398 9.35532 8.08236 5.5 12.674 5.5C15.8774 5.5 18.6548 7.37548 20.0549 10.1315Z"
            stroke="#0D713D"
          />
          <path
            d="M28.3273 5C24.9206 5 21.979 6.995 20.5007 9.905C19.0223 6.995 16.0807 5 12.674 5C7.79065 5 3.83398 9.095 3.83398 14.135C3.83398 19.175 6.86232 23.795 10.7757 27.59C14.689 31.385 20.5007 35 20.5007 35C20.5007 35 26.124 31.445 30.2256 27.59C34.6006 23.48 37.1673 19.19 37.1673 14.135C37.1673 9.08 33.2106 5 28.3273 5Z"
            stroke="#0D713D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      header: "Warm Hospitality",
      paragraph:
        "We believe in providing a friendly and inviting atmosphere, where every guest feels like part of the Yak Buck family, with personalized service and a genuine warmth that makes them feel at home.",
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
      <Detail ourValuesSec={ourValuesSec} />
    </>
  );
};

export default About;

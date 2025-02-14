import Background from "../../components/layout/Background";
import Card from "../../components/UI/venture/Card";
import Footer from "../../components/layout/Footer";
const ventureData = [
  {
    image: "/images/ventureDonuts.jpeg",
    heading: "Yak Donuts",
    paragraph:
      "Yak Donuts brings a delightful twist to classic treats, offering freshly made, soft, and flavorful donuts with a Himalayan touch. Each bite is crafted to provide warmth and sweetness, perfect for adventurers and locals alike.",
    content: [
      "Freshly baked donuts",
      "Cozy seating for a relaxing treat",
      "Custom orders",
      "Takeaway and quick-service",
    ],
  },
  {
    image: "/images/ventureCloth.jpeg",
    heading: "Everest Yak",
    paragraph:
      "Everest Yak offers a collection of authentic Himalayan souvenirs that capture the spirit of the mountains. From handwoven yak wool clothing to traditional singing bowls, each item reflects the rich culture and craftsmanship of the region—perfect keepsakes for travelers to take home.",
    content: [
      "Handmade Souvenirs",
      "Yak Wool Clothing",
      "Locally Made Jewelry",
      "Traditional Singing Bowls",
    ],
  },
];
const Venture = () => {
  return (
    <>
      <Background
        image={"/images/ventureMountain.png"}
        heading="Our Ventures"
        paragraph="Beyond coffee, our related ventures, Yak Donuts and Everest Yak, celebrate local flavors and culture, offering delicious treats and authentic Himalayan experiences."
      />
      <Card ventureData={ventureData} />
      <Footer />
    </>
  );
};

export default Venture;

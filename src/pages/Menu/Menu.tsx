import Background from "../../components/layout/Background";
import Footer from "../../components/layout/Footer";
import MenuOverview from "../../components/UI/Menu/MenuOverview";

const Menu = () => {
  const menuItems = [
    {
      heading: "Yak Buck Special",
      paragraph:
        "Our signature drinks, crafted exclusively for Yak Buck, offer a unique taste that embodies the spirit of the Himalayas.",
      items: [
        {
          itemName: "Everest Expresso ",
          itemDetail:
            "A strong, bold espresso served in a cup of the highest quality beans from local farms.",
          itemPrice: "$2.00",
        },
        {
          itemName: "Everest Expresso ",
          itemDetail:
            "A strong, bold espresso served in a cup of the highest quality beans from local farms.",
          itemPrice: "$2.00",
        },
        {
          itemName: "Everest Expresso ",
          itemDetail:
            "A strong, bold espresso served in a cup of the highest quality beans from local farms.",
          itemPrice: "$2.00",
        },
      ],
    },
    {
      heading: "Coffee",
      paragraph:
        "Sourced from high-altitude coffee farms, our freshly brewed coffee delivers bold flavors and a smooth finish.",
      items: [
        {
          itemName: "Everest Expresso ",
          itemDetail:
            "A strong, bold espresso served in a cup of the highest quality beans from local farms.",
          itemPrice: "$2.00",
        },
        {
          itemName: "Everest Expresso ",
          itemDetail:
            "A strong, bold espresso served in a cup of the highest quality beans from local farms.",
          itemPrice: "$2.00",
        },
        {
          itemName: "Everest Expresso ",
          itemDetail:
            "A strong, bold espresso served in a cup of the highest quality beans from local farms.",
          itemPrice: "$2.00",
        },
      ],
    },
    {
      heading: "Espresso",
      paragraph:
        "For those who crave a strong caffeine kick, our espresso options are rich, intense, and perfectly balanced.",
      items: [
        {
          itemName: "Everest Expresso ",
          itemDetail:
            "A strong, bold espresso served in a cup of the highest quality beans from local farms.",
          itemPrice: "$2.00",
        },
        {
          itemName: "Everest Expresso ",
          itemDetail:
            "A strong, bold espresso served in a cup of the highest quality beans from local farms.",
          itemPrice: "$2.00",
        },
        {
          itemName: "Everest Expresso ",
          itemDetail:
            "A strong, bold espresso served in a cup of the highest quality beans from local farms.",
          itemPrice: "$2.00",
        },
      ],
    },
    {
      heading: "Iced Blended drinks",
      paragraph:
        "Cool down with our refreshing iced blended drinks, featuring a mix of espresso, milk, and ice, blended to perfection.",
      items: [
        {
          itemName: "Everest Expresso ",
          itemDetail:
            "A strong, bold espresso served in a cup of the highest quality beans from local farms.",
          itemPrice: "$2.00",
        },
        {
          itemName: "Everest Expresso ",
          itemDetail:
            "A strong, bold espresso served in a cup of the highest quality beans from local farms.",
          itemPrice: "$2.00",
        },
        {
          itemName: "Everest Expresso ",
          itemDetail:
            "A strong, bold espresso served in a cup of the highest quality beans from local farms.",
          itemPrice: "$2.00",
        },
      ],
    },
    {
      heading: "Snacks & Pastries",
      paragraph:
        "Cool down with our refreshing iced blended drinks, featuring a mix of espresso, milk, and ice, blended to perfection.",
      items: [
        {
          itemName: "Everest Expresso ",
          itemDetail:
            "A strong, bold espresso served in a cup of the highest quality beans from local farms.",
          itemPrice: "$2.00",
        },
        {
          itemName: "Everest Expresso ",
          itemDetail:
            "A strong, bold espresso served in a cup of the highest quality beans from local farms.",
          itemPrice: "$2.00",
        },
        {
          itemName: "Everest Expresso ",
          itemDetail:
            "A strong, bold espresso served in a cup of the highest quality beans from local farms.",
          itemPrice: "$2.00",
        },
      ],
    },
  ];
  return (
    <>
      <Background
        image="/images/menuBackground.jpeg"
        heading="Beverages & Bites"
        paragraph=""
      />
      <MenuOverview menuItems={menuItems} />
      <Footer />
    </>
  );
};

export default Menu;

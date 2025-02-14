import { useState } from "react";

interface Review {
  comment: string;
  name: string;
  role: string;
}

const SixthSection = () => {
  const [current, setCurrent] = useState<number>(1);
  const review: Review[] = [
    {
      comment:
        "Yak Buck Café was the perfect stop after a long trek! The coffee was rich and flavorful, and the warm atmosphere made me feel at home. A must-visit in Namche!",
      name: "Bhim Bahadur",
      role: "Manager, Nepal Food Corporation",
    },
    {
      comment:
        "I started my trek with a Sherpa's Hot Chocolate, and it gave me the energy I needed! The café is a warm retreat in the cold mountain air. Highly recommend!",
      name: "Alexander",
      role: "Trekker",
    },
    {
      comment:
        "I stopped by Yak Buck Café on my way to Everest Base Camp, and it was a highlight of my trip. Great coffee, great people, and a place full of warmth!",
      name: "Daniel",
      role: "Mountaineer",
    },
  ];

  const increaseCurrent = () => {
    setCurrent((prev) => (prev < review.length ? prev + 1 : 1));
  };

  const decreaseCurrent = () => {
    setCurrent((prev) => (prev <= 1 ? review.length : prev - 1));
  };

  return (
    <div className="w-full bg-white flex justify-center items-center mt-28 px-4 md:px-8">
      <div className="w-full max-w-3xl flex items-center gap-4 justify-between">
        {/* Left Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 stroke-[#A76E50] cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={decreaseCurrent}
        >
          <path d="M19 12H5M5 12L12 19M5 12L12 5" />
        </svg>

        {/* Content Section */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h4 className="text-[#A76E50] font-[Poppins] font-normal tracking-[0.15em] text-[clamp(1rem,2vw,1.5rem)]">
            Come and join
          </h4>
          <h2 className="text-[#A76E50] font-[Poppins] font-normal tracking-[0.18em] text-[clamp(1.5rem,3vw,2.25rem)]">
            Our Happy Customers
          </h2>
          <p className="w-full max-w-lg text-[#4A494B] text-center font-[Poppins] italic font-normal text-[clamp(0.875rem,2vw,1rem)] leading-[1.6] mx-auto mb-4">
            {review[current - 1].comment}
          </p>
          <div className="w-full max-w-xs h-px bg-[#A76E50]"></div>
          <p className="text-[#4A494B] text-center font-[Poppins] font-normal text-[clamp(0.875rem,2vw,1rem)] leading-[1.6]">
            {review[current - 1].name}
          </p>
          <p className="text-[#4A494B] text-center font-[Poppins] font-normal text-[clamp(0.75rem,1.5vw,0.875rem)] leading-[1.4]">
            {review[current - 1].role}
          </p>
        </div>

        {/* Right Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 stroke-[#A76E50] cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={increaseCurrent}
        >
          <path d="M5 12H19M19 12L12 5M19 12L12 19" />
        </svg>
      </div>
    </div>
  );
};

export default SixthSection;

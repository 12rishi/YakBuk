import React from "react";

const FifthSection = () => {
  return (
    <div className="relative w-[1728px] h-[600px] flex-shrink-0 overflow-hidden -z-10 flex flex-col items-center justify-center">
      {/* Paragraph Above */}
      <p className="absolute top-1/2 w-[1238px] text-center text-[#F2F2F2] font-[Poppins] text-[20px] font-normal leading-[32px] tracking-[1.6px] z-10">
        Born from the simple joy of sharing good coffee and meaningful moments,
        Yak Buck Café embodies the essence of comfort and connection. Every cup
        we serve tells a story—of passion, adventure, and the spirit of the
        mountains.
      </p>

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/mountain.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(13,113,61,0.60)]"></div>
    </div>
  );
};

export default FifthSection;

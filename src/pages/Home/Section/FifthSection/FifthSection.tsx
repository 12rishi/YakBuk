const FifthSection = () => {
  return (
    <div className="relative w-[100vw] h-[60vh] flex-shrink-0 -z-10 overflow-hidden flex flex-col items-center justify-center">
      <p className="absolute top-1/2 w-[80%] max-w-4xl text-center text-[#F2F2F2] font-[Poppins] sm:text-sm lg:text-[clamp(1rem,2vw,1rem)] font-normal leading-[clamp(1.5rem,3vw,2rem)] tracking-[0.1em] z-10">
        Born from the simple joy of sharing good coffee and meaningful moments,
        Yak Buck Café embodies the essence of comfort and connection. Every cup
        we serve tells a story—of passion, adventure, and the spirit of the
        mountains.
      </p>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover aspect-video"
      >
        <source src="/videos/mountain.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(13,113,61,0.60)]"></div>
    </div>
  );
};

export default FifthSection;

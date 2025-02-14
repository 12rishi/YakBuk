import { Link } from "react-router-dom";

const SecondSection = () => {
  return (
    <>
      <div className="w-11/12 mx-auto sm:w-full md:w-[100vw] lg:w-11/12  md:mt-6">
        <div className="grid lg:grid-cols-3 lg:w-full text-black lg:p-5 sm:w-full sm:mx-auto lg:mx-0 sm:grid-cols-1 sm:p-2 ">
          <div className="w-[325.772px] h-[405px] rounded-[2000px] bg-[url('/images/couple.jpeg')] bg-cover sm:hidden lg:block "></div>
          <div className="lg:w-[619px] sm:w-full grid grid-rows-3 place-items-center sm:-space-y-8 lg:gap-[12px] sm:gap-8 md:space-y-8 md:gap-10  lg:ml-0">
            {/* Heading */}
            <div className="self-stretch text-[#A76E50] text-center font-poppins text-[1.5rem] font-normal leading-[2.4375rem] tracking-[0.18rem] sm:h-[10vh]">
              Our Journey of{" "}
              <span className="text-[#A76E50] block font-poppins text-[2.25rem] font-normal sm:leading-[2rem] lg:leading-[3.625rem] tracking-[0.27rem] sm:font-light md:font-light">
                Love & Coffee
              </span>
              {/* Centered Line */}
              <div className="w-full flex justify-center mt-2">
                <div className="w-[36px] h-[1px] bg-[#A76E50]"></div>
              </div>
            </div>

            {/* Description */}
            <div className="text-[#303031] text-center font-poppins lg:text-[1rem] font-normal leading-[1.625rem] sm:text-[0.8rem] sm:w-[80vw] lg:w-[40vw] lg:mt-4 sm:-mt-10">
              Yak Buck isn’t just a café—it’s a dream brewed with love, built by
              a husband and wife who share a passion for coffee and the
              mountains. What started as an idea over countless cups of coffee
              became a haven for travelers, trekkers, and dreamers alike.
              Nestled in Namche Bazaar, our café is a reflection of warmth,
              togetherness, and the simple joys of life. Every cup we serve
              carries our story—a story of love, adventure, and a deep-rooted
              connection to the Himalayas.
            </div>

            {/* Button */}
            <div className="flex justify-center items-center gap-[0.625rem] px-[1.5rem] py-[0.75rem] w-[10rem] rounded-[1.5rem] bg-[#0B5B32] mt-4">
              <Link
                to="/about"
                className="text-white font-poppins text-[1rem] font-medium leading-[1.625rem]"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="w-[33.5rem] h-[29.9375rem] shrink-0 bg-[url('/images/headerCup.png')] bg-cover bg-no-repeat bg-center sm:hidden lg:block"></div>
        </div>
        <div className="grid grid-cols-3 place-items-center  w-full p-5 lg:mt-36 sm:mt-20 lg:ml-20 gap-18 sm:justify-items-center sm:gap-6 sm:ml-0">
          <div className="flex flex-col items-center s gap-2.5  w-full">
            <div className="relative w-[80px] h-[80px] ">
              <svg
                className="absolute inset-0 w-[50px] h-[50px] flex-shrink-0 fill-[#DAFBEA] m-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 51 50"
              >
                <circle cx="25.5" cy="25" r="25" />
              </svg>
              <svg
                className="relative flex-shrink-0 right-6 -top-2.5"
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="80"
                viewBox="0 0 81 80"
                fill="none"
              >
                <g clipPath="url(#clip0_123_15009)">
                  <path
                    d="M48.7708 39.278C48.6526 39.2772 48.5355 39.2556 48.4248 39.214C46.3548 38.402 41.9648 25.264 41.9648 22.11C41.9664 20.3054 42.684 18.5752 43.96 17.2991C45.2361 16.0231 46.9663 15.3055 48.7708 15.304C50.5749 15.3061 52.3044 16.0239 53.5797 17.3C54.8549 18.576 55.5718 20.3059 55.5728 22.11C55.5728 25.264 51.1868 38.402 49.1168 39.214C49.0062 39.2556 48.8891 39.2772 48.7708 39.278ZM48.7708 17.2C47.4696 17.2015 46.2222 17.7191 45.3021 18.6392C44.382 19.5593 43.8644 20.8068 43.8628 22.108C43.8628 25.176 47.2188 34.222 48.7708 36.862C50.3228 34.224 53.6748 25.176 53.6748 22.108C53.6748 19.402 51.4748 17.2 48.7708 17.2Z"
                    fill="#A76E50"
                  />
                  <path
                    d="M50.0664 64.698C49.7514 64.6958 49.4424 64.611 49.1704 64.452L26.1644 50.43L3.18044 64.438C2.81875 64.648 2.39543 64.7261 1.98262 64.659C1.5698 64.5919 1.19302 64.3837 0.916444 64.07C0.643354 63.7461 0.496245 63.3346 0.502123 62.911C0.508001 62.4874 0.666472 62.0801 0.948444 61.764C24.5804 32.032 24.6084 32.02 24.9664 31.894L38.7464 26.316C38.9491 26.2381 39.1717 26.2282 39.3804 26.288L42.1204 27.128C42.6204 27.282 42.9024 27.814 42.7504 28.314C42.6744 28.5532 42.5076 28.7531 42.2859 28.8709C42.0642 28.9886 41.8052 29.0149 41.5644 28.944L39.1464 28.202L25.8504 33.58C24.2604 35.502 9.20844 54.42 2.81444 62.462L25.6724 48.506C25.8209 48.4143 25.992 48.3657 26.1664 48.3657C26.3409 48.3657 26.512 48.4143 26.6604 48.506L50.0684 62.774L50.1324 62.748L71.9924 50.174L72.8664 27.5L57.4884 33.594C57.2884 33.674 57.0684 33.682 56.8604 33.62L54.3004 32.84C54.0663 32.7608 53.8721 32.5935 53.7593 32.3735C53.6465 32.1535 53.6239 31.8983 53.6963 31.6619C53.7687 31.4255 53.9303 31.2267 54.1469 31.1075C54.3636 30.9884 54.6181 30.9585 54.8564 31.024L57.0984 31.71L72.4804 25.614C73.1284 25.434 73.6864 25.562 74.1284 25.918C74.3428 26.0911 74.5129 26.3127 74.6249 26.5644C74.7368 26.8161 74.7874 27.0909 74.7724 27.366L73.8024 50.38C73.7874 50.6645 73.7051 50.9414 73.5622 51.188C73.4193 51.4345 73.2199 51.6435 72.9804 51.798L50.9664 64.452C50.9008 64.485 50.8333 64.5144 50.7644 64.54C50.5467 64.6447 50.3081 64.6987 50.0664 64.698Z"
                    fill="#A76E50"
                  />
                  <path
                    d="M26.2087 50.206C26.0419 50.2055 25.8782 50.161 25.734 50.0771C25.5899 49.9933 25.4703 49.8729 25.3874 49.7282C25.3045 49.5834 25.2611 49.4194 25.2617 49.2526C25.2623 49.0858 25.3068 48.9221 25.3907 48.778L38.1667 26.926C38.2295 26.8184 38.3128 26.7243 38.412 26.6489C38.5112 26.5736 38.6242 26.5185 38.7446 26.4869C38.8651 26.4552 38.9905 26.4476 39.1139 26.4644C39.2373 26.4812 39.3562 26.5222 39.4637 26.585C39.5713 26.6477 39.6654 26.7311 39.7408 26.8302C39.8161 26.9294 39.8712 27.0424 39.9029 27.1628C39.9345 27.2833 39.9422 27.4088 39.9253 27.5322C39.9085 27.6556 39.8675 27.7744 39.8047 27.882L27.0287 49.734C26.9445 49.8768 26.8246 49.9953 26.6809 50.078C26.5372 50.1607 26.3745 50.2048 26.2087 50.206ZM50.2407 64.336C50.0992 64.3357 49.9595 64.304 49.8319 64.2429C49.7042 64.1819 49.5917 64.0932 49.5026 63.9832C49.4135 63.8733 49.3501 63.7448 49.3169 63.6073C49.2837 63.4697 49.2816 63.3265 49.3107 63.188L55.8747 32.656C55.9303 32.4113 56.0795 32.1981 56.2903 32.062C56.5011 31.9259 56.7569 31.8778 57.0027 31.928C57.2485 31.9817 57.463 32.1304 57.5994 32.3418C57.7358 32.5532 57.783 32.8099 57.7307 33.056L51.1667 63.588C51.1224 63.8004 51.006 63.9909 50.8372 64.1272C50.6684 64.2636 50.4577 64.3373 50.2407 64.336Z"
                    fill="#A76E50"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_123_15009">
                    <rect
                      width="80"
                      height="80"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="text-[#303031] font-poppins lg:text-[1.125rem] font-medium leading-[2rem] sm:tracking-[0.1rem] lg:tracking-[0.2025rem] sm:text-[8px] md:text-[1rem] break-words">
              Nepalese Coffee
            </div>
          </div>
          <div className="flex flex-col items-center gap-2.5 w-full">
            <div className="relative w-[80px] h-[80px]">
              {/* Background Circle (Absolute) */}
              <svg
                className="absolute inset-0 w-[50px] h-[50px] flex-shrink-0 fill-[#DAFBEA] m-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 51 50"
              >
                <circle cx="25.5" cy="25" r="25" />
              </svg>

              {/* Foreground SVG (Relative) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                className="relative flex-shrink-0 right-6 -top-2.5"
                viewBox="0 0 81 80"
                fill="none"
              >
                <path
                  d="M64.3374 16.2267C61.7177 13.7675 58.5464 11.9725 55.0896 10.9923C51.6328 10.0121 47.9913 9.87529 44.4707 10.5934C36.1666 12.0549 28.5367 16.1032 22.6707 22.16C16.5955 28.0303 12.5348 35.6732 11.0707 43.9934C10.3582 47.5089 10.4978 51.1439 11.4779 54.5944C12.458 58.0449 14.25 61.2106 16.704 63.8267C18.7523 65.7929 21.1724 67.3305 23.8225 68.3494C26.4726 69.3682 29.2995 69.8478 32.1374 69.76C42.0916 69.3635 51.5004 65.1074 58.3707 57.8934C71.5007 44.76 74.1674 26.06 64.3374 16.2267ZM14.3707 44.4934C15.7309 36.8865 19.4511 29.9007 25.004 24.5267C30.3698 18.9628 37.3593 15.2405 44.9707 13.8934C46.2726 13.6964 47.5873 13.5961 48.904 13.5934C51.3032 13.508 53.6952 13.9035 55.9392 14.7565C58.1832 15.6094 60.234 16.9026 61.9707 18.56C62.1101 18.689 62.2332 18.8345 62.3374 18.9934C60.2631 20.7958 57.8649 22.1872 55.2707 23.0934C51.5276 24.444 48.1497 26.6464 45.404 29.5267C42.5237 32.2724 40.3213 35.6502 38.9707 39.3934C37.8029 42.7312 35.8477 45.7384 33.2707 48.16C30.8407 50.727 27.8362 52.6806 24.504 53.86C21.6389 54.882 18.9843 56.4183 16.6707 58.3934C14.2942 54.1744 13.4799 49.253 14.3707 44.4934ZM56.004 55.5267C44.1707 67.36 27.604 70.0267 19.0707 61.4934C18.931 61.3549 18.7976 61.2103 18.6707 61.06C20.7641 59.2669 23.1713 57.8769 25.7707 56.96C29.5032 55.5881 32.8764 53.3886 35.6374 50.5267C38.5139 47.7779 40.7157 44.401 42.0707 40.66C43.2385 37.3222 45.1937 34.315 47.7707 31.8934C50.1924 29.3164 53.1995 27.3612 56.5374 26.1934C59.3901 25.151 62.0321 23.6042 64.3374 21.6267C69.804 30.6667 66.5707 44.96 56.004 55.5267Z"
                  fill="#A76E50"
                />
              </svg>
            </div>

            <div className="text-[#303031] font-poppins lg:text-[1.125rem] sm:tracking-[0.1rem] font-medium sm:leading-[1rem] lg:leading-[2rem] lg:tracking-[0.2025rem] md:text-[1rem] sm:text-[8px] sm:text-center ">
              Rigorous Selection
            </div>
          </div>
          <div className="flex flex-col items-center gap-2.5 w-full">
            <div className="relative w-[80px] h-[80px]">
              {/* Background Circle */}
              <svg
                className="absolute inset-0 w-[50px] h-[50px] flex-shrink-0 fill-[#DAFBEA] m-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 51 50"
              >
                <circle cx="25.5" cy="25" r="25" />
              </svg>

              {/* Foreground SVG */}
              <svg
                className="relative w-[80px] h-[80px] flex-shrink-0 right-6 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80 80"
                fill="none"
              >
                <path
                  d="M33.334 34.4234L40.0007 31.09L46.6673 34.4234V16.6667H33.334V34.4234ZM23.334 55V51.6667H40.0007V55H23.334ZM18.7207 66.6667C17.1851 66.6667 15.904 66.1534 14.8773 65.1267C13.8507 64.1 13.3362 62.8178 13.334 61.28V18.72C13.334 17.1845 13.8484 15.9034 14.8773 14.8767C15.9062 13.85 17.1873 13.3356 18.7207 13.3334H61.284C62.8173 13.3334 64.0984 13.8478 65.1273 14.8767C66.1562 15.9056 66.6695 17.1867 66.6673 18.72V61.2834C66.6673 62.8167 66.154 64.0978 65.1273 65.1267C64.1007 66.1556 62.8184 66.6689 61.2807 66.6667H18.7207ZM18.7207 63.3334H61.284C61.7951 63.3334 62.2651 63.12 62.694 62.6934C63.1229 62.2667 63.3362 61.7956 63.334 61.28V18.72C63.334 18.2067 63.1207 17.7356 62.694 17.3067C62.2673 16.8778 61.7962 16.6645 61.2807 16.6667H50.0006V39.8734L40.0007 34.8734L30.0007 39.8734V16.6667H18.7207C18.2073 16.6667 17.7362 16.88 17.3073 17.3067C16.8784 17.7334 16.6651 18.2045 16.6673 18.72V61.2834C16.6673 61.7945 16.8807 62.2645 17.3073 62.6934C17.734 63.1223 18.204 63.3356 18.7173 63.3334"
                  fill="#A76E50"
                />
              </svg>
            </div>

            <div className="text-[#303031] font-poppins sm:tracking-[0.1rem] lg:text-[1.125rem] font-medium leading-[2rem] lg:tracking-[0.2025rem] sm:text-[8px] md:text-[1rem]">
              Vacuum Packing
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSection;

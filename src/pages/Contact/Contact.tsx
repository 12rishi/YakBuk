import React from "react";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

const Contact = () => {
  return (
    <>
      <div className="w-[100vw] h-[1500px] flex-shrink-0 bg-[#084525] relative">
        <div className="absolute top-6 w-[100vw] mx-auto">
          <Navbar />
        </div>
        <div className="flex w-[1306px] items-center gap-[149px] relative top-[25%]  mx-auto">
          <div className="flex flex-col w-[620px]">
            <h3 className="self-stretch text-[#A76E50] text-center font-poppins text-4xl font-normal leading-[78px]">
              Get in touch{" "}
              <span className="block text-[#A76E50] font-poppins text-[68px] font-bold leading-[78px]">
                with us
              </span>
            </h3>
            <div className="h-[500px] self-stretch bg-[url('/images/contactcoffee.png')] bg-lightgray bg-cover bg-center"></div>
          </div>
          <div>
            <div className="max-w-xl mx-auto flex w-full flex-col gap-4 p-8">
              <h2 className="text-white font-poppins text-[24px] font-medium leading-[39px] px-4">
                Send us a message
              </h2>
              <p className="w-[537px] text-[#C9C9CA] font-poppins text-[16px] font-normal leading-[26px] px-4">
                We’d love to hear from you! Whether you have a question,
                feedback, or just want to say hello, feel free to reach out.
                Let’s connect over great coffee and good conversations.
              </p>

              <div className="mb-4">
                <div className="relative flex items-center w-full max-w-[505px] h-[50px] px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute left-[24px] w-[24px] h-[24px] text-[#949395]"
                  >
                    <path
                      d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
                      stroke="#949395"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <input
                    type="text"
                    placeholder="Name"
                    className="pl-[36px] text-[#949395] h-[50px] w-full px-[16px] py-[10px] rounded-[14px] border-[0.8px] border-gray-600 outline-none"
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="relative flex items-center w-full max-w-[505px] h-[50px] px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute left-[24px] w-[24px] h-[24px] text-[#949395]"
                  >
                    <path
                      d="M21.5 18L14.8571 12M9.14286 12L2.50003 18M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
                      stroke="#949395"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <input
                    type="email"
                    placeholder="Enter text"
                    className="pl-[36px] text-[#949395] h-[50px] w-full px-[16px] py-[10px] rounded-[14px] border-[0.8px] border-gray-600 outline-none"
                  />
                </div>

                <textarea
                  className="flex mt-4 h-[165px] text-[#949395] w-full max-w-[505px] py-[17px] px-4 items-start gap-[10px] self-stretch rounded-[14px] border-[0.4px] border-[#616062] outline-none resize-none"
                  placeholder="Message"
                ></textarea>
              </div>

              <button className="flex px-[22px] py-[12px] justify-center items-center gap-[10px] self-stretch rounded-[24px] bg-[#A76E50] text-white font-medium">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

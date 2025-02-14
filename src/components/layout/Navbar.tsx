import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // To control the menu open/close state
  const toggleMenu = () => setIsOpen(!isOpen);
  useEffect((): any => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className="flex sm:hidden lg:flex justify-around items-center h-10 mx-auto  lg:w-[100vw]   lg:px-0  py-20  "
        style={{ zIndex: 2000 }}
      >
        <ul
          className={`lg:flex lg:text-[1.15rem] lg:mx-auto font-poppins text-[#ffffff] text-center list-none lg:gap-[96px] justify-between items-center h-14 sm:hidden ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link to="/menu" className="hover:text-[#32ac72]">
            Menu
          </Link>
          <Link to="/about" className="hover:text-[#32ac72]">
            About Us
          </Link>
          <Link
            to="/"
            className="w-[20vw] h-[20vh] flex items-center align-middle justify-center"
          >
            <img src={"/images/logo.png"} alt="" width="120px" height="120px" />
          </Link>
          <Link to="/venture" className="hover:text-[#32ac72]">
            Our Venture
          </Link>
          <Link to="/contact" className="hover:text-[#32ac72]">
            Contact Us
          </Link>
        </ul>
      </nav>
      {isOpen == true ? (
        <div className="sm:block lg:hidden w-full grid grid-rows-2 h-full top-0 left-0 fixed  bg-[#ffff] text-black z-50  ">
          <div className="flex justify-between p-9 w-full">
            <div>
              <Link
                to="/"
                className=" lg:hidden sm:block flex items-center justify-center"
              >
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  width="40px"
                  height="40px"
                />
              </Link>
            </div>
            <div>
              <button onClick={toggleMenu} className="text-black">
                <AiOutlineClose size={24} />
              </button>
            </div>
          </div>
          <div className="w-full h-[50%] grid grid-rows-4 justify-items-center mt-10">
            <Link to="/menu" className="hover:text-[#32ac72]">
              Menu
            </Link>

            <Link to="/about" className="hover:text-[#32ac72]">
              About Us
            </Link>
            <Link to="/venture" className="hover:text-[#32ac72]">
              Our Venture
            </Link>
            <Link to="/contact" className="hover:text-[#32ac72]">
              Contact Us
            </Link>
          </div>
        </div>
      ) : (
        <div className=" sm:flex lg:hidden w-full  justify-between px-5 items-center p-4">
          <div>
            <Link to="/" className=" lg:hidden sm:block ">
              <img
                src="/images/logo.png"
                alt="Logo"
                width="40px"
                height="40px"
              />
            </Link>
          </div>
          <div>
            <button onClick={toggleMenu} className="text-white">
              <AiOutlineMenu size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

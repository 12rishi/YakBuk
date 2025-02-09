import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="flex text-[20px] font-poppins text-[#FFFFFF] text-center list-none gap-[96px] justify-between items-center h-14 align-middle w-8/12 mx-auto mt-4 ">
        <Link to="/menu" className="hover:text-[#32ac72]">
          Menu
        </Link>
        <Link to="/about" className="hover:text-[#32ac72]">
          About Us
        </Link>
        <Link to="/">
          <figure>
            <img src={"/images/logo.png"} alt="" width="120px" height="120px" />
          </figure>
        </Link>
        <Link to="/venture" className="hover:text-[#32ac72]">
          Our Venture
        </Link>
        <Link to="/contact" className="hover:text-[#32ac72]">
          Contact Us
        </Link>
      </ul>
    </>
  );
};

export default Navbar;

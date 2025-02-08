const Navbar = () => {
  return (
    <>
      <ul className="flex text-[20px] font-poppins text-[#FFFFFF] text-center list-none gap-[96px] justify-between items-center h-14 align-middle w-8/12 mx-auto mt-4 ">
        <li>Menu</li>
        <li>About Us</li>
        <li>
          <figure>
            <img src={"/images/logo.png"} alt="" width="120px" height="120px" />
          </figure>
        </li>
        <li>Our Venture</li>
        <li>Contact Us</li>
      </ul>
    </>
  );
};

export default Navbar;

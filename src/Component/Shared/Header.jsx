import { MdMenu } from "react-icons/md";
import logo from "../../assets/image/logo/logo.png";
import { Link } from "react-router-dom";
// import { Link, animateScroll as scroll } from "react-scroll";
const Header = () => {
  const navItem = (
    <>
      <li className="mr-2">
        <Link to="/">Company</Link>
      </li>
      <li className="mr-2">
        <Link to="/project">project</Link>
      </li>
      <li className="mr-2">
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="max-w-screen navbar font-bold p-4 border-b-2 border-red-500">
      <div className="navbar-start">
        <a href="/ " className=" flex justify-center items-center">
          <img src={logo} alt="logo" className="" />
        </a>
      </div>
      {/* <div className="navbar-end"></div> */}
      <div className="navbar-end">
        <ul className="menu menu-horizontal  hidden lg:flex text-red-500 ">
          {navItem}
        </ul>
        {/* mobile nav */}
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <MdMenu color="red" size="25px" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm  dropdown-content mt-3 z-[1] p-2   rounded-box w-52 text-red-500 gap-y-4 bg-gray-200"
          >
            {navItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

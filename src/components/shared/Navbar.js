import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { BsPerson } from "react-icons/bs";
// import {
//   SearchIcon,
//   PlusCircleIcon,
//   UserGroupIcon,
//   HeartIcon,
//   PaperAirplaneIcon,
//   MenuIcon,
// } from "@heroicons/react/outline";
// import { HomeIcon } from "@heroicons/react/solid";
// import { BackspaceIcon } from "react-icons/bi";




const Navbar = (props) => {
  let navigate = useNavigate();
  function refreshPage() {
    let location = window.location.pathname;
    if (location === "/") window.location.reload(false);
  }

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex w-full justify-between items-center h-20 px-4 absolute right-7 z-10">
        <Link to="/" onClick={refreshPage}>
          <div>
            <h1
              className={`text-3xl font-bold lg:text-4xl ml-8 pl-5 lg:pl-3  cursor-pointer font-fornavbar ${props.fontcolor}`}
            >
              Minder 💋
            </h1>
          </div>
        </Link>
        <ul className="hidden lg:font-fornavbarmiddle lg:flex">
          <Link to="/" onClick={refreshPage}>
            <li className="p-4 text-xl cursor-pointer text-red-700 font-bold">
              Home
            </li>
          </Link>
          <Link to="/AboutUs">
            <li className="p-4 text-xl cursor-pointer text-red-700 font-bold">
              About Us
            </li>
          </Link>
          <li className="p-4 text-xl cursor-pointer text-red-700 font-bold">
            Reviews
          </li>
          <Link to="/PrivacyPolicy">
            <li className="p-4 text-xl cursor-pointer text-red-700 font-bold">
              {" "}
              Privacy Policy
            </li>
          </Link>
          <Link to="/Download">
            <li className="p-4 text-xl cursor-pointer  text-red-700 font-bold ">
              Downloads
            </li>
          </Link>
        </ul>

        <button
          onClick={() => {
            navigate("/Login");
          }}
          className="hidden absolute mt-2 right-32 lg:inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Log In
          </span>
        </button>
        <button
          onClick={() => {
            navigate("/Signup");
          }}
          className="hidden absolute right-4 mt-2 lg:inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Sign Up
          </span>
        </button>
        <div className="hidden mr-4 lg:flex">
          {/* <BsPerson size={20} /> */}
        </div>
        <div onClick={handleNav} className="lg:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
        </div>

        {/* Mobile menu */}
        <div
          onClick={handleNav}
          className={
            nav
              ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
              : "absolute left-[-100%]"
          }
        >
          <ul className="">
            <Link to="/" onClick={refreshPage}>
              <li className="border-b p-4 text-xl cursor-pointer">Minder</li>
            </Link>
            <Link to="/" onClick={refreshPage}>
              <li className="border-b p-4 text-xl cursor-pointer">Home</li>
            </Link>
            <Link to="/Aboutus">
              <li className="border-b p-4 text-xl cursor-pointer">About Us</li>
            </Link>
            <li className="border-b p-4 text-xl cursor-pointer">Reviews</li>
            <Link to="/PrivacyPolicy">
              <li className="border-b p-4 text-xl cursor-pointer">
                {" "}
                Privacy Policy
              </li>
            </Link>
            <Link to="/Download">
              <li className="border-b p-4 text-xl cursor-pointer">Downloads</li>
            </Link>
            <div className="m-4 ">
              <button
                onClick={() => {
                  navigate("/Login");
                }}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Log In
                </span>
              </button>

              <button
                onClick={() => {
                  navigate("/Signup");
                }}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Sign Up
                </span>
              </button>
            </div>
            <div className="flex justify-between my-6">
              <FaFacebook className="text-2xl cursor-pointer" />
              <FaTwitter className="text-2xl cursor-pointer" />
              <FaInstagram className="text-2xl cursor-pointer" />
              <FaPinterest className="text-2xl cursor-pointer" />
              <FaYoutube className="text-2xl cursor-pointer" />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

Navbar.defaultProps = {
  fontcolor: "text-red-700",
};
export default Navbar;

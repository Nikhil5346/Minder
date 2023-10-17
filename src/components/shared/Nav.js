import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase } from "react-icons/bs";

import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 h-full overflow-hidden z-1">
      <div className="container my-auto">
        <div className=" bg-black/20 max-h-[460px] backdrop-blur-2xl rounded-full w-[80px] mt-80 px-2 flex-row justify-center items-center text-2xl text-white/50">
          <Link to='home' 
          activeClass="active"
          smooth={true}
        //   spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BiHomeAlt />
          </Link>
          <Link to="settings" 
          activeClass="active"
          smooth={true}
        //   spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BiUser />
          </Link>
          <Link to="gallery" 
          activeClass="active"
          smooth={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsClipboardData />
          </Link>
          <Link to=""
        //   activeClass="active"
          smooth={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsBriefcase />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

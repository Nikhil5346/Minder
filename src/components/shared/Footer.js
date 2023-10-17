import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  function refreshPage() {
    let location = window.location.pathname;
    if (location === "/") window.location.reload(false);
  }
  return (
    <>
      <footer className="w-full bg-gradient-to-br from-yellow-50 to bg-red-100 text-gray-800 shadow-lg dark:bg-gray-800 z-50">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <Link to="/" onClick={refreshPage} className="hover:underline">
              MINDER™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
            <li>
              <Link to="/AboutUs" className="mr-4 hover:underline md:mr-6 ">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/PrivacyPolicy" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/TnC" className="mr-4 hover:underline md:mr-6">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/Download" className="hover:underline">
                Download
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;

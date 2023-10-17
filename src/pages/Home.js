import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarLoggedIn from "../components/shared/NavbarLoggedIn";
import Footer from "../components/shared/Footer";
import Feed from "../components/shared/Feed";

const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="flex-col">
        <NavbarLoggedIn />
        <div className="flex-col h-full justify-center items-center">
          <div className=" bg-gradient-to-br from-red-50 via-red-100 to-yellow-100 h-screen flex justify-center items-center">
            <Feed />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Carousel from "../components/landing-page/Carousel";
import Intro from "../components/landing-page/Intro";
import Footer from "../components/shared/Footer";

const LandingPage = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/Home");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
        <Navbar fontcolor = "text-white" />  
        <Carousel/>
        <Intro/>
        <Footer/>
    </>
  );
};

export default LandingPage;

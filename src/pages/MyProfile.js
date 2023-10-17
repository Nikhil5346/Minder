import React, { useContext, useEffect } from "react";
import NavbarLoggedIn from "../components/shared/NavbarLoggedIn";
import Banner from "../components/shared/Banner";
import Nav from "../components/shared/Nav";
import AccountSettings from "../components/shared/AccountSettings";
import Gallery from "../components/shared/Gallery";
import Footer from "../components/shared/Footer";
import profileContext from "../context/profiles/profileContext";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  let navigate = useNavigate();
  const context = useContext(profileContext);
  const { profile, getProfile } = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getProfile();
    } else {
      navigate("/Login");
    }
    // eslint-disable-next-line
  }, []);

  if (!profile) {
    // Loading state while profile data is being fetched
    return <p>Loading...</p>;
  }

  return (
    <>
      <NavbarLoggedIn />
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden bg-gradient-to-br from-red-50 via-red-100 to-yellow-100 px-3 w-full">
        <Banner/>
        <Nav/>
        <AccountSettings/>
        <Gallery/>

      </div>
      <Footer />
    </>
  );
};

export default MyProfile;

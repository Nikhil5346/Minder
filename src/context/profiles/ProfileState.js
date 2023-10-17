import React, { useState } from "react";
import ProfileContext from "./profileContext";

const ProfileState = (props) => {
  const host = "http://localhost:5000";
  const profileinitial = {};

  const [profile, setProfile] = useState(profileinitial);

  //Get My profile data
  const getProfile = async () => {
    //API call
    const response = await fetch(`${host}/api/profile/getprofile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    if (json.success) {
      setProfile(json.profile);
    } else {
    }
  };

  return (
    <ProfileContext.Provider value={{ profile, setProfile, getProfile }}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;

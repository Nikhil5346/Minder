import React, { useContext, useEffect, useState } from "react";
import NavbarLoggedIn from "../components/shared/NavbarLoggedIn";
import Footer from "../components/shared/Footer";
import { useNavigate } from "react-router-dom";
import profileContext from "../context/profiles/profileContext";

const ViewProfile = () => {
  const [canmessage, setCanmessage] = useState(false);
  const context = useContext(profileContext);
  const { profile, getProfile } = context;
  const [images, setImages] = useState([]);
  let navigate = useNavigate();
  let id = window.location.pathname.substring(13);
  const host = "http://localhost:5000";
  const profileinitial = {};
  const [userProfile, setUserProfile] = useState(profileinitial);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getProfile();
      getUserProfile();
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (profile && userProfile) {
      if (profile.mymatches) {
        let x = Array.isArray(profile.mymatches)
          ? profile.mymatches
          : [profile.mymatches];
        let n = x.length;
        for (let i = 0; i < n; i++) {
          if (x[i] === userProfile._id) {
            setCanmessage(true);
          }
        }
      }
    }
  }, [profile, userProfile]);

  useEffect(() => {
    // Update the images when userProfile changes
    if (userProfile.image) {
      setImages(userProfile.image);
    }
  }, [userProfile]);

  const message = async () => {
    const response = await fetch(`${host}/api/chat/accesschat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        userid: id,
      }),
    });
    const json = await response.json();
    if (json.success) {
      
    } else {
    }
  };

  const getUserProfile = async () => {
    //API call
    const response = await fetch(`${host}/api/profile/getprofile/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    if (json.success) {
      setUserProfile(json.profile);
    } else {
    }
  };
  return (
    <>
      <NavbarLoggedIn />
      {/* Profile section */}
      <div className=" bg-gradient-to-br from-red-50 via-red-100 to-yellow-100 py-20 px-3 w-full ">
        <div className="max-w-md mx-auto md:max-w-lg shadow-black/100">
          <div className=" p-3 rounded-2xl text-center py-5 shadow-2xl shadow-black/100">
            <div className="flex justify-center">
              <img
                className="rounded-full object-contain shadow-xl shadow-black/100 w-80 h-80"
                src={
                  Array.isArray(userProfile.image)
                    ? userProfile.image[0]
                    : userProfile.image
                }
                alt=""
              />
            </div>

            <div className="text-center mb-2">
              <h1 className="text-red-400  text-4xl mt-8 my-2 text">
                {userProfile.first_name + " " + userProfile.last_name}
              </h1>
              <div className="px-5 text-sm">
                <p className="text-center">{userProfile.bio}</p>
              </div>
              <div className="flex justify-around mt-3 px-4">
                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-red-500">
                    {Array.isArray(userProfile.image)
                      ? userProfile.image.length
                      : 1}
                  </span>
                  <span className="text-sm text-red-400">Posts</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-red-500">
                    {Array.isArray(userProfile.mymatches)
                      ? userProfile.mymatches.length
                      : 1}
                  </span>
                  <span className="text-sm text-red-400">Matches</span>
                </div>
              </div>

              <div className="w-full  flex-row px-4 mt-4">
                <button className="w-2/5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                  <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Like 💓
                  </span>
                </button>
                {canmessage && (
                  <button
                    onClick={message}
                    className="w-2/5 relative inline-flex items-center justify-center p-0.5 mb-2 ml-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
                  >
                    <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Message
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          id="gallery"
          className="py-8 lg:py-20  flex text-center justify-center"
        >
          <h1 className="mt-10 text-3xl font-semibold">Image Gallery</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 rounded-2xl my-2">
          {images &&
            images.map((imageUrl) => (
              <img
                key={imageUrl}
                className="rounded-2xl"
                alt="User posts"
                src={imageUrl}
              />
            ))}
        </div>
      </div>
      {/* Profile section */}

      <Footer />
    </>
  );
};

export default ViewProfile;

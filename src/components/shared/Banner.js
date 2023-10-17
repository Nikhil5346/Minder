import React, { useContext, useEffect } from "react";
import profileContext from "../../context/profiles/profileContext";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  let navigate = useNavigate();
  const context = useContext(profileContext);
  const { profile, getProfile } = context;
  const imglink = profile
    ? Array.isArray(profile.image)
      ? profile.image
      : [profile.image]
    : "";

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getProfile();
    } else {
      navigate("/Login");
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (profile === null || profile === undefined) {
      navigate("/CreateProfile");
    }
  }, []);
  return (
    <div id="home" className="py-8 lg:py-24 lg:h-screen flex items-center">
      <div className="h-screen bg-gradient-to-br from-red-50 via-red-100 to-yellow-100 py-20 px-3 w-full ">
        <div className="max-w-md mx-auto md:max-w-lg shadow-black/100">
          <div className=" p-3 rounded-2xl text-center py-5 shadow-2xl shadow-black/100">
            <div className="flex justify-center">
              <img
                className="rounded-full object-contain shadow-xl shadow-black/100 w-80 h-80"
                src={imglink[0]}
                alt=""
              />
            </div>

            <div className="text-center mb-2">
              <h1 className="text-red-400  text-4xl mt-8 my-2 text">
                {profile.first_name + " " + profile.last_name}{" "}
              </h1>
              <div className="px-5 text-sm">
                <p className="py-5 text-center">{profile.bio}</p>
              </div>
              <div className="flex justify-around mt-3 px-4">
                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-red-500">
                    {Array.isArray(profile.image) ? profile.image.length : 1}
                  </span>
                  <span className="text-sm text-red-400">Posts</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-red-500">
                    {Array.isArray(profile.mymatches)
                      ? profile.mymatches.length
                      : 1}
                  </span>
                  <span className="text-sm text-red-400">Matches</span>
                </div>
              </div>

              <div className="w-full  flex-row px-4 mt-4">
                <button className="w-2/5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                  <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Update Profile
                  </span>
                </button>
                <button className="w-2/5 relative inline-flex items-center justify-center p-0.5 mb-2 ml-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                  <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Gallery
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

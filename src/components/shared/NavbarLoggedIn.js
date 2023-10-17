import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileContext from "../../context/profiles/profileContext";
import {
  SearchIcon,
  // PlusCircleIcon,
  // UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const NavbarLoggedIn = () => {
  const [chats, setChats] = useState([]);
  const [Search, setSearch] = useState("");
  const [profiles, setProfiles] = useState([]);
  const context = useContext(profileContext);
  const { profile, getProfile } = context;
  let navigate = useNavigate();
  const imglink = profile
    ? Array.isArray(profile.image)
      ? profile.image
      : [profile.image]
    : "";
  const host = "http://localhost:5000";

  useEffect(() => {
    if (profile === null || profile === undefined) {
      navigate("/CreateProfile");
    }
  }, [navigate, profile]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getProfile();
      getAlltheProfile();
      fetchchats();
    } else {
      navigate("/Login");
    }
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   if (chats.length > 0) console.log(chats);
  //   // eslint-disable-next-line
  // }, [chats]);

  const fetchchats = async () => {
    //API Call
    const response = await fetch(`${host}/api/chat/fetchchats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    if (json.success) {
      setChats(json.finalres);
    } else {
    }
  };

  const handleSearch = () => {
    let n = profiles.length;
    for (let i = 0; i < n; i++) {
      if (profiles[i].username === Search) {
        navigate(`/ViewProfile/${profiles[i]._id}`);
        window.location.reload(false);
        return;
      }
    }
    console.log("No such user found !");
  };

  //Get All profile data except your own
  const getAlltheProfile = async () => {
    //API call
    const response = await fetch(`${host}/api/profile/getalltheprofile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    // console.log(json);
    if (json.success) {
      setProfiles(json.profiles);
    } else {
    }
  };
  function refreshPage() {
    let location = window.location.pathname;
    if (location === "/") window.location.reload(false);
    else {
      navigate("/");
    }
  }

  return (
    <>
      <div className=" border-b bg-gradient-to-br from-yellow-50 to bg-red-100 shadow-lg shadow-black/30 sticky top-0 z-50 w-ful">
        <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
          <Link to="/" onClick={refreshPage}>
            <div className="mt-4 text-sm inline-flex">
              <h1 className="text-3xl hidden sm:inline-flex lg:text-4xl pl-5 lg:pl-3 font-semibold  cursor-pointer font-fornavbar text-red-black">
                Minder
              </h1>
              <h1 className="text-3xl sm:2xl md:3xl lg:text-4xl pl-5 lg:pl-3 font-semibold  cursor-pointer font-fornavbar text-red-black">
                💋
              </h1>
            </div>
          </Link>

          {/* {Middle} */}
          <div className="max-w-xs ml-10">
            <div className="relative mt-1 p-3 rounded-md">
              <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-500" />
              </div>
              <input
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                id="searchbutton"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="bg-red-50 block w-full pl-10 sm:text-sm
          border-gray-300 focus:ring-black focus:border-black rounded-md px-12 py-2"
                type="text"
                placeholder="Search using username"
              />
            </div>
          </div>

          {/* {Right} */}
          <div className="flex place-items-center justify-end space-x-4 cursor-pointer">
            <HomeIcon onClick={refreshPage} className="navBtn " />
            <MenuIcon className="h-6 md:hidden cursor-pointer navBtn red" />
            <PaperAirplaneIcon
              onClick={() => {
                let chatdropdown = document.getElementById("chatdropdown");
                chatdropdown.classList.toggle("hidden");
              }}
              className="navBtn"
            />
            <HeartIcon className="navBtn" />

            <img
              onClick={() => {
                //Enable dropdown show/hide fucntionality
                let dropdown = document.getElementById("dropdown");
                dropdown.classList.toggle("hidden");
              }}
              src={imglink[0]}
              className="h-10 rounded-full mx-3 inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out"
              alt="Profile pic"
            />
            <div className="font-semibold hidden md:block">
              {profile.username}
            </div>
          </div>

          {/* Recent chats section */}
          {/* <div
            id="chatdropdown"
            className="absolute hidden right-72 top-16 rounded-md bg-white p-4 px-8 mt-0.5"
          >
            <div className="flex flex-col divide-y-2 divide-black">
              <div className="py-2 cursor-pointer">
                {(chats.length === 0) ? (
                  <div className="font-medium">No recent chats</div>
                ) : (
                  <div>
                    {chats.map((chat) => {
                      console.log(chat)
                      return (
                        <div key={chat}>
                          <div className="font-medium">{}</div>
                          <div className="font-light">{}</div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div> */}
          {/* Recent chats section ends */}

          <div
            id="dropdown"
            className="absolute hidden right-48 top-16 bg-gray-200 p-4 px-8 mt-1"
          >
            <div className="flex flex-col divide-y-2 divide-black">
              <div
                onClick={() => {
                  navigate("/MyProfile");
                }}
                className="py-2 cursor-pointer"
              >
                My profile
              </div>
              <div
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/Login");
                }}
                className="py-2 cursor-pointer"
              >
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarLoggedIn;

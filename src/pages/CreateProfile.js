import React, { useEffect } from "react";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/Login");
    }
    // eslint-disable-next-line
  }, []);
  function errormessage(message) {
    let dropdown = document.getElementById("errormessage");
    dropdown.innerHTML = message;
    dropdown.classList.toggle("hidden");
  }

  const host = "http://localhost:5000";
  function toggleDropdown() {
    let dropdown = document.getElementById("dropdownmenu");
    dropdown.classList.toggle("hidden");
  }

  // console.log(Array.from(data));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object using the form data after the form has been submitted
    const form = document.getElementById("form");
    const data = new FormData(form);
    const response = await fetch(`${host}/api/profile/createprofile`, {
      method: "POST",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
      body: data,
    });

    const json = await response.json();
    if (json.success) {
      //Redirect to My Profile page

      navigate("/MyProfile");
    } else {
      errormessage(json.error);
      // console.log(json.error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-red-50 via-red-100 to-yellow-100 min-h-screen flex items-center justify-center">
        <div className="p-5  mb-8 mt-24  rounded-lg border-dashed border-2 border-red-700    flex justify-center items-center h-5/6 w-9/12">
          <form
            id="form"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            className="w-3/6 flex flex-col  "
          >
            <div className="text-5xl tex justify-center items-center align-middle mt-4 mb-6 mx-auto font-light text-rose-700 font-fornavbar">
              Tell us about yourself 💞 !!
            </div>

            <div className="mb-6 ">
              <label
                htmlFor="username"
                className="mb-2 text-sm font-medium text-rose-700 dark:text-white"
              >
                Username
              </label>
              <input
                className="bg-gray-50  text-gray-900 text-sm rounded-lg w-full p-2.5 border focus:ring-red-500 focus:border-red-500"
                type="username"
                id="username"
                name="username"
                placeholder="Select username"
                required
              />
            </div>

            <div className="flex flex- mx-auto w-full">
              <div className="mb-6 w-full mr-2">
                <label
                  htmlFor="name"
                  className="mb-2 text-sm font-medium text-rose-700 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="name"
                  id="first_name"
                  name="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter First name"
                  required
                />
              </div>
              <div className="mb-6 w-full ml-1">
                <label
                  htmlFor="name"
                  className="mb-2 text-sm font-medium text-rose-700 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="name"
                  id="last_name"
                  name="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Last name"
                />
              </div>
            </div>
            <div className="w-full mb-6">
              <label
                className="block mb-2 text-sm font-medium text-rose-700 dark:text-white"
                htmlFor="user_avatar"
              >
                Profile Picture
              </label>
              <input
                className="block w-full py-2 px-1 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 h-full"
                aria-describedby="user_avatar_help"
                id="profileImg"
                name="profileImg"
                type="file"
              />
              <div
                className="mt-1 text-sm text-red-500 dark:text-gray-300"
                id="user_avatar_help"
              >
                A profile picture is essential to verify that you are a human
                using this site and not an alien trying to mate with the human
                population !
              </div>
            </div>
            <label
              className="block mb-2 text-sm font-medium text-rose-700 dark:text-white"
              htmlFor="user_avatar"
            >
              Gender
            </label>
            <div className="flex items-center mb-4">
              <input
                id="male"
                type="radio"
                name="gender"
                value="male"
                className="w-4 mr-2 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="gender"
                className="block ml-2 text-sm font-medium text-rose-700 dark:text-gray-300"
              >
                Male
              </label>
              <input
                id="female"
                type="radio"
                name="gender"
                value="female"
                className="w-4 ml-16 mr-2 h-4 border-gray-300 focus:ring-2 focus:ring-red-300 dark:focus:ring-red-600 dark:focus:bg-red-600 dark:bg-red-700 dark:border-red-600"
              />
              <label
                htmlFor="gender"
                className="block ml-2 text-sm font-medium text-rose-700 dark:text-gray-300"
              >
                Female
              </label>
              <input
                id="others"
                type="radio"
                name="gender"
                value="others"
                className="w-4 ml-16 mr-2 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="gender"
                className="block ml-2 text-sm font-medium text-rose-700 dark:text-gray-300"
              >
                Others
              </label>
            </div>

            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="flex justify-center items-center p-1.5 py-2 mb-2 mr-2 overflow-hidden text-sm font-medium text-rose-700 rounded-lg group bg-gradient-to-r from-red-200 via-red-300 to-yellow-100 hover:bg-gradient-to-bl hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              type="button"
            >
              I prefer{" "}
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdownmenu"
              className="relative text-center justify-center pb-0 mb-0 top-0 right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
            >
              <ul
                className="w-full text-sm bg-gray-300 rounded-lg text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li className="py-1.5">
                  <input
                    type="radio"
                    name="dating_prefrence"
                    id="male"
                    value="male"
                    className="inline-block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  />
                  <label htmlFor="men" className="p-2">
                    Men
                  </label>
                </li>
                <li className="py-1.5">
                  <input
                    type="radio"
                    name="dating_prefrence"
                    id="female"
                    value="female"
                    className="inline-block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  />
                  <label htmlFor="women" className="p-2">
                    Women
                  </label>
                </li>
                <li className="py-1.5">
                  <input
                    type="radio"
                    name="dating_prefrence"
                    id="gay"
                    value="gay"
                    className="inline-block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  />
                  <label htmlFor="gay" className="p-2">
                    Gay
                  </label>
                </li>
                <li className="py-1.5">
                  <input
                    type="radio"
                    name="dating_prefrence"
                    id="lesbians"
                    value="lesbian"
                    className="inline-block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  />
                  <label htmlFor="lesbians" className="p-2">
                    Lesbians
                  </label>
                </li>
                <li className="py-1.5">
                  <input
                    type="radio"
                    name="dating_prefrence"
                    id="bisexual"
                    value="bisexual"
                    className="inline-block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  />
                  <label htmlFor="bisexual" className="p-2">
                    Bisexual
                  </label>
                </li>
                <li className="py-1.5">
                  <input
                    type="radio"
                    name="dating_prefrence"
                    id="queer"
                    value="queer"
                    className="inline-block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  />
                  <label htmlFor="queer" className="p-2">
                    Queer
                  </label>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <label
                htmlFor="bio"
                className="mb-2 text-sm font-medium text-rose-700 dark:text-white"
              >
                Your Bio
              </label>
              <textarea
                name="bio"
                id="bio"
                cols="30"
                rows="10"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Bio defines you !"
              ></textarea>
            </div>
            <div className="mb-6">
              <label
                htmlFor="date_of_birth"
                className="mb-2 text-sm font-medium text-rose-700 dark:text-white"
              >
                Date of birth
              </label>
              <input
                type="date"
                id="date_of_birth"
                name="date_of_birth"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            {/* errormessage */}
            <div
              className="text-sm text-center font-bold text-red-950 pb-3 mb-2 hidden"
              id="errormessage"
            ></div>
            {/* errormessage */}
            <button className="flex justify-center items-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="w-full flex justify-center items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-rose-700">
                Submit
              </span>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateProfile;
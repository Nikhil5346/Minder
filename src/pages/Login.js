import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import { useState } from "react";
import loginimg from "../images/loginimg.jpg";

const Login = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/Home");
    }
    // eslint-disable-next-line
  }, []);
  function errormessage(message) {
    let dropdown = document.getElementById("errormessage");
    dropdown.innerHTML = message;
    dropdown.classList.toggle("hidden");
  }

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    if (json.success) {
      //Save the auth token and redirect

      localStorage.setItem("token", json.authToken);
      navigate("/Home");
    } else {
      errormessage(json.error);
    }
  };

  return (
    <>
      <Navbar />

      {/* New section */}

      <section className="bg-gradient-to-br from-red-50 via-red-100 to-yellow-200 min-h-screen flex items-center justify-center">
        {/* <!-- login container --> */}
        <div className="bg-gradient-to-br from-red-150 via-red-150 to-yellow-50 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          {/* <!-- form --> */}
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-red-400 ">Login</h2>
            <p className="text-xs mt-4 text-red-300">
              If you are already a member, easily log in
            </p>

            <form
              action="post"
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <input
                className="p-2 mt-8 rounded-xl border focus:ring-red-400 focus:border-red-400"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                value={credentials.email}
                onChange={onChange}
                required
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full focus:ring-red-400 focus:border-red-400"
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  placeholder="Password"
                  onChange={onChange}
                  required
                />

                {/* errormessage */}
                <div
                  className="text-sm text-center font-bold text-red-950 pb-3 hidden"
                  id="errormessage"
                ></div>
                {/* errormessage */}

                <svg
                  onClick={() => {
                    //Enable show password functionaltiy
                    let psswd = document.getElementById("password");
                    psswd.type =
                      psswd.type === "password" ? "text" : "password";
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
              <button className=" bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400   rounded-xl text-white py-2 hover:scale-105 duration-300">
                Login
              </button>
            </form>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              {/* <hr /> */}
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            <button className="bg-white border-2 py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-red-300">
              <svg
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="25px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              Login with Google
            </button>

            <div className="mt-5 text-xs border-b border-red-500 py-4 text-red-300">
              <Link to="/ForgotPass"> Forgot your password ?</Link>
              {/* <a href="#">Forgot your password?</a> */}
            </div>

            <div className="mt-3 text-xs flex justify-between items-center text-red-300">
              <p>New to Minder?</p>
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                <Link className="" to="/Signup">
                  Register
                </Link>
              </button>
            </div>
          </div>

          {/* <!-- image --> */}
          <div className="md:block hidden w-1/2">
            <img className="rounded-2xl" src={loginimg} alt="Couple" />
          </div>
        </div>
      </section>
      {/* </> */}

      {/* New section */}

      {/* <div className="h-screen flex justify-center bg-gradient-to-br from-red-200 via-red-300 to-yellow-200">
        <div className="rounded-lg mt-28 flex justify-center items-center h-5/6 w-3/6">
          <form className="w-3/6 flex flex-col" onSubmit={handleSubmit}>
            <div className="text-5xl justify-center items-center align-middle mb-10 mx-auto font-semibold text-gray-950">
              Sign In
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={credentials.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Email"
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onChange}
                required
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <div
              className="text-sm text-center font-bold text-red-950 pb-3 hidden"
              id="errormessage"
            >
            </div>
            <button className="flex justify-center items-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="w-full flex justify-center items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Sign in
              </span>
            </button>
            <div className="text-black font-bold ml-0">
              <Link to="/ForgotPass"> Forgot Password ?</Link>
            </div>
            <button
              type="button"
              className="mt-4 flex justify-center items-center text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fillRule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clipRule="evenodd"
                />
              </svg>
              Sign in with Google
            </button>
            <div className="text-black font-bold m-auto">
              New to Minder ?
              <Link className="ml-4" to="/Signup">
                SignUp
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer /> */}
    </>
  );
};

export default Login;

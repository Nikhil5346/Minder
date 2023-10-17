import React from "react";
import Avatar from "../images/avatar.svg";
import chaticon from "../images/chaticon.svg";

const Chat = () => {
  const contacts = [
    {
      name: "Pranjul",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Priya Pachauri",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Priya Kumari",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Bhoomika",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Shirley Setia",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Parmatma",
      status: "Available",
      img: Avatar,
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-red-50 via-red-100 to-yellow-100  flex justify-center items-center ">
        {/* Dashboard */}
        <div className="w-screen flex">
          <div className="w-1/4 border border-red-600  bg-rose-50 rounded-2xl">
            <div className="flex mx-14 items-center my-8">
              <div className="border border-red-300 p-[2px] rounded-full">
                <img src={Avatar} alt="" width={75} height={75} />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl">Khaliq Hussain</h3>
                <p className="text-lg font-light">My Account</p>
              </div>
            </div>
            {/* <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/> */}
            <hr className="h-0.5 bg-red-200 " />
            <div className="mx-14 mt-10">
              <div className="text-black-600 text-2xl">Messages</div>

              <div>
                {contacts.map(({ name, status, img }) => {
                  return (
                    <div className="flex items-center py-8 border-b border-b-gray-300">
                      <div className="cursor-pointer flex items-center">
                        <div className="flex">
                          <img src={img} width={60} height={60} />
                        </div>
                        <div className="ml-6">
                          <h3 className="text-lg font-semibold">{name}</h3>
                          <p className="text-sm font-light text-gray-600">
                            {status}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="sm:w-3/4 xl:w-1/2  bg-white flex flex-col items-center">
            <div className="w-3/4 bg-gradient-to-br from-red-50 via-red-100 to-red-200 h-20 mt-10 rounded-full flex items-center px-14">
              <div className="cursor-pointer">
                <img src={Avatar} width={60} height={60} alt="" />
              </div>
              <div className="ml-6 mr-auto ">
                <h3 className="text-lg">Alexander</h3>
                <p className="text-sm font-light text-gray-600">online</p>
              </div>
              <div className="cursor-pointer">
                <img src={chaticon} alt="" className="h-14 w-14" />
              </div>
            </div>
            <div className="h-3/4 border w-full overflow-y-scroll mt-7 border-b">
              <div className=" px-14 py-14">
                <div className="max-w-[40%] bg-rose-100 rounded-b-xl rounded-tr-xl p-4 mb-6 shadow-lg shadow-black/80">
                  Architecto modi animi, itaque ratione recusandae vitae nobis
                  accusantium temporibus magnam sequi similique qui a numquam
                  minima.
                </div>
                <div className="max-w-[40%] bg-rose-200 rounded-b-xl rounded-tl-xl p-4 ml-auto text-white shadow-lg shadow-black/80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  molestiae consectetur porro necessitatibus?
                </div>
                <div className="max-w-[40%] bg-rose-100 rounded-b-xl rounded-tr-xl p-4 mb-6 shadow-lg shadow-black/80">
                  Architecto modi animi, itaque ratione recusandae vitae nobis
                  accusantium temporibus magnam sequi similique qui a numquam
                  minima.
                </div>
                <div className="max-w-[40%] bg-rose-200 rounded-b-xl rounded-tl-xl p-4 ml-auto text-white shadow-lg shadow-black/80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Von
                  Eaque molestiae consectetur porro necessitatibus?
                </div>
                <div className="max-w-[40%] bg-rose-100 rounded-b-xl rounded-tr-xl p-4 mb-6 shadow-lg shadow-black/80">
                  Architecto modi animi, itaque ratione recusandae vitae nobis
                  accusantium temporibus magnam sequi similique qui a numquam
                  minima.
                </div>
                <div className="max-w-[40%] bg-rose-200 rounded-b-xl rounded-tl-xl p-4 ml-auto text-white shadow-lg shadow-black/80">
                  Lorem ipsum dolor sit adipisicing elit. Eaque molestiae
                  consectetur porro necessitatibus?
                </div>
              </div>
            </div>

            <div className="p-14 w-full flex items-center">
              <input
                type="text"
                placeholder="Type a message"
                className="w-3/4 rounded-2xl"
              />
            </div>
          </div>

          <div className=" sm:hidden xl:block w-1/4 border border-red-600  bg-rose-50 rounded-2xl items-center text-center">
            <div className=" items-center my-8 ">
              <img
                className="mx-[39%] b border border-red-300 p-[2px] rounded-full"
                src={Avatar}
                alt=""
                width={110}
                height={110}
              />
              {/* <hr className='h-0.5 bg-red-200 ' /> */}
              <div className="ml-4 my-8">
                <h3 className="text-2xl">Alexander</h3>
                <p className="text-lg font-light my-1 italic">
                The road to success is always under construction !!!
                </p>
              </div>
            </div>
            <hr className="h-0.5 bg-red-200 " />
            <div className=" my-5 flex justify-around">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Report & Block
                </span>
              </button>
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Profile
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Dashboard */}
        {/* <div>DASHBOARD</div> */}
      </div>
      {/* <section>Chat</section> */}
      {/* <div>Chat</div> */}
    </>
  );
};

export default Chat;

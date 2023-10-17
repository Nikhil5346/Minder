import React from "react";
import dp from "../../images/bgm.jpg"

const Post = () => {
  return (
    <>
      <div className="border-2 border-black flex h-4/6 w-2/6 rounded-md">
        <img src={dp} alt="Pictue" className="overflow-hidden object-cover" />
        <div className="z-2 text-white font-semibold inline-block absolute bottom-5">Caption</div>
      </div>
    </>
  );
};

export default Post;

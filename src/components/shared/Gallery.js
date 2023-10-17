import React, { useContext, useEffect, useState } from "react";
import profileContext from "../../context/profiles/profileContext";
import { useNavigate } from "react-router-dom";
import uploadimg from "../../images/upload.png"

const Gallery = () => {
  const [images, setImages] = useState([]);
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

  useEffect(() => {
    // Update the images when userProfile changes
    if (profile.image) {
      setImages(profile.image);
    }
  }, [profile]);
  return (
    <>
      <div
        id="gallery"
        className="py-8 lg:py-20  flex text-center justify-center"
      >
        <h1 className="mt-10 text-3xl font-semibold">Image Gallery</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 rounded-2xl my-2">
        {images &&
          images.map((imageUrl) => (
            <img key={imageUrl} className="rounded-2xl" alt="User posts" src={imageUrl} />
          ))}
      </div>
      <div className="m-5 my-10
       grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 rounded-2xl">
        <img className="rounded-2xl" alt="User posts" src={uploadimg} />
      </div>
    </>
  );
};

export default Gallery;

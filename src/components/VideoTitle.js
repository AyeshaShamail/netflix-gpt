import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-[100%] aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-black text-5xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-10 text-xl m-2 rounded-s hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-600 text-white p-2 px-8 text-xl m-2 rounded-s hover:bg-opacity-80">
          ⓘ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

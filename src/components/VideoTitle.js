import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-14">
      <h1 className="font-black text-5xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl m-2 bg-opacity-50 rounded-s">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-10 text-xl m-2 bg-opacity-50 rounded-s">
          ⓘ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

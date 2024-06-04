import React from "react";

const Version = () => {
  return (
    <div className="flex border-2 border-gray-700 px-5 py-3 rounded-3xl items-center w-fit">
      <div className=" w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></div>
      <p className=" inline font-bold text-gray-500 text-xs md:text-sm">
        Beta 0.0.1
      </p>
    </div>
  );
};

export default Version;

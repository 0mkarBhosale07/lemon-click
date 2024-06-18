"use client";
import React, { useEffect, useState } from "react";

const Version = () => {
  const [isAnimating, setIsAnimating] = useState(false); // State for animation control

  useEffect(() => {
    // const intervalId = setInterval(() => {
    //   setIsAnimating(!isAnimating); // Toggle animation state
    // }, 1000); // Animate every 1 second
    setIsAnimating(!isAnimating);
    // return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [2000]); // Empty dependency array: run effect only once

  return (
    <div className="flex border-2 border-gray-700 px-5 py-3 rounded-3xl items-center w-fit mt-5">
      <div
        className={`w-2 h-2  rounded-full mr-2 animate-ping ${
          isAnimating ? "bg-green-500" : "bg-yellow-500"
        }`}
      />
      <p className="inline font-bold text-gray-500 text-xs md:text-sm">
        {isAnimating ? "Stable" : "Server"}
      </p>
    </div>
  );
};

export default Version;

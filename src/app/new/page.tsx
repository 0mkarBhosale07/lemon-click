import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Version from "@/components/Version";
import React from "react";

const NewFeatures = () => {
  return (
    <div className="">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="new-features mt-10">
        <h1 className="text-center text-3xl font-bold text-gray-700">
          New Features
        </h1>
        <div className="version flex justify-center mt-5">
          <Version />
        </div>
        <div className="tags text-center  mt-5">
          <h1 className="my-2">Beta Features Includes</h1>
          <p className="my-2">Open In App Link Creation</p>
          <p className="my-2">Google Login</p>
        </div>
      </div>
      <div className="my-2">
        <Footer />
      </div>
    </div>
  );
};

export default NewFeatures;

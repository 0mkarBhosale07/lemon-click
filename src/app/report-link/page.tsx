import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import ReportForm from "./ReportForm";

const page = () => {
  return (
    <div className="mt-5">
      <div className="navbar">
        <Navbar />
      </div>
      <main className="flex justify-center my-10">
        <ReportForm />
      </main>
      <div className="my-2">
        <Footer />
      </div>
    </div>
  );
};

export default page;

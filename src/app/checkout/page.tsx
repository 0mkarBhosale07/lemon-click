import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import React from "react";
import Checkout from "./Checkout";

const CheckoutPage = () => {
  return (
    <>
      <div className="navbar mt-5">
        <Navbar />
      </div>
      <main>
        <Checkout />
      </main>
      <div className="my-2">
        <Footer />
      </div>
    </>
  );
};

export default CheckoutPage;

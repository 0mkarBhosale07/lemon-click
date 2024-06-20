import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shipping Policy",
};

const ShipingPolicy = () => {
  return (
    <div className="mt-5">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">Shipping Policy</h1>
      </div>
      <main className="container mx-auto px-4 py-10 text-white">
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className=" leading-relaxed">
            Welcome to <span className="font-semibold">Lemon Click</span>. This
            Shipping Policy outlines the terms and conditions regarding the
            activation of digital products purchased from our website.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">2. Order Processing Time</h2>
          <p className=" leading-relaxed">
            All orders for digital products are processed within 24 hours.
            Account activation will be completed within this time frame. Orders
            are not processed or activated on weekends or holidays.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">3. Notification</h2>
          <p className=" leading-relaxed">
            Once your account has been activated, you will receive a
            confirmation email with details about how to access your digital
            product. Please ensure that the email address you provide during
            checkout is accurate to avoid any delays.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">4. Refund Policy</h2>
          <p className=" leading-relaxed">
            For information about our refund policy, please refer to our{" "}
            <Link href="/refund-policy" className="text-blue-600 underline">
              Refund Policy
            </Link>{" "}
            page. Please note that refunds for digital products are processed
            according to the terms outlined on that page.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
          <p className=" leading-relaxed">
            If you have any questions or concerns about our Shipping Policy,
            please contact us on{" "}
            <Link
              href="mailto:lemonclick0@gmail.com"
              className="text-blue-600 underline"
            >
              Mail
            </Link>
            .
          </p>
        </section>
      </main>
      <div className="my-2">
        <Footer />
      </div>
    </div>
  );
};

export default ShipingPolicy;

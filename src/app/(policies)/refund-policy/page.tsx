import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Refund Policy",
};

const RefundPolicy = () => {
  return (
    <div className="mt-5">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">Refund Policy</h1>
      </div>
      <main className="container mx-auto px-4 py-10 text-white">
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className=" leading-relaxed">
            At <span className="font-semibold">Lemon Click</span>, we strive to
            provide the best services to our users. This Refund Policy outlines
            the conditions under which refunds are processed and the procedure
            to request a refund.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">2. Eligibility for Refund</h2>
          <p className=" leading-relaxed">
            Refunds are applicable for specific cases where users are
            dissatisfied with our services. The refund amount will be 57.8% of
            the paid amount. Please note that certain terms and conditions apply
            for the eligibility of a refund.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">3. Refund Process</h2>
          <p className=" leading-relaxed">
            To request a refund, please contact our support team at{" "}
            <Link
              href="mailto:lemonclick0@gmail.com"
              className="text-blue-600 underline"
            >
              Mail
            </Link>{" "}
            with your order details and reason for the refund request. Our team
            will review your request and determine eligibility based on the
            provided information.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">4. Refund Amount</h2>
          <p className=" leading-relaxed">
            If your refund request is approved, you will receive 57.8% of the
            paid amount. The refund will be processed to the original payment
            method used during the purchase.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">5. Refund Timeframe</h2>
          <p className=" leading-relaxed">
            Once approved, the refund will be processed within 5 to 7 working
            days. Please note that the time taken for the refund to reflect in
            your account may vary depending on your bank or payment provider.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
          <p className=" leading-relaxed">
            If you have any questions or concerns about our Refund Policy,
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

export default RefundPolicy;

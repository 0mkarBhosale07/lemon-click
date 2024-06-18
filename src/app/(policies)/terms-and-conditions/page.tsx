import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

const TermsConditions = () => {
  return (
    <div className="mt-5">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">Terms & Conditions</h1>
      </div>
      <main className="container mx-auto px-4 py-10">
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl text-white font-bold mb-4">
            1. Introduction
          </h2>
          <p className="text-white leading-relaxed">
            Welcome to <span className="font-semibold">Lemon Click</span>. These
            Terms and Conditions govern your use of our website and services. By
            accessing or using our services, you agree to comply with and be
            bound by these terms.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl text-white font-bold mb-4">
            2. Subscription and Payment
          </h2>
          <p className="text-white leading-relaxed">
            <span className="font-semibold">Lemon Click</span> offers special
            features and services that require a subscription. The subscription
            fee is charged on a monthly basis and is non-refundable. By
            subscribing, you authorize us to charge your payment method on a
            recurring monthly basis.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl text-white font-bold mb-4">
            3. Account Registration and Security
          </h2>
          <p className="text-white leading-relaxed">
            To access certain features of our services, you must register for an
            account using Google Login. You are responsible for maintaining the
            confidentiality of your account information and for all activities
            that occur under your account. We prioritize the security of your
            data and use industry-standard measures to protect it.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl text-white font-bold mb-4">
            4. Use of Services
          </h2>
          <p className="text-white leading-relaxed">
            You agree to use our services only for lawful purposes and in
            accordance with these Terms and Conditions. You must not use our
            services in any way that could harm, disable, overburden, or impair
            our services or interfere with any other party’s use of our
            services.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl text-white font-bold mb-4">
            5. Intellectual Property
          </h2>
          <p className="text-white leading-relaxed">
            All content, features, and functionality provided through our
            services are the exclusive property of{" "}
            <span className="font-semibold">Lemon Click</span> and are protected
            by intellectual property laws. You may not use any of our
            intellectual property without our prior written consent.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl text-white font-bold mb-4">
            6. Limitation of Liability
          </h2>
          <p className="text-white leading-relaxed">
            To the fullest extent permitted by law,{" "}
            <span className="font-semibold">Lemon Click</span> shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly, or any loss of data, use, goodwill,
            or other intangible losses resulting from your use of our services.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl text-white font-bold mb-4">
            7. Changes to Terms and Conditions
          </h2>
          <p className="text-white leading-relaxed">
            We reserve the right to modify these Terms and Conditions at any
            time. Any changes will be effective immediately upon posting on our
            website. Your continued use of our services after any such changes
            constitutes your acceptance of the new Terms and Conditions.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl text-white font-bold mb-4">8. Contact Us</h2>
          <p className="text-white leading-relaxed">
            If you have any questions or concerns about these Terms and
            Conditions, please contact us on{" "}
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

export default TermsConditions;

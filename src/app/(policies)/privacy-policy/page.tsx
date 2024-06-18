import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const PrivacyPolicy = () => {
  return (
    <div className="mt-5">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">Privacy Policy</h1>
      </div>
      <main className="container mx-auto px-4 py-10 text-white">
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className=" leading-relaxed">
            Welcome to <span className="font-semibold">Lemon Click</span>. We
            value your privacy and are committed to protecting your personal
            information. This Privacy Policy outlines how we collect, use, and
            safeguard your data when you use our services.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
          <p className=" leading-relaxed">
            We collect information that you provide to us directly when you
            register for an account, use our services, or communicate with us.
            This includes your name, email address, and any other information
            you choose to provide. We also collect information automatically
            through the use of cookies and similar technologies.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">
            3. How We Use Your Information
          </h2>
          <p className=" leading-relaxed">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside  leading-relaxed">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and manage subscriptions</li>
            <li>
              Communicate with you, including responding to your inquiries
            </li>
            <li>
              Analyze how our services are used and improve user experience
            </li>
            <li>
              Ensure the security of our services and protect against fraud
            </li>
          </ul>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
          <p className=" leading-relaxed">
            We prioritize the security of your data and use industry-standard
            measures to protect it. However, please be aware that no method of
            transmission over the Internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
          <p className=" leading-relaxed">
            We may use third-party services to help us operate our services,
            such as payment processors and analytics providers. These third
            parties may have access to your information to perform specific
            tasks on our behalf and are obligated not to disclose or use it for
            any other purpose.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
          <p className=" leading-relaxed">
            You have the right to access, update, or delete your personal
            information at any time. If you wish to exercise these rights,
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
        <section className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">
            7. Changes to This Privacy Policy
          </h2>
          <p className=" leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and the updated policy will be
            effective immediately upon posting. Your continued use of our
            services after any changes indicates your acceptance of the updated
            Privacy Policy.
          </p>
        </section>
        <section className="bg-gray-900 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
          <p className=" leading-relaxed">
            If you have any questions or concerns about this Privacy Policy,
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

export default PrivacyPolicy;

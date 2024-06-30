import Link from "next/link";
import React from "react";
import Version from "./Version";
import { Omkar } from "./Omkar";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" py-8 md:py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <span className="text-lg font-bold">Lemon Click</span>
          </Link>
          <p className="text-gray-500 dark:text-gray-400">
            Create open in app links effortlessly and easy!
          </p>
        </div>
        <nav className="grid gap-2">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            About
          </Link>
          {/* <Link
            href="/pricing"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Pricing
          </Link> */}
          <Link
            href="/dashboard"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Dashboard
          </Link>
        </nav>
        {/* <nav className="grid gap-2">
          <h4 className="text-lg font-semibold">Policy Pages</h4>
          <Link
            href="/privacy-policy"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Terms & Conditions
          </Link>
          <Link
            href="/refund-policy"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Refund Policy
          </Link>
          <Link
            href="/shipping-policy"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Shipping Policy
          </Link>
        </nav> */}
      </div>
      <div className="container max-w-7xl mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          &copy; {currentYear} Lemon Click. All rights reserved.
        </p>
        <p className="text-gray-500 underline underline-offset-4 hover:cursor-pointer text-sm">
          <Link href="/report-link">Report Link</Link>
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Developed with ❤️ by
          <Omkar />
        </p>
        {/* <nav className="flex gap-4">
          <Link
            href="/privacy-policy"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 text-sm"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 text-sm"
            prefetch={false}
          >
            Terms & Conditions
          </Link>
          <Link
            href="/refund-policy"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 text-sm"
            prefetch={false}
          >
            Refund/Cancellation Policy
          </Link>
        </nav> */}
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div className="flex flex-col items-start gap-2">
          <h4 className="text-lg font-semibold">Contact</h4>
          <p className="text-gray-500 dark:text-gray-400">
            Building-64, Bypass Road, Jaysingpur, Dist- Kolhapur, Maharashtra
          </p>
          <p className="text-gray-500 dark:text-gray-400">416101</p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            +91 7248965484
          </p>
          <p className="text-gray-500 dark:text-gray-400">(555) 555-5555</p>
          <Version />
        </div> */
}

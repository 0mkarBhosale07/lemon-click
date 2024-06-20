import Navbar from "@/components/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing",
};

const PricingPage = () => {
  return (
    <div className="mt-5">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">Pricing</h1>
      </div>
      <main>
        <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
          <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Simple, transparent pricing
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Unlock all features including unlimited posts for your blog.
            </p>
          </div>
          <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
            <div className="grid gap-6">
              <h3 className="text-xl font-bold sm:text-2xl">
                What&apos;s included in the PRO plan
              </h3>
              <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                <li className="flex items-center">
                  <FaCircleCheck className="mr-2 h-4 w-4" /> Creator Mode
                </li>
                <li className="flex items-center">
                  <FaCircleCheck className="mr-2 h-4 w-4" /> Unlimited Branded
                  Links
                </li>

                <li className="flex items-center">
                  <FaCircleCheck className="mr-2 h-4 w-4" /> Custom Links
                </li>
                <li className="flex items-center">
                  <FaCircleCheck className="mr-2 h-4 w-4" /> Dashboard Analytics
                </li>
                {/* <li className="flex items-center">
                  <FaCircleCheck className="mr-2 h-4 w-4" /> Access to Discord
                </li> */}
                <li className="flex items-center">
                  <FaCircleCheck className="mr-2 h-4 w-4" /> Premium Support
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 text-center">
              <div>
                <div className="price flex items-baseline gap-3">
                  <h4 className="text-7xl font-bold">₹19</h4>
                  <p className="text-base font-bold text-muted-foreground line-through">
                    ₹49
                  </p>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  Billed Monthly
                </p>
              </div>
              <Link
                href="/checkout"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>
      <div className="my-2">
        <Footer />
      </div>
    </div>
  );
};

export default PricingPage;

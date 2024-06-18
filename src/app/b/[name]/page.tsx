"use client";
import React, { useState, useEffect } from "react";
import { getBrandLink } from "@/actions/brand.action";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BrandRedirectionPage = ({ params }: { params: { name: string } }) => {
  const { name }: any = params;
  const [link, setLink] = useState<string | null>(null);
  console.log(name);

  useEffect(() => {
    console.log("useEffect running");
    const getData = async () => {
      console.log("Hello from brand page");
      try {
        const res = await getBrandLink({ name });
        setLink(res.link);

        if (/Android/i.test(window.navigator.userAgent)) {
          console.log("Redirecting to Android intent URL");
          window.location.href = res.androidIntentUrl;
          setTimeout(() => {
            window.location.href = res.fallbackUrl;
          }, 1000);
        } else if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
          console.log("Redirecting to iOS URL");
          window.location.href = res.iosUrl;
          setTimeout(() => {
            window.location.href = res.fallbackUrl;
          }, 1000);
        } else {
          console.log("Redirecting to fallback URL");
          window.location.href = res.fallbackUrl;
        }
      } catch (error) {
        console.error("Error fetching link:", error);
        // Handle error accordingly, maybe set an error state
      }
    };
    getData();
  });
  // console.log("Hello from brand page");
  return (
    <div className="mt-5">
      <h1 className="text-center text-3xl font-bold text-green-400">
        Click the below button
      </h1>
      <div className="btn flex justify-center mt-10">
        {link ? (
          <Link href={link} passHref>
            <a target="_self" rel=" noopener noreferrer">
              <Button>Redirect</Button>
            </a>
          </Link>
        ) : (
          <div className="flex justify-center items-center h-24">
            <div className="w-8 h-8 border-4 border-t-4 border-t-blue-500 border-blue-200 rounded-full animate-spin"></div>
          </div> // Show loading state or a message
        )}
      </div>
    </div>
  );
};

export default BrandRedirectionPage;

"use client";
import React, { useState, useEffect } from "react";
import { getLink } from "@/actions/links.action";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RedirectionPage = ({ params }: { params: { id: string } }) => {
  const { id }: any = params;
  const [link, setLink] = useState<string | null>(null); // Set initial state to null
  const [resData, setResData] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getLink({ id });
        console.log(res);

        setResData(res);
        setLink(res.originalUrl);

        if (res.androidIntentUrl) {
          console.log("Redirecting to Android intent URL");
          window.location.href = res.androidIntentUrl;
          setTimeout(() => {
            window.location.href = res.fallbackUrl;
          }, 1000);
        } else if (res.iosUrl) {
          console.log("Redirecting to iOS URL");
          window.location.href = res.originalUrl; // ios issue!
          setTimeout(() => {
            window.location.href = res.fallbackUrl;
          }, 1000);
        } else if (res.defaultBrowserUrl) {
          console.log("Opening in default browser");
          window.open(res.defaultBrowserUrl, "_blank"); // Open in new tab
        } else {
          console.log("Unsupported URL or no mapping found");
          // Handle case where no mapping or default URL is available
        }
      } catch (error) {
        console.error("Error fetching link:", error);
        // Handle error accordingly, maybe set an error state
      }
    };
    getData();
  }, []);

  return (
    <div className="mt-5">
      <h1 className="text-center text-3xl font-bold text-green-400">
        Click the below button
      </h1>
      <div className="btn flex justify-center mt-10">
        {link ? (
          <Button>
            <Link href={link} target="_blank" rel="noopener noreferrer">
              Redirect
            </Link>
          </Button>
        ) : (
          <div className="flex justify-center items-center h-24">
            <div className="w-8 h-8 border-4 border-t-4 border-t-blue-500 border-blue-200 rounded-full animate-spin"></div>
          </div> // Show loading state or a message
        )}
      </div>
    </div>
  );
};

export default RedirectionPage;

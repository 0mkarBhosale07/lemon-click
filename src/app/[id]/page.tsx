"use client";
import React, { useState, useEffect } from "react";
import { getLink } from "@/actions/links.action";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RedirectionPage = ({ params }: { params: { id: string } }) => {
  const { id }: any = params;
  const [link, setLink] = useState<string | null>(null); // Set initial state to null
  const [resData, setResData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getLink({ id });
        console.log(res);

        setResData(res);
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
  }, [id]);

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
          <p>Loading...</p> // Show loading state or a message
        )}
      </div>
    </div>
  );
};

export default RedirectionPage;

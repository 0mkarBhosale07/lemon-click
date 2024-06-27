"use client";
import React, { useState, useEffect } from "react";
import { getLink } from "@/actions/links.action";
import { Button } from "@/components/ui/button";

const RedirectionPage = ({ params }: { params: { id: string } }) => {
  const { id }: any = params;
  const [link, setLink] = useState<string | null>(null);
  const [resData, setResData] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getLink({ id });
        console.log(res);

        setResData(res);
        setLink(res.originalUrl);

        // Open the link in a new tab after 1 second
        setTimeout(() => {
          if (res.originalUrl) {
            window.open(res.originalUrl, "_blank");
          }
        }, 1000);
      } catch (error) {
        console.error("Error fetching link:", error);
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
          // <a href={link} target="_blank" rel="noopener noreferrer">
          // </a>
          <Button>Redirect</Button>
        ) : (
          <div className="flex justify-center items-center h-24">
            <div className="w-8 h-8 border-4 border-t-4 border-t-blue-500 border-blue-200 rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RedirectionPage;

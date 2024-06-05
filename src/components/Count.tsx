"use client";
import { getLinkCount, getUserCount } from "@/actions/count.action";
import React, { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState({ links: 0, users: 0 });
  const [displayCount, setDisplayCount] = useState({ links: 0, users: 0 });

  useEffect(() => {
    const handelCount = async () => {
      const linkCount = await getLinkCount();
      const userCount = await getUserCount();
      setCount({ links: linkCount, users: userCount });
    };

    handelCount();
  }, []);

  useEffect(() => {
    const animateCount = (target: any, duration: any, setDisplayValue: any) => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / target));
      const timer = setInterval(() => {
        start += 1;
        setDisplayValue((prevState: any) => ({ ...prevState, links: start }));
        if (start === target) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    if (count.links > 0) {
      animateCount(count.links, 2000, setDisplayCount);
    }
  }, [count.links]);

  useEffect(() => {
    const animateCount = (target: any, duration: any, setDisplayValue: any) => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / target));
      const timer = setInterval(() => {
        start += 1;
        setDisplayValue((prevState: any) => ({ ...prevState, users: start }));
        if (start === target) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    if (count.users > 0) {
      animateCount(count.users, 2000, setDisplayCount);
    }
  }, [count.users]);

  return (
    <div className="flex items-center gap-5 justify-center">
      <div className="border-2 rounded-lg px-5 pt-5 pb-3 text-center w-40">
        <h1 className="text-2xl font-bold ">Links Created</h1>
        <p className="text-5xl font-bold mt-2">{displayCount.links}</p>
      </div>
      {/* <div className="">Users: {displayCount.users}</div> */}
      <div className="border-2 rounded-lg px-5 pt-5 pb-3 text-center w-40">
        <h1 className="text-2xl font-bold ">Account Created</h1>
        <p className="text-5xl font-bold mt-2">{displayCount.users}</p>
      </div>
    </div>
  );
};

export default Count;

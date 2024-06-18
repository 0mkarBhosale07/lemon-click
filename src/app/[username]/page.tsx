"use client";
import { getUSerProfile } from "@/actions/profile.action";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProfileCard from "./ProfileCard";
import Link from "next/link";

const UsernamePage = ({ params }: { params: { username: string } }) => {
  let { username }: any = params;
  username = decodeURIComponent(username);
  username = username.slice(1);

  const [links, setLinks] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: any = await getUSerProfile({ username });
        setLinks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error (e.g., show error message)
        toast.error("Failed to fetch links.");
      } finally {
        setLoading(false); // Step 2: Set loading to false whether success or failure
      }
    };
    fetchData();
  }, [username]);

  if (loading) {
    return (
      <div className="flex justify-center items-center gap-5 mt-20">
        <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-green-500 border-t-transparent"></div>
        <p className="">
          Getting account details of {decodeURIComponent(username)}...
        </p>
      </div>
    );
  }

  // console.log(links);

  return (
    <div className="min-h-screen max-w-screen flex justify-center items-center">
      {links ? (
        <ProfileCard
          name={links.name}
          username={links.username}
          bio={links.bio}
          links={links.links}
          displayImage={links.displayImage}
          profileImage={links.profileImage}
        />
      ) : (
        <div>
          <p className="text-center font-bold">
            No user found with this username
          </p>
          <p className="text-center mt-10">
            <Link href="/" className="font-bold text-blue-500 underline">
              Return to home page!
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default UsernamePage;

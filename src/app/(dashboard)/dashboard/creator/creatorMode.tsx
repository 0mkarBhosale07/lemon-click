"use client";
import { getUserDetails } from "@/actions/users.action";
import React, { useEffect, useState } from "react";

const CreatorMode = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData: any = await getUserDetails();
        // console.log(userData);
        setData(userData);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center gap-5 mt-20">
        <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-green-500 border-t-transparent"></div>
        <p className="">Getting your account details...</p>
      </div>
    );
  }

  return (
    <div>
      {data.emailVerified == null ? (
        <div className="text-center">Please Purches The Plan</div>
      ) : (
        <div>You can use creator mode</div>
      )}
    </div>
  );
};

export default CreatorMode;

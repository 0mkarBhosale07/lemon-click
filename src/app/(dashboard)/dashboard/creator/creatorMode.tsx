"use client";
import { getUserDetails } from "@/actions/users.action";
import React, { useEffect, useState } from "react";
import CreatorLinkTable from "./CreatorTable";
import CreateCreatorLink from "./CreateCreatorLink";

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
    // <div>
    //   {data.creator_mode === false ? (
    //     <div className="text-center mt-10 font-bold">
    //       Please buy the creator mode subscription.
    //     </div>
    //   ) : (

    //   )}
    // </div>
    <div className="text-center mt-10 font-bold">
      <main className="mt-10">
        <div className="create flex justify-center my-10">
          <CreateCreatorLink />
        </div>
        <div className="tables">
          <CreatorLinkTable />
        </div>
      </main>
    </div>
  );
};

export default CreatorMode;

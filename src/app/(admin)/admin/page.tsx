"use client";
import { getUserDetails } from "@/actions/users.action";
import Admin from "../adminComponents/Admin";
import React, { useState, useEffect } from "react";

const AdminPage = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: any = await getUserDetails();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Step 2: Set loading to false whether success or failure
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center gap-5 mt-32">
        <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-green-500 border-t-transparent"></div>
        <p className="">Getting details</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center gap-5 mt-32">
        <p className="">Not Authorised!</p>
      </div>
    );
  }
  return (
    <div>
      {data.superAdmin ? (
        <div>
          <Admin />
        </div>
      ) : (
        <div>Not a super admin</div>
      )}
    </div>
  );
};

export default AdminPage;

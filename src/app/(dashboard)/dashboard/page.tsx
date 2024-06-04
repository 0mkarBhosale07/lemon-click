import { auth } from "@/auth";
import Navbar from "@/components/Navbar";
import React from "react";
import { DashboardNavigationMenu } from "../dashboard-components/DashboardNav";
import NotAuth from "../dashboard-components/NotAuth";

const page = async () => {
  const session = await auth();
  if (!session) return <NotAuth />;
  return (
    <div className="mt-5">
      <div className="navbar">
        <Navbar />
      </div>
      <nav className="flex justify-center mt-2">
        <DashboardNavigationMenu />
      </nav>
    </div>
  );
};

export default page;

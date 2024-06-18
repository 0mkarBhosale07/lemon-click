import { auth } from "@/auth";
import Navbar from "@/components/Navbar";
import React from "react";
import { DashboardNavigationMenu } from "../dashboard-components/DashboardNav";
import NotAuth from "../dashboard-components/NotAuth";
import LinksTabel from "../dashboard-components/LinksTabel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};
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
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="linksTabel">
        <LinksTabel />
      </div>
    </div>
  );
};

export default page;

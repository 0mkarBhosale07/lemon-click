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
      <div className="mt-20 text-center">
        <h1>Beta version se aur kya expectations hai bhai!!! 😂😅</h1>
        <h1>Rooling Out Soon!!</h1>
      </div>
    </div>
  );
};

export default page;

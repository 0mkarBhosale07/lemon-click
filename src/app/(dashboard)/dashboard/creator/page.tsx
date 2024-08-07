import Navbar from "@/components/Navbar";
import React from "react";
import { DashboardNavigationMenu } from "../../dashboard-components/DashboardNav";
import CreatorMode from "./creatorMode";
import NotAuth from "../../dashboard-components/NotAuth";
import { auth } from "@/auth";

const CreatorModeDashboard = async () => {
  const session: any = await auth();
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
        <h1 className="text-2xl font-bold">Creator Mode</h1>
      </div>
      <main>
        <CreatorMode />
      </main>
    </div>
  );
};

export default CreatorModeDashboard;

import Navbar from "@/components/Navbar";
import React from "react";
import { DashboardNavigationMenu } from "../../dashboard-components/DashboardNav";
import InputFiled from "./InputFiled";
import ProfileLinksTable from "./ProfileLinksTable";
import { auth } from "@/auth";
import NotAuth from "../../dashboard-components/NotAuth";

const page = async () => {
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
        <h1 className="text-2xl font-bold">Profile Tree Setting</h1>
      </div>
      <main>
        <div className="inputs">
          <InputFiled />
        </div>
        <div className="table mx-auto mt-5">
          <ProfileLinksTable />
        </div>
      </main>
    </div>
  );
};

export default page;

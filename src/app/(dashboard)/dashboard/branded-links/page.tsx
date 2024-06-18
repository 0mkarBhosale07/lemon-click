import Navbar from "@/components/Navbar";
import React from "react";
import { DashboardNavigationMenu } from "../../dashboard-components/DashboardNav";
import BrandLinksTabel from "./BrandedTable";
import CreateLink from "./CreateLink";

const BrandedLinks = () => {
  return (
    <div className="mt-5">
      <div className="navbar">
        <Navbar />
      </div>
      <nav className="flex justify-center mt-2">
        <DashboardNavigationMenu />
      </nav>
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">Branded Links</h1>
      </div>
      <main>
        <div className="createLink mt-10">
          <div className="createLink flex justify-center">
            <CreateLink />
          </div>
        </div>
        <div className="linktable mt-10">
          <BrandLinksTabel />
        </div>
      </main>
    </div>
  );
};

export default BrandedLinks;

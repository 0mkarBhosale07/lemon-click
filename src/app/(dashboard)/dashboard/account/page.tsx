import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import { DashboardNavigationMenu } from "../../dashboard-components/DashboardNav";
import { getUserDetails } from "@/actions/users.action";
import Account from "../../dashboard-components/Account";

const AccountPage = () => {
  return (
    <div className="mt-5">
      <div className="navbar">
        <Navbar />
      </div>
      <nav className="flex justify-center mt-2">
        <DashboardNavigationMenu />
      </nav>
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">Account Settings</h1>
      </div>
      <main>
        <Account />
      </main>
    </div>
  );
};

export default AccountPage;

import Nav from "./Nav";
import React from "react";
import { ThemeMode } from "./ThemeMode";
import UserAvatar from "./UserProfile";

const Navbar = () => {
  return (
    <nav className="lg:px-10 px-2 pt-5">
      <div className="main flex justify-between items-center">
        <Nav />
        <div className="flex items-center gap-1">
          <UserAvatar />
          <ThemeMode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

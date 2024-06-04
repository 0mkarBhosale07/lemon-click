import Nav from "./Nav";
import React from "react";
import { ThemeMode } from "./ThemeMode";
import UserAvatar from "./UserProfile";

const Navbar = () => {
  return (
    <nav>
      <div className="main flex justify-around items-center">
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

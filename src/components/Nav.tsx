"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { oswald, playfair } from "@/fonts";

const Nav = () => {
  return (
    <div className="logo">
      <Link href="/" className="cursor-pointer">
        <h1 className={playfair.className}>
          <span className="font-bold text-3xl">Lemon Click</span>
        </h1>
      </Link>
    </div>
  );
};

export default Nav;

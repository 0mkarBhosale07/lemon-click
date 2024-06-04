"use server";
import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { signOut, signIn } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaGoogle } from "react-icons/fa6";
type Session = any;

const UserAvatar = async () => {
  const session: Session | null = await auth();

  return (
    <div>
      {session ? (
        <div className="flex justify-between w-24 items-center">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image
                  src={session.user.image}
                  alt={session.user.name}
                  width={50}
                  height={50}
                  className="rounded-full cursor-pointer"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>{session.user.email}</DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <Link href={"/dashboard"} className="underline my-3">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <form
                    action={async () => {
                      "use server";
                      await signOut();
                    }}
                  >
                    <Button type="submit" className="bg-red-500">
                      Sign Out
                    </Button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <Button
            className="bg-blue-500 hover:bg-blue-800 font-bold"
            type="submit"
          >
            <FaGoogle className="hidden md:block mr-2" />
            Login with Google
          </Button>
        </form>
      )}
    </div>
  );
};

export default UserAvatar;

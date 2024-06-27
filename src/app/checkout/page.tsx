import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import React from "react";
import Checkout from "./Checkout";
import { auth } from "@/auth";
import NotAuth from "../(dashboard)/dashboard-components/NotAuth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CheckoutPage = async () => {
  const session: any = await auth();
  // console.log(session.user?.emailVerified);

  if (!session) {
    return (
      <>
        <div className="navbar mt-5">
          <Navbar />
        </div>
        <main>
          <h1 className="my-40 text-center font-bold text-3xl">
            Please Login to Continue
          </h1>
        </main>
        <div className="my-2">
          <Footer />
        </div>
      </>
    );
  }
  if (session.user?.emailVerified === null) return <NotAuth />;
  return (
    <>
      <div className="navbar mt-5">
        <Navbar />
      </div>
      <main>
        {session.user?.creator_mode ? (
          <div className="my-32">
            <h1 className="text-center font-bold text-3xl">
              You are on Creator Mode
            </h1>
            <div className="mt-5 flex justify-center">
              <Link href="/dashboard/creator">
                <Button className="mt-10">Visit</Button>
              </Link>
            </div>
          </div>
        ) : (
          <Checkout name={session.user?.name} email={session.user?.email} />
        )}
      </main>
      <div className="my-2">
        <Footer />
      </div>
    </>
  );
};

export default CheckoutPage;

import Sidebar from "@/components/layout/sidebar";
import type { Metadata } from "next";
import { getUserDetails } from "@/actions/users.action";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data: any = await getUserDetails();

  if (!data) {
    return (
      <div className="flex justify-center items-center gap-5 mt-32">
        <p className="">Not Authorised!</p>
      </div>
    );
  }
  if (!data.superAdmin) {
    return (
      <div className="flex justify-center items-center gap-5 mt-32">
        <p className="">Not A Super Admin!</p>
      </div>
    );
  }
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden pt-16 px-5">{children}</main>
      </div>
    </>
  );
}

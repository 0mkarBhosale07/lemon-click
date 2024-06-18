"use client";
import React, { useState, useEffect } from "react";
import { getUserLinks } from "@/actions/links.action";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FaClipboardList } from "react-icons/fa6";
import { toast } from "sonner";
import { getUserDetails } from "@/actions/users.action";
import { useRouter } from "next/navigation";

const LinksTabel = () => {
  const [links, setLinks] = useState([]);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData: any = await getUserDetails();
        console.log(userData);
        setData(userData);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();

    const fetchData = async () => {
      try {
        const data = await getUserLinks();
        setLinks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error (e.g., show error message)
        toast.error("Failed to fetch links.");
      } finally {
        setLoading(false); // Step 2: Set loading to false whether success or failure
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center gap-5 mt-20">
        <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-green-500 border-t-transparent"></div>
        <p className="">Getting your links...</p>
      </div>
    );
  }
  if (data.emailVerified == null) router.push("/");
  return (
    <div className="px-1 md:px-10 lg:px-20">
      {" "}
      <Table>
        <TableCaption>A list of your created links.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Sr.</TableHead>
            <TableHead>Platform</TableHead>
            <TableHead>Original URL</TableHead>
            <TableHead className="">Redirect URL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {links.map((item: any, ind) => (
            <TableRow key={ind}>
              <TableCell className="font-medium">{ind + 1}</TableCell>
              <TableCell>{item.platform}</TableCell>
              <TableCell>{item.originalUrl}</TableCell>
              <TableCell className="">
                <Button
                  className="mt-2 bg-green-400 hover:bg-green-700 hover:text-white transition-all duration-200 text-black font-bold flex gap-2 items-center"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `https://lemonclick.vercel.app/redirect/${item._id}`
                    );
                    toast("Copied text to clipboard!");
                  }}
                >
                  <FaClipboardList />
                  Copy Link
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total Created Links</TableCell>
            <TableCell colSpan={2} className="text-xl font-bold text-left">
              {links.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default LinksTabel;

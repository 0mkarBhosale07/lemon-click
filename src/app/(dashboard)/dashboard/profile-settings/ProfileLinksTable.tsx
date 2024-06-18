"use client";
import { getProfileLinks, deleteProfileLink } from "@/actions/profile.action";
import React, { useEffect, useState } from "react";
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
import { toast } from "sonner";
import { FaClipboardList, FaDeleteLeft } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const ProfileLinksTable = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  const handelDelete = async (id: any) => {
    console.log(id);

    const data = await deleteProfileLink({ linkId: id });
    if (data.message == "success") {
      toast.success("Link deleted successfully");
      window.location.reload();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: any = await getProfileLinks();
        setLinks(data.links);
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

  return (
    <div className="">
      <div className="px-1 md:px-10 lg:px-20">
        {" "}
        <Table className="border">
          <TableCaption>A list of your created links.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Sr.</TableHead>
              <TableHead>Platform</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="">Link</TableHead>
              <TableHead className="">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {links.map((item: any, ind) => (
              <TableRow key={ind}>
                <TableCell className="font-medium">{ind + 1}</TableCell>
                <TableCell>{item.tag}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell className="">{item.url}</TableCell>
                <TableCell>
                  <Button
                    className="bg-red-500 text-white font-bold hover:bg-red-700"
                    onClick={() => {
                      handelDelete(item._id);
                    }}
                  >
                    <FaDeleteLeft />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total Created Links</TableCell>
              <TableCell colSpan={3} className="text-xl font-bold text-left">
                {links.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default ProfileLinksTable;

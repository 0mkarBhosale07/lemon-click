"use client";
import React, { useState, useEffect } from "react";
import { getUserBrandedLinks, deleteBrandedLink } from "@/actions/brand.action";
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
import { FaClipboardList, FaDeleteLeft } from "react-icons/fa6";
import { toast } from "sonner";

const BrandLinksTabel = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handelDelete = async (id: any) => {
    console.log(id);

    const data: any = await deleteBrandedLink({ id });
    if (data.message == "success") {
      toast.success("Link deleted successfully");
      window.location.reload();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserBrandedLinks();
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

  const totalPages = Math.ceil(links.length / itemsPerPage);

  const handlePageChange = (newPage: any) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  const getCurrentPageLinks = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return links.slice(startIndex, startIndex + itemsPerPage);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center gap-5 mt-20">
        <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-green-500 border-t-transparent"></div>
        <p className="">Getting your links...</p>
      </div>
    );
  }
  return (
    <div className="px-1 md:px-10 lg:px-20">
      {" "}
      <Table>
        <TableCaption>A list of your created branded links.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Sr.</TableHead>
            <TableHead>Platform</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Original URL</TableHead>
            <TableHead className="">Redirect URL</TableHead>
            <TableHead className="">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {links.map((item: any, ind) => (
            <TableRow key={ind}>
              <TableCell className="font-medium">{ind + 1}</TableCell>
              <TableCell>{item.platform}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.originalUrl}</TableCell>
              <TableCell className="">
                <Button
                  className="mt-2 bg-green-400 hover:bg-green-700 hover:text-white transition-all duration-200 text-black font-bold flex gap-2 items-center"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `https://lemonclick.vercel.app/b/${item.name}`
                    );
                    toast("Copied text to clipboard!");
                  }}
                >
                  <FaClipboardList />
                  Copy Link
                </Button>
              </TableCell>
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
            <TableCell colSpan={1} className="text-xl font-bold text-left">
              {links.length}
            </TableCell>
            <TableCell colSpan={3} className="flex gap-2 items-center">
              <Button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </Button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <Button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default BrandLinksTabel;

"use client";
import React, { useState, useEffect } from "react";
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
import { toast } from "sonner";
import { deleteCoupon, getAllCoupons } from "@/actions/admin.actions";
import { format } from "date-fns";
import { FaDeleteLeft } from "react-icons/fa6";

const CouponTable = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const handelDelete = async (id: string) => {
    try {
      const response: any = deleteCoupon(id);
      toast(response.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData: any = await getAllCoupons();
        console.log(userData);
        setData(userData.data);
        toast(userData.message);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center gap-5 mt-20">
        <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-green-500 border-t-transparent"></div>
        <p className="">Getting your links...</p>
      </div>
    );
  }
  //   if (data.emailVerified == null) router.push("/");
  return (
    <div className="px-1 md:px-10 lg:px-20">
      <Table>
        <TableCaption>A list of your created coupon codes.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Sr.</TableHead>
            <TableHead>Code</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="">Start</TableHead>
            <TableHead className="">End</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="">Used</TableHead>
            <TableHead className="">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: any, ind: number) => (
            <TableRow key={ind}>
              <TableCell className="font-medium">{ind + 1}</TableCell>
              <TableCell>{item.code}</TableCell>
              <TableCell>{item.discountValue}</TableCell>
              <TableCell>{item.discountType}</TableCell>
              <TableCell>{format(item.startDate, "PPP")}</TableCell>
              <TableCell>{format(item.endDate, "PPP")}</TableCell>
              <TableCell>{item.isActive ? "Active" : "Inactive"}</TableCell>
              <TableCell>{item.usageCount}</TableCell>
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
            <TableCell colSpan={2}>Total Created Codes</TableCell>
            <TableCell colSpan={8} className="text-xl font-bold text-left">
              {data.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default CouponTable;

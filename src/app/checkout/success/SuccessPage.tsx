"use client";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "react-day-picker";
import { FaCheckCircle } from "react-icons/fa";
import { addPayment } from "@/actions/payment.action";

const SuccessPage = ({
  razorpay_payment_id,
  razorpay_order_id,
  amount,
}: any) => {
  useEffect(() => {
    const handelPayment = async () => {
      const data = await addPayment({
        amount,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
      });

      if (data?.status == 200) {
        console.log("Payment Successful");
      } else {
        console.log("Payment Failed");
      }
    };
    handelPayment();
  });
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center p-8 rounded shadow-lg">
          <div className="mb-4 flex justify-center">
            <FaCheckCircle className="text-green-500 text-7xl animate-bounce" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Payment Successful</h1>
          <div className=" text-lg mb-2">
            <p className="my-5 font-bold">
              Payment ID:{" "}
              <span className="text-green-300">{razorpay_payment_id}</span>
            </p>
            <p className="my-5 font-bold">
              Order ID:{" "}
              <span className="text-green-300">{razorpay_order_id}</span>
            </p>
            <p className="my-5 font-bold">
              Amount: <span className="text-green-300">₹{amount / 100}</span>
            </p>
          </div>
          <p className="text-gray-500 mt-4">Thank you for your purchase!</p>
        </div>
        <div className="btn mt-5">
          {/* <Button className="bg-green-500">Go to dashboard</Button> */}
          <Link
            href="/dashboard"
            className="bg-green-500 px-2 py-4 rounded-lg font-bold text-lg"
          >
            Continue to dashboard
          </Link>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;

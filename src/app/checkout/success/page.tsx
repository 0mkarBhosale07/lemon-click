"use client";

import Link from "next/link";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "react-day-picker";
import { FaCheckCircle } from "react-icons/fa";

const SuccessPage = () => {
  // const router = useRouter();
  const [transactionDetails, setTransactionDetails] = useState<any>(null);

  useEffect(() => {
    // if (router.query.transactionId) {
    if (1 == 1) {
      // Fetch transaction details using transactionId if needed
      // const transactionId = router.query.transactionId;
      // const amount = router.query.amount;
      // const currency = router.query.currency;
      // console.log({ transactionId, amount, currency });

      setTransactionDetails({
        transactionId: "sdsdsdsd",
        amount: "49",
        currency: "INR",
      });
    }
  }, []);
  // }, [router.query]);

  if (!transactionDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center p-8 rounded shadow-lg">
          <div className="mb-4 flex justify-center">
            <FaCheckCircle className="text-green-500 text-7xl animate-bounce" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Payment Successful</h1>
          <div className=" text-lg mb-2">
            <p>Transaction ID: {transactionDetails.transactionId}</p>
            <p>
              Amount: {transactionDetails.amount} {transactionDetails.currency}
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
            Go to dashboard
          </Link>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;

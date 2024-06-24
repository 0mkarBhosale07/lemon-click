"use client";
import { useSearchParams } from "next/navigation";
import SuccessPage from "./SuccessPage";

const Page = () => {
  // const router = useRouter();
  const searchParams = useSearchParams();
  const razorpay_payment_id = searchParams.get("razorpay_payment_id");
  const razorpay_order_id = searchParams.get("razorpay_order_id");
  const amount: any | null = searchParams.get("amount");
  return (
    <div>
      <SuccessPage
        razorpay_payment_id={razorpay_payment_id}
        razorpay_order_id={razorpay_order_id}
        amount={amount}
      />
    </div>
  );
};

export default Page;

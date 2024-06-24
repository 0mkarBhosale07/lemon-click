"use client";
import React from "react";
import { useRouter } from "next/navigation";
import useRazorpay from "react-razorpay";
import { paymentHandler } from "@/actions/payment.action";
import { Button } from "@/components/ui/button";

const TestPage = () => {
  const router = useRouter();
  const [Razorpay] = useRazorpay();

  const handlePayment = async () => {
    try {
      const orderData = await paymentHandler({ amount: 50 });

      const options: any = {
        key: "rzp_test_CUjTqIpIAq5EK4", // Ensure this key is correctly set in your environment variables
        amount: orderData.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Lemon Click",
        description: "Test Transaction",
        image:
          "https://res.cloudinary.com/lemon-click/image/upload/v1719137698/lemonclick-profile/pfh0lgjiokb5dts8uyl8.png",
        order_id: orderData.order_id, // Use the correct order ID property from the response
        handler: function (response: any) {
          // Redirect to success page with payment details
          router.push(
            `/checkout/success?razorpay_payment_id=${response.razorpay_payment_id}&razorpay_order_id=${response.razorpay_order_id}&amount=${orderData.amount}`
          );
        },
        prefill: {
          name: "Piyush Garg",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new Razorpay(options);

      rzp1.on("payment.failed", function (response: any) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzp1.open();
    } catch (error) {
      console.error("Error handling payment:", error);
      // Handle error scenario
    }
  };

  return <Button onClick={handlePayment}>Pay Now</Button>;
};

export default TestPage;

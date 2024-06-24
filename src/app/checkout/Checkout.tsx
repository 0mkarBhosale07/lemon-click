"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { applyCouponCode } from "@/actions/admin.actions";
import { toast } from "sonner";
import { FaXmark } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useRazorpay from "react-razorpay";
import { paymentHandler } from "@/actions/payment.action";

const Checkout = ({ name, email }: any) => {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [orderAmount, setOrderAmount] = useState(19);
  // const [tax, setTax] = useState(0.02);
  const [applied, setApplied] = useState(false);
  const router = useRouter();
  const [Razorpay] = useRazorpay();

  const handlePayment = async () => {
    try {
      const orderData = await paymentHandler({ amount: totalAmount });

      const options: any = {
        key: process.env.RAZORPAY_API_ID, // Ensure this key is correctly set in your environment variables
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
          name: name,
          email: email,
          contact: "",
        },
        notes: {
          address: "Lemon Click",
        },
        theme: {
          color: "#EE4E4E",
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

      if (totalAmount === 0) {
        router.push(
          `/checkout/success?razorpay_payment_id=${"asfsdcdcdfdsd"}&razorpay_order_id=${"FREE PASS"}&amount=${0}`
        );
      } else {
        rzp1.open();
      }
    } catch (error) {
      console.error("Error handling payment:", error);
      // Handle error scenario
    }
  };

  const handleRemoveCoupon = () => {
    setDiscount(0);
    setCouponCode("");
    setApplied(false);
  };

  const handleApplyCoupon = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response: any = await applyCouponCode({
        code: couponCode,
        orderAmount,
      });
      if (response.discount) {
        setDiscount(response.discount);
        setApplied(true);
        toast(response.message);
      } else {
        setDiscount(0);
        setApplied(false);
        toast(response.message);
      }
    } catch (error) {
      console.log("Error applying coupon:", error);
      toast("An error occurred while applying the coupon.");
    }
  };

  let tax = 0;
  let totalAmount = orderAmount - discount;
  if (totalAmount != 0) {
    tax = orderAmount * 0.02;

    totalAmount += tax;
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 md:px-6">
      <div className="grid gap-8">
        <div>
          <h1 className="text-3xl font-bold">Checkout</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Cart Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                    <div className="grid gap-1">
                      <h3 className="font-medium">Creator Mode</h3>
                      <p className="text-muted-foreground text-sm">
                        Creator Mode Feature
                      </p>
                    </div>
                    <div className="text-right font-medium">₹{orderAmount}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {!applied ? (
              <Card>
                <CardHeader>
                  <CardTitle>Apply Coupon</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Enter coupon code"
                      className="flex-1"
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button type="submit" onClick={handleApplyCoupon}>
                      Apply
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Apply Coupon</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 justify-center">
                    <p className="text-center text-green-500">
                      {" "}
                      &ldquo;{" "}
                      <span className="underline underline-offset-4">
                        {couponCode}
                      </span>{" "}
                      &rdquo; Coupon Applied
                    </p>
                    {/* <Button variant="ghost"> */}
                    <FaXmark
                      className="text-lg text-red-500 hover:cursor-pointer"
                      onClick={handleRemoveCoupon}
                    />
                    {/* </Button> */}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium">₹{orderAmount}</span>
                </div>
                {discount ? (
                  <div className="flex items-center justify-between">
                    <span>Discount</span>
                    <span className="font-medium text-green-500">
                      -₹{discount.toFixed(2)}
                    </span>
                  </div>
                ) : (
                  <p className="font-medium text-green-500">
                    No Coupon Code Applied
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <span>Platform Fees 2%</span>
                  <span className="font-medium">
                    ₹{totalAmount == 0 ? 0 : tax}
                  </span>
                </div>

                <Separator />
                <div className="flex items-center justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>₹{totalAmount.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={handlePayment}>
                  Continue to Payment
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

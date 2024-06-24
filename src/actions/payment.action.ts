"use server";
import { auth } from "@/auth";
import { connectToDatabase } from "@/db";
import Payment from "@/models/payment.model";
import Razorpay from "razorpay";
import Users from "@/models/users.model";

const razorpay_key_id = process.env.RAZORPAY_API_ID;
const razorpay_key_secret = process.env.RAZORPAY_API_SECRET;

const razorpay = new Razorpay({
  key_id: <string>razorpay_key_id,
  key_secret: razorpay_key_secret,
});

export async function paymentHandler(params: any) {
  const { amount } = params;

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // amount in smallest currency unit (e.g., paise for INR)
      currency: "INR",
      receipt: "receptId_" + Date.now(),
    });

    // console.log("Order created:", order);

    return { amount: order.amount, order_id: order.id, status: 200 };
  } catch (error: any) {
    console.error("Error creating order:", error);
    return { error: error.message };
  }
}

export const addPayment = async (params: any) => {
  connectToDatabase();
  const session = await auth();
  const id = session?.user?.id;
  const { amount, paymentId, orderId } = params;

  console.log({ amount, paymentId, orderId });

  try {
    const data = await Payment.create({
      userId: id,
      amount: amount,
      paymentId: paymentId,
      orderId: orderId,
      createdAt: new Date(),
    });

    console.log(data);
    const user = await Users.findById(id);
    if (user) {
      const currentDate = new Date();
      const expiryDate = new Date(
        currentDate.setDate(currentDate.getDate() + 30)
      );
      user.planExpiry = expiryDate;
      user.creator_mode = true;
      await user.save();
      console.log("Plan updated successfully");
    } else {
      console.log("User not found");
    }
    return { data, status: 200 };
  } catch (error) {}
};

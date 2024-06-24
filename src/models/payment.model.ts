import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema(
  {
    //define schema
    userId: { type: String, required: true, index: true },
    paymentId: { type: String, required: true, unique: true },
    orderId: { type: String, required: true, index: true },
    amount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now, expires: "30d" },
  },
  {
    timestamps: true,
  }
);

paymentSchema.index({ createdAt: 1 }, { expireAfterSeconds: 0 });

const Payment =
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);
export default Payment;

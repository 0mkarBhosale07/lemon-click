import mongoose, { Schema } from "mongoose";

const couponSchema = new Schema(
  {
    //define schema
    code: { type: String, required: true, unique: true },
    discountType: {
      type: String,
      required: true,
      enum: ["percentage", "amount"],
    },
    discountValue: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    isActive: { type: Boolean, default: true },
    usageLimit: { type: Number, default: 1 },
    usageCount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Coupon = mongoose.models.Coupon || mongoose.model("Coupon", couponSchema);
export default Coupon;

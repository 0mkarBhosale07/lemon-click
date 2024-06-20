"use server";
import { connectToDatabase } from "@/db";
import Coupon from "@/models/coupon.model";

export const createCouponCode = async (params: any) => {
  connectToDatabase();
  const {
    code,
    discountType,
    discountValue,
    startDate,
    endDate,
    isActive,
    usageLimit,
    usageCount,
  } = params;
  try {
    const data = await Coupon.create({
      code,
      discountType,
      discountValue,
      startDate,
      endDate,
      isActive,
      usageLimit,
      usageCount,
    });
    return { message: "Coupon created successfully", data: data };
  } catch (err: any) {
    return { message: err._message };
    console.log(err);
  }
};

export const getAllCoupons = async () => {
  connectToDatabase();
  try {
    const data = await Coupon.find();
    return { data: data, message: "All Coupons fetched successfully" };
  } catch (err) {
    console.log(err);
  }
};

export const deleteCoupon = async (id: any) => {
  connectToDatabase();

  try {
    const data = await Coupon.findByIdAndDelete(id);

    return { data: data, message: "Coupon Deleted" };
  } catch (err) {
    console.log(err);
  }
};

export const getCouponById = async ({ params }: any) => {
  connectToDatabase();
  const { id } = params;
  try {
    const data = await Coupon.findById({ id });
    return { data: data, message: "Coupon Found" };
  } catch (err) {
    console.log(err);
  }
};

export const getCoupenCode = async (code: string) => {
  connectToDatabase();
  try {
    const data = await Coupon.findOne({ code: code });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const applyCouponCode = async (params: any) => {
  connectToDatabase();
  const { code, orderAmount } = params;

  try {
    const coupon = await Coupon.findOne({ code: code });

    if (!coupon) {
      return { message: "Invalid coupon code" };
    }

    if (!coupon.isActive) {
      return { message: "Coupon is not active" };
    }

    const now = new Date();
    if (now < coupon.startDate || now > coupon.endDate) {
      return { message: "Coupon is not valid at this time" };
    }

    if (coupon.usageCount >= coupon.usageLimit) {
      return { message: "Coupon usage limit has been reached" };
    }

    if (orderAmount < coupon.minPurchaseAmount) {
      return {
        message: `Minimum purchase amount of ${coupon.minPurchaseAmount} is required`,
      };
    }

    coupon.usageCount += 1;
    await coupon.save();

    let discount;
    if (coupon.discountType === "percentage") {
      discount = (coupon.discountValue / 100) * orderAmount;
      if (coupon.maxDiscountAmount && discount > coupon.maxDiscountAmount) {
        discount = coupon.maxDiscountAmount;
      }
    } else if (coupon.discountType === "amount") {
      discount = coupon.discountValue;
    }

    if (discount > orderAmount) {
      discount = orderAmount;
    }

    return { message: "Coupon applied successfully", discount: discount };
  } catch (err) {
    console.log(err);
    return { message: "An error occurred while applying the coupon" };
  }
};

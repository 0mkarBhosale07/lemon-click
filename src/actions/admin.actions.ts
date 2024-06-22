"use server";
import { connectToDatabase } from "@/db";
import Coupon from "@/models/coupon.model";
import Webhook from "@/models/webhook.model";
import axios from "axios";
import mongoose from "mongoose";

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

export const createWebhook = async (params: any) => {
  connectToDatabase();

  const { url, name, channel } = params;
  try {
    const data = await Webhook.create({
      url,
      name,
      channel,
    });
    return { message: "Webhook added successfully", data: data };
  } catch (err: any) {
    console.log(err);
    return { message: err._message };
  }
};

export const getAllWebhooks = async () => {
  // console.log("Called");

  connectToDatabase();
  try {
    const data = await Webhook.find();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getWebhook = async (name: string) => {
  connectToDatabase();
  try {
    const data = await Webhook.findOne({ name: name });
    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const sendWebhookMessage = async (params: any) => {
  connectToDatabase();
  const { name, embeds } = params;

  const webhook = await getWebhook(name);
  if (!webhook) {
    throw new Error("Webhook not found");
  }

  const payload = {
    embeds: embeds.map((embed: any) => ({
      author: {
        name: embed.author.name,
        url: embed.author.url,
        icon_url: embed.author.iconUrl,
      },
      title: embed.body.title,
      description: embed.body.description,
      url: embed.body.url,
      color: parseInt(embed.body.color.substring(1), 16),
      image: {
        url: embed.image.imageUrl,
        thumbnail: {
          url: embed.image.thumbnailUrl,
        },
      },
      footer: {
        text: embed.footer.text,
        icon_url: embed.footer.iconUrl,
        timestamp: embed.footer.timestamp,
      },
      fields: embed.fields.map((field: any) => ({
        name: field.name,
        value: field.value,
        inline: field.inline,
      })),
    })),
  };

  console.log("Payload:", payload);

  try {
    const response = await axios.post(webhook.url, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { data: response.data, message: "Webhook sent successfully!" };
  } catch (error: any) {
    console.error("Error sending message to Discord:", error.response.data);
    throw error;
  }
};

export const deleteWebhook = async (id: any) => {
  connectToDatabase();

  // Check if id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return { message: "Invalid Webhook ID" };
  }

  try {
    // Convert the id to an ObjectId
    const objectId = new mongoose.Types.ObjectId(id);

    // Find and delete the webhook
    const data = await Webhook.findByIdAndDelete(objectId);

    if (!data) {
      return { message: "Webhook not found" };
    }

    return { data: data, message: "Webhook Deleted" };
  } catch (err) {
    console.error(err);
    return { message: "Error deleting webhook" };
  }
};

"use server";
import Links from "@/models/links.model";
import Users from "@/models/users.model";
import { connectToDatabase } from "@/db";

export const getLinkCount = async () => {
  try {
    await connectToDatabase();
    const count = await Links.countDocuments({});
    return count;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get count");
  }
};

export const getUserCount = async () => {
  try {
    await connectToDatabase();
    const count = await Users.countDocuments({});
    return count;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get count");
  }
};

export const getStats = async () => {
  try {
  } catch {
    console.log("Error");
  }
};

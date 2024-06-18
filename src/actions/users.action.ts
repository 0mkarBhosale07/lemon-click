"use server";
import Users from "@/models/users.model";
import { auth } from "@/auth";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: false,
});

export const getUserDetails = async () => {
  const session = await auth();
  const id: any = session?.user?.id;
  console.log(id);

  const data = await Users.findOne({ _id: id }).lean();
  console.log(data);
  return data;
};

export const setUsername = async (params: any) => {
  const session = await auth();
  const id = session?.user?.id;

  if (!id) {
    throw new Error("User not authenticated");
  }

  const { username } = params;
  console.log(username);

  try {
    const usernameCheck = await getUsername(username);

    if (usernameCheck) {
      throw new Error("Username already taken! Try new one");
    } else {
      const data = await Users.findByIdAndUpdate(
        id,
        { username: username, creator_mode: false },
        { new: true }
      ).lean();
      console.log(data);
      return data;
    }
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const getUsername = async (username: any) => {
  console.log(username);

  try {
    const data = await Users.findOne({ username: username }).lean();
    if (data) {
      console.log("User Found");
      console.log({ "Found Data": data });
      return data;
    } else {
      console.log("User Not Found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching username:", error);
    throw new Error("Error fetching username");
  }
};

export const updateName = async (params: any) => {
  const session = await auth();
  const id = session?.user?.id;

  if (!id) {
    throw new Error("User not authenticated");
  }

  const { name } = params;
  console.log(name);

  try {
    const data = await Users.findByIdAndUpdate(
      id,
      { name: name },
      { new: true }
    ).lean();
    console.log(data);
    return data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

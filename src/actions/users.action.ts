"use server";
import Users from "@/models/users.model";
import { auth } from "@/auth";
import { v2 as cloudinary } from "cloudinary";
import { connectToDatabase } from "@/db";
import { UserDetailsType } from "@/types";
import ReportLink from "@/models/reportLink.model";
import { getWebhook } from "./admin.actions";
import axios from "axios";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: false,
});

export const getUserDetails = async () => {
  connectToDatabase();
  const session = await auth();
  const id: any = session?.user?.id;
  console.log(id);

  const data: UserDetailsType | null = await Users.findOne({ _id: id }).lean();
  console.log(data);
  return data;
};

export const setUsername = async (params: any) => {
  connectToDatabase();
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
  connectToDatabase();
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
  connectToDatabase();
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

export const reportLink = async (params: any) => {
  connectToDatabase();

  const { name, email, link, description } = params;

  try {
    const data: any = await ReportLink.create({
      name,
      email,
      link,
      description,
    });

    const webhook = await getWebhook("Reported Links");
    if (!webhook) {
      throw new Error("Webhook not found");
    }

    const payload = {
      embeds: [
        {
          author: {
            name: name,
            icon_url:
              "https://res.cloudinary.com/lemon-click/image/upload/v1719137590/aeeeq2bkjeywevrxnyxa.jpg",
          },
          title: "New Reported Link",
          color: 15844367,
          footer: {
            text: "Lemon Click Web Bot",
            icon_url:
              "https://res.cloudinary.com/lemon-click/image/upload/v1719137698/lemonclick-profile/pfh0lgjiokb5dts8uyl8.png",
          },
          fields: [
            {
              name: "Name",
              value: name,
            },
            {
              name: "Description",
              value: description,
            },
            {
              name: "Link",
              value: link,
            },
          ],
        },
      ],
    };

    console.log("Payload:", payload);
    // console.log(data);
    const response = await axios.post(
      "https://discord.com/api/webhooks/1254377593549881435/yNTOCWkcI0VFWZfJtpXKLGdplcRV-sT5swurMw87LWnItOOkvpNUfKNyhjUrR5R0Fyxz",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return {
      message: "Report Submitted Successfully",
      data: data,
      status: 200,
    };
  } catch (error: any) {
    console.log(error);

    return {
      message: "Error Reporting Link",
      status: 500,
      error: error.message,
    };
  }
};

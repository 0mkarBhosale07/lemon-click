"use server";
import Links from "@/models/links.model";
import { connectToDatabase } from "@/db";
import { log } from "console";

export const getData = async () => {
  connectToDatabase();

  const data = await Links.find();

  return data;
};

export const getLink = async (params: any) => {
  connectToDatabase();

  const { id } = params;

  const data = await Links.findById(id);
  console.log(data);
  return data._doc;
};

export const uploadData = async (params: any) => {
  connectToDatabase();
  const isValidURL = (link: string) => {
    try {
      new URL(link);
      return true;
    } catch (error) {
      return false;
    }
  };

  const { link, redirection_link, userId } = params;

  const checkURL = isValidURL(link);
  const data = {
    link,
    redirection_link,
    userId,
  };

  if (checkURL) {
    const upload = await Links.create(data);
    console.log(upload._doc);

    return { upload: upload._doc, isValidURL: checkURL };
  } else {
    return { upload: null, IsValidURL: checkURL };
  }
};

export const deleteData = async (params: any) => {
  connectToDatabase();
  const { id } = params;

  const data = await Links.findByIdAndDelete(id);
  console.log("Topic Deleted");
};

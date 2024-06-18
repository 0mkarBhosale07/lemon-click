"use server";
import Profiles from "@/models/profile.model";
import { auth } from "@/auth";
import { getUserDetails } from "./users.action";
import { uploadData } from "./links.action";

export const setProfileLink = async (params: any) => {
  const { link, tag, title } = params;
  const session = await auth();
  const id = session?.user?.id;

  if (!id) {
    throw new Error("User not authenticated");
  }

  let username: any = await getUserDetails();
  const name = username?.name;
  const profileImage = username?.image;
  console.log(profileImage);

  username = username?.username;

  const linkData = await uploadData({ link });

  console.log(linkData);

  const newLink = {
    title: title,
    url: linkData.upload.originalUrl,
    androidIntentUrl: linkData.upload.androidIntentUrl,
    iosUrl: linkData.upload.iosUrl,
    fallbackUrl: linkData.upload.fallbackUrl,
    tag: tag,
  };

  const profile = await Profiles.findOneAndUpdate(
    { userId: id },
    {
      username: username,
      profileImage: profileImage,
      name: name,
      $push: { links: newLink },
    },
    { new: true, upsert: true }
  ).lean();
  console.log(profile);

  return profile;
};

export const getProfileLinks = async () => {
  const session = await auth();
  const id = session?.user?.id;

  const data = await Profiles.findOne({ userId: id }).lean();
  console.log(data);

  return data;
};
export const getUSerProfile = async (params: any) => {
  const { username } = params;
  console.log(username);

  const data = await Profiles.findOne({ username: username }).lean();
  console.log(data);

  return data;
};

export const updateBio = async (params: any) => {
  const { bio, name, displayImage } = params;
  const session = await auth();
  const id = session?.user?.id;

  const data = await Profiles.findOneAndUpdate(
    { userId: id },
    { bio: bio, name: name, displayImage: displayImage },
    { new: true, upsert: true }
  ).lean();
  console.log(data);

  return data;
};

export const deleteProfileLink = async (params: any) => {
  const session = await auth();
  const id = session?.user?.id;
  const { linkId } = params;
  // console.log({ id: id, linkId: linkId });

  const data = await Profiles.findOneAndUpdate(
    { userId: id },
    { $pull: { links: { _id: linkId } } },
    { new: true } // Return the updated document
  ).lean();
  // console.log(data);

  return { message: "success" };
};

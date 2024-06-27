"use server";
import { auth } from "@/auth";
import { connectToDatabase } from "@/db";
import Links from "@/models/links.model";
import { Session } from "next-auth";

export const getCreatorLink = async (params: any) => {
  connectToDatabase();

  const { name, username } = params;

  const data = await Links.findOneAndUpdate(
    { name: name, username: username },
    { $inc: { clickCount: 0.5 } }, // Increment click count by 1
    { new: true }
  );

  console.log(data);

  return data._doc;
};

export const uploadCreatorLink = async (params: any) => {
  connectToDatabase();
  const session: any | null = await auth();
  console.log(session);

  const { link, name } = params;
  const isValidURL = (link: string) => {
    try {
      new URL(link);
      return true;
    } catch (error) {
      return false;
    }
  };

  const checkURL = isValidURL(link);

  const parseUrl = new URL(link);
  const hostname = parseUrl.hostname;
  const path = parseUrl.pathname + parseUrl.search;

  const platformMappings: any = {
    "youtube.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=com.google.android.youtube;end;`,
      iosUrl: `vnd.youtube:///${path}`,
    },
    "instagram.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=com.instagram.android;end;`,
      iosUrl: `instagram://${path}`,
    },
    "twitter.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=com.twitter.android;end;`,
      iosUrl: `twitter://${path}`,
    },
    "facebook.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=com.facebook.katana;end;`,
      iosUrl: `fb://${path}`,
    },
    "open.spotify.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=com.spotify.music;end;`,
      iosUrl: `spotify://${path}`,
    },
    "netflix.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=com.netflix.mediaclient;end;`,
      iosUrl: `nflx://${path}`,
    },
    "disneyplus.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=com.disney.disneyplus;end;`,
      iosUrl: `disneyplus://${path}`,
    },
    "hotstar.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=in.startv.hotstar;end;`,
      iosUrl: `hotstar://${path}`,
    },
    "youtu.be": {
      androidIntentUrl: `intent://{hostname}{path}#Intent;scheme=https;package=com.google.android.youtube;end;`,
      iosUrl: `vnd.youtube://{path}`,
    },
    "vercel.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=com.vercel;end;`,
      iosUrl: `vercel://${path}`,
    },
    "github.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=com.github.android;end;`,
      iosUrl: `github://${path}`,
    },
  };

  const fallbackUrl = link;

  const platform = Object.keys(platformMappings).find((key) =>
    hostname.includes(key)
  );
  const androidIntentUrl = platform
    ? platformMappings[platform].androidIntentUrl
        .replace("{hostname}", hostname)
        .replace("{path}", path)
    : link;
  const iosUrl = platform
    ? platformMappings[platform].iosUrl.replace("{path}", path)
    : link;

  const data = {
    platform: platform || "generic",
    name: name,
    originalUrl: link,
    androidIntentUrl: androidIntentUrl,
    iosUrl: iosUrl,
    fallbackUrl: fallbackUrl,
    userId: session.userId,
    username: session.user?.username,
    creator_link: true,
  };

  try {
    const nameCheck = await getName(name);

    if (nameCheck) {
      throw new Error("Link with the name already created!");
    } else {
      if (checkURL) {
        const upload = await Links.create(data);

        console.log(upload._doc);

        return { upload: upload._doc, isValidURL: checkURL };
      } else {
        return { upload: null, IsValidURL: checkURL };
      }
    }
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const getUserCreatorLinks = async () => {
  connectToDatabase();
  const session = await auth();
  const userId: any = session?.user?.id;

  const data = await Links.find().lean();

  let filteredData: any = data.filter(
    (item) => item.userId === userId && item.name
  );
  // filteredData = filteredData.filter((item) => item.name !== null);
  // console.log(filteredData);

  return filteredData;
};

export const getName = async (name: any) => {
  const session: any | null = await auth();
  const username = session.user?.username;
  connectToDatabase();
  console.log(name);

  try {
    const data = await Links.findOne({ name: name, username: username }).lean();
    if (data) {
      console.log("Name Found");
      console.log({ "Found Data": data });
      return data;
    } else {
      console.log("Name Not Found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching Name:", error);
    throw new Error("Error fetching Name");
  }
};

export const deleteCreatorLink = async (params: any) => {
  connectToDatabase();
  const { id } = params;

  try {
    const data = await Links.findByIdAndDelete({ _id: id }).lean();
    return { message: "success", data: data };
  } catch (error) {
    console.log(error);
  }
};

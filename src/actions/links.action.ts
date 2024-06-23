"use server";
import Links from "@/models/links.model";
import { connectToDatabase } from "@/db";
import { auth } from "@/auth";

export const getData = async () => {
  connectToDatabase();

  const data = await Links.find();

  return data;
};

export const getLink = async (params: any) => {
  await connectToDatabase();

  const { id } = params;
  console.log(`Fetching link with ID: ${id}`);

  try {
    // Find the link by ID and increment the click count
    const data = await Links.findByIdAndUpdate(
      id,
      { $inc: { clickCount: 0.5 } }, // Increment click count by 1
      { new: true } // Return the updated document
    );

    if (!data) {
      console.error(`Link not found for ID: ${id}`);
      throw new Error("Link not found");
    }

    console.log(`Updated click count: ${data.clickCount}`);

    const responseObject = {
      platform: data.platform || "generic",
      name: data.name || null,
      originalUrl: data.originalUrl,
      androidIntentUrl: data.androidIntentUrl,
      iosUrl: data.iosUrl,
      fallbackUrl: data.fallbackUrl,
      defaultBrowserUrl: data.defaultBrowserUrl || null,
      userId: data.userId || null,
      clickCount: data.clickCount, // Include click count in the response
    };

    return responseObject;
  } catch (error: any) {
    console.error(`Error updating link click count: ${error.message}`);
    throw error;
  }
};

export const uploadData = async (params: any) => {
  connectToDatabase();
  const session: any | null = await auth();
  const { link } = params;
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
      iosUrl: `vnd.youtube:/${path}`,
    },
    "instagram.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=com.instagram.android;end;`,
      iosUrl: `instagram:/${path}`,
    },
    "twitter.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=com.twitter.android;end;`,
      iosUrl: `twitter:/${path}`,
    },
    "facebook.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=com.facebook.katana;end;`,
      iosUrl: `fb:/${path}`,
    },
    "open.spotify.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=com.spotify.music;end;`,
      iosUrl: `spotify:/${path}`,
    },
    "netflix.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=com.netflix.mediaclient;end;`,
      iosUrl: `nflx:/${path}`,
    },
    "disneyplus.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=com.disney.disneyplus;end;`,
      iosUrl: `disneyplus:/${path}`,
    },
    "hotstar.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=in.startv.hotstar;end;`,
      iosUrl: `hotstar:/${path}`,
    },
    "youtu.be": {
      androidIntentUrl: `intent://{hostname}{path}#Intent;scheme=https;package=com.google.android.youtube;end;`,
      iosUrl: `vnd.youtube:/${path}`,
    },
    "vercel.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=com.vercel;end;`,
      iosUrl: `vercel:/${path}`,
    },
    "github.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=com.github.android;end;`,
      iosUrl: `github:/${path}`,
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
    name: null,
    originalUrl: link,
    androidIntentUrl: androidIntentUrl,
    iosUrl: iosUrl,
    fallbackUrl: fallbackUrl,
    userId: session.userId || null,
  };

  if (checkURL) {
    const upload = await Links.create(data);

    console.log(upload._doc);

    return { upload: upload._doc, isValidURL: checkURL };
  } else {
    return { upload: null, IsValidURL: checkURL };
  }
};

export const getUserLinks = async () => {
  connectToDatabase();
  const session = await auth();
  const userId: any = session?.user?.id;

  const data = await Links.find().lean();

  const filteredData: any = data.filter((item) => item.userId === userId);
  // console.log(filteredData);

  return filteredData;
};

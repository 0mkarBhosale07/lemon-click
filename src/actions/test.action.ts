"use server";
import Links from "@/models/links.model";
import { connectToDatabase } from "@/db";

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

  const { link } = params;
  const checkURL = isValidURL(link);

  const parseUrl = new URL(link);
  const hostname = parseUrl.hostname;
  const path = parseUrl.pathname + parseUrl.search;

  const platformMappings: any = {
    "youtube.com": {
      androidIntentUrl: `intent://${hostname}${path}#Intent;scheme=https;package=com.google.android.youtube;end;`,
      iosUrl: `youtube://${path}`,
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
  };

  const fallbackUrl = link;

  const platform = Object.keys(platformMappings).find((key) =>
    hostname.includes(key)
  );
  const androidIntentUrl = platform
    ? platformMappings[platform].androidIntentUrl
    : fallbackUrl;
  const iosUrl = platform ? platformMappings[platform].iosUrl : fallbackUrl;
  // console.log({
  //   parseUrl,
  //   hostname,
  //   path,
  //   fallbackUrl,
  //   platform,
  //   androidIntentUrl,
  //   iosUrl,
  // });

  const data = {
    platform: platform || "web",
    originalUrl: link,
    androidIntentUrl: androidIntentUrl,
    iosUrl: iosUrl,
    fallbackUrl: fallbackUrl,
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

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return "iOS";
  }

  return "other";
}

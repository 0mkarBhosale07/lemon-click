"use server";
import Links from "@/models/links.model";
import { connectToDatabase } from "@/db";
import InApp from "detect-inapp";

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
  const useragent = navigator.userAgent || navigator.vendor;
  const inapp = new InApp(useragent);
  let browser = inapp.browser;
  let os = getMobileOperatingSystem();
  let desktop = inapp.isDesktop;
  let mobile = inapp.isMobile;

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
  const devicetype = desktop ? "Desktop" : mobile ? "Mobile" : "none";
  const ostype = os;
  const BrowserType = browser;

  const checkURL = isValidURL(link);
  const data = {
    link,
    redirection_link,
    userId,
    DeviceType: devicetype,
    OsType: ostype,
    BrowserType: BrowserType,
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

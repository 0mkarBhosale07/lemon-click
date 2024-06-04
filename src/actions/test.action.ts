"use server";

export const getData = async () => {};

export const uploadTestData = async (params: any) => {
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

  const data = {
    link,
    isValidURL: checkURL,
  };

  console.log(data);

  return data;
};

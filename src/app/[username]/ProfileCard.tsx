import React from "react";
import {
  FaChrome,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSpotify,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const ProfileCard = ({
  name,
  username,
  bio,
  links,
  displayImage,
  profileImage,
}: any) => {
  //   console.log(links);

  const renderLinkComponent = (
    tag: string,
    title: string,
    link: string,
    index: string
  ) => {
    const components: any = {
      instagram: Instagram,
      facebook: Facebook,
      linkedin: LinkedIn,
      spotify: Spotify,
      youtube: Youtube,
      x: X,
      web: Web,
    };

    const Component = components[tag];
    return Component ? (
      <Component key={index} title={title} link={link} />
    ) : null;
  };

  return (
    <div>
      <div className="info bg-gray-900 py-5 rounded-xl">
        <div className="info md:flex justify-center items-center gap-10">
          <div className="image">
            {displayImage === "yes" ? (
              <div>
                <Image
                  src={profileImage}
                  alt={username}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto md:mx-0 mb-3 md:mb-0 w-20"
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="info-dynamic text-white">
            <h1 className="name text-3xl font-bold  text-center md:text-right">
              {name}
            </h1>
            <h1 className="username text-center md:text-right mt-2">
              @{username}
            </h1>
          </div>
        </div>
        <p className="bio w-80 text-white text-center mt-5 md:w-[500px]">
          {bio}
        </p>
      </div>
      <div className="links mt-5 px-3 md:px-0">
        <h1 className="text-center font-bold text-xl mb-5">
          Links to follow up!
        </h1>
        {links.map((item: any, index: any) =>
          renderLinkComponent(item.tag, item.title, item.url, index)
        )}
      </div>
      <div className="footer mt-5">
        <p className="text-center">
          Created using{" "}
          <Link
            href="https://lemonclick.vercel.app"
            className="font-bold underline"
          >
            Lemon Click
          </Link>
        </p>
      </div>
    </div>
  );
};
const Instagram = ({ title, link }: any) => (
  <Link
    href={link}
    target="_blank"
    className="instagram-card grid grid-cols-4 gap-3 items-center justify-center my-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:to-[#9a6a27] hover:from-[#833ab47b] hover:via-[#fd1d1d80] w-72 md:w-80 py-2 rounded-lg mx-auto"
  >
    <FaInstagram className="col-span-1 text-2xl text-white justify-self-center" />
    <p className="col-span-3 handel font-bold text-white whitespace-nowrap overflow-hidden">
      {title}
    </p>
  </Link>
);

const Facebook = ({ title, link }: any) => (
  <Link
    href={link}
    target="_blank"
    className="instagram-card grid grid-cols-4 gap-3 items-center justify-center my-2 bg-gradient-to-r from-[#2c26e1] via-[#5665d4] to-[#4047ab] hover:to-[#4047ab79] hover:from-[#2c26e17d] hover:via-[#5665d47f] w-72 md:w-80 py-2 rounded-lg mx-auto"
  >
    <FaFacebookF className="col-span-1 text-2xl text-white justify-self-center" />
    <p className="col-span-3 handel font-bold text-white whitespace-nowrap overflow-hidden">
      {title}
    </p>
  </Link>
);

const Spotify = ({ title, link }: any) => (
  <Link
    href={link}
    target="_blank"
    className="instagram-card grid grid-cols-4 gap-3 items-center justify-center my-2 bg-gradient-to-r from-[#1db954] via-[#1db95481] to-[#1db954] hover:to-[#1db95481] hover:from-[#1db95481] hover:via-[#1db954] w-72 md:w-80 py-2 rounded-lg mx-auto"
  >
    <FaSpotify className="col-span-1 text-2xl text-white justify-self-center" />
    <p className="col-span-3 handel font-bold text-white whitespace-nowrap overflow-hidden">
      {title}
    </p>
  </Link>
);

const Youtube = ({ title, link }: any) => (
  <Link
    href={link}
    target="_blank"
    className="instagram-card grid grid-cols-4 gap-3 items-center justify-center my-2 bg-gradient-to-r from-[#ff0000] to-[#ff0000] hover:to-[#ff00007c] hover:from-[#ff00007c] w-72 md:w-80 py-2 rounded-lg mx-auto"
  >
    <FaYoutube className="col-span-1 text-2xl text-white justify-self-center" />
    <p className="col-span-3 handel font-bold text-white whitespace-nowrap overflow-hidden">
      {title}
    </p>
  </Link>
);

const X = ({ title, link }: any) => (
  <Link
    href={link}
    target="_blank"
    className="instagram-card grid grid-cols-4 gap-3 items-center justify-center my-2 bg-gradient-to-r from-[#36D8FF] via-[#00ACEE] to-[#36D8FF] hover:to-[#36d7ff7a] hover:from-[#36d7ff7a] hover:via-[#00abee7b] w-72 md:w-80 py-2 rounded-lg mx-auto"
  >
    <FaXTwitter className="col-span-1 text-2xl text-white justify-self-center" />
    <p className="col-span-3 handel font-bold text-white whitespace-nowrap overflow-hidden">
      {title}
    </p>
  </Link>
);

const LinkedIn = ({ title, link }: any) => (
  <Link
    href={link}
    target="_blank"
    className="instagram-card grid grid-cols-4 gap-3 items-center justify-center my-2 bg-gradient-to-r from-[#0077b5] via-[#00ACEE] to-[#0077b5] hover:to-[#0077b57a] hover:from-[#0077b57a] hover:via-[#00abee7b] w-72 md:w-80 py-2 rounded-lg mx-auto"
  >
    <FaLinkedinIn className="col-span-1 text-2xl text-white justify-self-center" />
    <p className="col-span-3 handel font-bold text-white whitespace-nowrap overflow-hidden">
      {title}
    </p>
  </Link>
);

const Web = ({ title, link }: any) => (
  <Link
    href={link}
    target="_blank"
    className="instagram-card grid grid-cols-4 gap-3 items-center justify-center my-2 bg-gradient-to-r from-[#fbbc05] to-[#FFFFFF] hover:to-[#ffffff81] hover:from-[#fbbd057a] w-72 md:w-80 py-2 rounded-lg mx-auto"
  >
    <FaChrome className="col-span-1 text-2xl text-black justify-self-center" />
    <p className="col-span-3 handel font-bold text-black whitespace-nowrap overflow-hidden">
      {title}
    </p>
  </Link>
);

export default ProfileCard;

import Image from "next/image";
import React from "react";

const AppSupport = () => {
  const data = [
    {
      id: 1,
      icon: "/icons/youtube.png",
      alt: "youtube",
    },
    {
      id: 2,
      icon: "/icons/instagram.png",
      alt: "instagram",
    },
    {
      id: 3,
      icon: "/icons/spotify.png",
      alt: "spotify",
    },
    {
      id: 4,
      icon: "/icons/facebook.png",
      alt: "facebook",
    },
    {
      id: 5,
      icon: "/icons/x.png",
      alt: "X",
    },
  ];
  return (
    <div className="flex gap-2">
      {data.map((val) => (
        <Image
          key={val.id}
          src={val.icon}
          alt={val.alt}
          width={50}
          height={50}
        />
      ))}
    </div>
  );
};

export default AppSupport;

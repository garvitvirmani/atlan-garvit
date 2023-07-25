import Image from "next/image";
import React, { useState } from "react";
import FloatingIconMenu from "./FloatingIconMenu";

const FloatingIcons = () => {
  const [activeIcon, setActiveIcon] = useState(0);
  const handleHover = (item) => {
    setActiveIcon(item);
  };

  const handleMouseLeave = (item) => {
    setActiveIcon(0);
  };

  const [Headings, setHeadings] = useState([
    {
      heading: "Share",
      heading_icon: "/images/share.svg",
      links: [
        {
          route: "https://twitter.com/Densityxchange",
          name: "Twitter",
          icon: "/images/icons8-twitter.svg",
        },
        {
          route: "https://www.instagram.com/densityexchange/",
          name: "Instagram",
          icon: "/images/icons8-instagram.svg",
        },
        {
          route: "https://www.youtube.com/@densityexchange/videos",
          name: "Youtube",
          icon: "/images/icons8-youtube.svg",
        },
      ],
    },
    {
      heading: "Support",
      heading_icon: "/images/service.svg",
      links: [
        {
          route: "https://wa.me/+919035092634",
          name: "Whatsapp",
          icon: "/images/icons8-whatsapp.svg",
        },
        {
          route: "mailto:support@density.exchange",
          name: "Email",
          icon: "/images/icons8-email.png",
        },
      ],
    },
    {
      heading: "Tutorials",
      heading_icon: "/images/videolibrary.svg",
      links: [
        {
          route:
            "https://www.youtube.com/playlist?list=PLm8wGZzUQFqYQmuTaUZr_PPeINHwKmDd7",
          name: "Youtube",
          icon: "/images/icons8-youtube.svg",
        },
      ],
    },
  ]);
  const [Lists, setLists] = useState();

  //sample routes, should contain a key with headername and value as array of objects
  // const navList = [
  //   {
  //     route: "#",
  //     name: "Sample Routecdhvcbh",
  //     icon: "/images/service.svg"
  //   },
  //   {
  //     route: "#",
  //     name: "Sample Route",
  //     icon: "/images/service.svg"
  //   },
  //
  // ];

  return (
    <div
      className="hidden md:visible fixed w-[50px] h-[300px] bg-[#ADD8E6] md:flex flex-col items-center floating-icons-wrapper justify-evenly"
      style={{ top: "calc(50vh - 111px)", right: 10, borderRadius: "10px" }}
    >
      <div
        className="w-full relative floating-icon-pointer cursor-pointer"
        onMouseEnter={() => handleHover(1)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full h-10 hover:bg-neutral-700  flex justify-center items-center ">
          <span className="w-[20px] h-[20px] flex justify-center items-center">
            <Image src={"/images/query.svg"} alt={""} width={30} height={30} />
          </span>
        </div>
        {activeIcon === 1 && <FloatingIconMenu type={"saved"} itemNo={1} />}
      </div>
      <div
        className="w-full relative floating-icon-pointer cursor-pointer"
        onMouseEnter={() => handleHover(2)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full h-10 hover:bg-neutral-700  flex justify-center items-center ">
          <span className="w-[20px] h-[20px] flex justify-center items-center">
            <Image
              src={"/images/history.svg"}
              alt={""}
              width={30}
              height={30}
            />
          </span>
        </div>
        {activeIcon === 2 && <FloatingIconMenu type={"history"} itemNo={2} />}
      </div>
    </div>
  );
};

export default FloatingIcons;

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function MobileNavBarDropDown() {
  const NavBarMenu = [
    {
      attributes: {
        title: "Github",
        url: "",
      },
    },
    { attributes: { title: "Resume", url: "" } },
    ,
    {
      attributes: {
        title: "SQL",
        url: "",
      },
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        inset: "60px 0px 0px 0px",
      }}
      className="flex flex-col justify-start p-4 bg-blue-800 z-30 overflow-hidden"
    >
      <motion.ul
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="side-menu-list flex flex-col gap-4 m-4"
      >
        {NavBarMenu.length &&
          NavBarMenu.map((e, index) => (
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[18px]"
              key={index}
            >
              <Link
                href={e?.attributes?.url}
                className="dark:text-white text-black hover:text-white px-3 py-2 rounded-md text-md font-medium"
                target="_blank"
              >
                {e?.attributes?.title}
              </Link>
            </motion.li>
          ))}
      </motion.ul>
      <Link href={"https://app.density.exchange/auth/signup"} target="_blank">
        <button className="absolute bottom-4 left-1 right-1 rounded-full bg-white text-primary p-3 min-w-[100%] md:min-w-[40%]">
          Get Started Now
        </button>
      </Link>
    </motion.div>
  );
}

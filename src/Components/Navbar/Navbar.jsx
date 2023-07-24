import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
import CTAButton from "../UI/CTA/CTAButton";
import { MobileNavBarDropDown } from "./MobileNavBarDropDown";
import Toggle from "../UI/Toggle";
import ThemeSwitch from "@/Utils/ThemeSwitch";

const Navbar = () => {
  const [IsMobileNavBarDropDownOpen, setIsMobileNavBarDropDownOpen] =
    useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [ContestDetails, setContestDetails] = useState();
  const [NavbarIcons, setNavbarIcons] = useState([0]);

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

  useEffect(() => {
    if (IsMobileNavBarDropDownOpen) {
      document.body.classList.add("no-scroll");
      setVisible(true);
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [IsMobileNavBarDropDownOpen]);

  //hide navbar when scroll direction is down and vise versa
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos <= 200;
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <nav
        className={`fixed bg-primary mx-auto flex justify-center h-[60px] top-0 left-0 right-0 z-30 opacity-90 ${
          !visible && "transition-hidden"
        }`}
      >
        <div className="flex items-center px-5 justify-between  w-full">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center relative mt-1">
              <Link
                href="/"
                className="text-white text-2xl w-[120px]  font-bold"
              >
                <Image
                  src={"https://website-assets.atlan.com/img/atlan-blue.svg"}
                  width={400}
                  height={400}
                  alt={"atlan logo"}
                  loading="eager"
                />
              </Link>

              {/* <div className=" hidden lg:block absolute -bottom-[12px] right-1">
                <Link href={"#"}>
                  <span className="blink">Contest !</span>
                </Link>
              </div> */}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {NavBarMenu?.length &&
                  NavBarMenu.map((e, Index) => {
                    return (
                      <Link
                        href={e?.attributes?.url}
                        className="dark:text-white text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        key={Index}
                        target="_blank"
                      >
                        {e?.attributes?.title}
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className=" flex md:hidden gap-5 ">
            {/* <!-- Mobile menu button --> */}
            <ThemeSwitch />
            <motion.button
              whileTap={{ scale: 0.8 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              aria-expanded="false"
              onClick={() =>
                setIsMobileNavBarDropDownOpen(!IsMobileNavBarDropDownOpen)
              }
            >
              {IsMobileNavBarDropDownOpen ? (
                <FaTimes style={{ color: "gray" }} />
              ) : (
                <GiHamburgerMenu style={{ color: "gray" }} />
              )}
            </motion.button>
          </div>
          <div className="hidden md:flex mr-3 gap-5 items-center">
            <ThemeSwitch />
            <div className="w-[150px]">
              <CTAButton text={"Get Started !"} />
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {IsMobileNavBarDropDownOpen && <MobileNavBarDropDown />}
    </>
  );
};

export default Navbar;

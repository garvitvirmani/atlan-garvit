import React, { useState } from "react";
import { m } from "framer-motion";

//default prop types : Color - "inherit", "white" ; Text: String

const CTAButton = ({
  color = "dark",
  text,
  link = "/SqlEditor",
  deactivate = false,
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <m.button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => {
        if (!deactivate) window.location = link;
      }}
      style={{
        color: color !== "dark" ? "black" : "white",
        backgroundColor: color !== "dark" ? "#ADD8E6" : "black",
      }}
      className={`w-full relative rounded-full py-2 px-1.5 min-h-[40px] border-transparent border  text-sm text-light flex justify-evenly text-center overflow-hidden`}
      aria-label="Click me"
    >
      <m.p
        initial={{ y: 0 }}
        animate={{ y: isHover ? "-100%" : 0, opacity: isHover ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className={`mt-0 text-[15px] font-black absolute top-[21%] w-[80%]`}
      >
        {text}
      </m.p>
      <m.p
        initial={{ y: "120%" }}
        animate={{ y: isHover ? 0 : "100%", opacity: isHover ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={` mt-0 text-[15px] font-black absolute top-[21%]  w-[80%]`}
      >
        {text}
      </m.p>
    </m.button>
  );
};

export default CTAButton;

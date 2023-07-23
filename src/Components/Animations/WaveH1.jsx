import React from "react";
import { m } from "framer-motion";

export const WaveH1 = ({
  textP1 = "",
  textP2 = "",
  textP3 = "",
  textP4 = "",
  textAlignStart = true,
  duration = 1,
  delay = 0.05,
}) => {
  const textArray1 = Array.from(textP1);
  const textArray2 = Array.from(textP2);
  const textArray3 = Array.from(textP3);
  const textArray4 = Array.from(textP4);

  return (
    <m.h1
      className={"h1-hero"}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
    >
      {textArray1.map((letter, index) => (
        <m.span
          key={index}
          initial={{
            opacity: 0,
            y: 50,
            x: 0,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            y: [50, -20, 10, 0, -5, 0],
            x: [0, 5, -5, 3, -3, 0],
            scale: 1,
            transition: {
              duration: duration,
              ease: "easeInOut",
              delay: index * delay,
            },
          }}
          className="text-white"
        >
          {letter}
        </m.span>
      ))}
      {textArray2.map((letter, index) => (
        <m.span
          key={index}
          initial={{
            opacity: 0,
            y: 50,
            x: 0,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            y: [50, -20, 10, 0, -5, 0],
            x: [0, 5, -5, 3, -3, 0],
            scale: 1,
            transition: {
              duration: duration,
              ease: "easeInOut",
              delay: index * delay,
            },
          }}
          className="text-white"
        >
          {letter}
        </m.span>
      ))}{" "}
      {textArray3.map((letter, index) => (
        <m.span
          key={index}
          initial={{
            opacity: 0,
            y: 50,
            x: 0,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            y: [50, -20, 10, 0, -5, 0],
            x: [0, 5, -5, 3, -3, 0],
            scale: 1,
            transition: {
              duration: duration,
              ease: "easeInOut",
              delay: index * delay,
            },
          }}
        >
          {letter}
        </m.span>
      ))}{" "}
      {textArray4.map((letter, index) => (
        <m.span
          key={index}
          initial={{
            opacity: 0,
            y: 50,
            x: 0,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            y: [50, -20, 10, 0, -5, 0],
            x: [0, 5, -5, 3, -3, 0],
            scale: 1,
            transition: {
              duration: duration,
              ease: "easeInOut",
              delay: index * delay * 2,
            },
          }}
          className="font-overpass text-blue-800"
        >
          {letter}
        </m.span>
      ))}
    </m.h1>
  );
};

export default WaveH1;

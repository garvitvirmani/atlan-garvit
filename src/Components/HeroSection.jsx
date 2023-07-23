import { TypeAnimation } from "react-type-animation";

import { m } from "framer-motion";
import CTAButton from "./UI/CTA/CTAButton";
import WaveH1 from "./Animations/WaveH1";
import Image from "next/image";

export default function HeroSection() {
  const data = {
    Heading: {
      part_1: "",
      part_2: "Make every Trade count with ",
      part_3: "",
      part_4: "Crypto Futures",
    },
    subHeading: "bbkj  kllklk",
  };

  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1,
      },
    },
  };
  return (
    <>
      <section className="section-container pt-3 md:pt-12">
        <div className="flex flex-col md:flex-row md:justify-evenly gap-[30px] items-center pt-[100px] pb-[50px] relative top-0">
          <div className="w-full md:w-[40%] lg:w-[50%] px-3 flex flex-col justify-between h-4/5">
            <WaveH1
              textP2={data?.Heading.part_2}
              textP4={data?.Heading.part_4}
              isStaggered
            ></WaveH1>
            <m.div
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 1, ease: "easeInOut" },
              }}
              className="flex justify-center md:justify-start"
            >
              <div className=" py-5 w-[150px]  md:justify-start">
                <CTAButton color="green" text={"TRADE NOW"} />
              </div>
            </m.div>
            <m.div
              className="font-normal text-[15px] my-[5px] flex justify-center md:justify-start"
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 1, ease: "easeInOut" },
              }}
            >
              <TypeAnimation
                sequence={["", 1000, data?.subHeading ?? "", 1000]}
                repeat={0}
                className="text-blue-800 text-[40px]"
                speed={30}
              />
            </m.div>
            <m.div
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 1, ease: "easeInOut" },
              }}
              className="flex gap-5 h-12 mt-7 justify-center md:justify-start"
            >
              <div className="mt-[-4px]">{/* <MediaIconsGroup /> */}</div>
            </m.div>
          </div>
          <div className="lg:w-[650px] w-[300px] ">
            <m.div
              style={{ position: "relative", left: "0px" }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
            >
              <m.div
                className="relative rounded-[20px]"
                variants={cardVariants}
              >
                <Image
                  src={"/images/code_editor.gif"}
                  className="hidden lg:block"
                  width={400}
                  height={200}
                  alt="website trading"
                  priority
                  loading="eager"
                />
              </m.div>
            </m.div>
          </div>
        </div>
      </section>
    </>
  );
}
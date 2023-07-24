import SideBar from "@/Components/SideBar";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const SideMenu = () => {
  const [sideMenu, setSideMenu] = useState(true);

  return (
    <AnimatePresence>
      {sideMenu ? (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.1 }}
            className="text-white shadow-lg top-1 right-0 max-w-sm h-screen"
            style={{ top: "65px", borderRadius: "20px" }}
          >
            <button
              onClick={() => setSideMenu((sideMenu) => !sideMenu)}
              className="bg-black text-white dark:bg-white dark:text-black h-8 w-8 mb-2 rounded-full hidden md:block"
            >
              &times;
            </button>
            <SideBar />
          </motion.div>
        </>
      ) : (
        <button
          onClick={() => setSideMenu((sideMenu) => !sideMenu)}
          className="bg-black text-white dark:bg-white dark:text-black h-8 w-8  mb-2 rounded-full hidden md:block"
          style={{ top: "60px" }}
        >
          {"<"}
        </button>
      )}
    </AnimatePresence>
  );
};

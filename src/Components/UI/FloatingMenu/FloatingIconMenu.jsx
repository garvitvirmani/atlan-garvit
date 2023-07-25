import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLink } from "react-icons/fa";
import Query from "@/Components/Query";
import MainContext from "@/Utils/MainContext";
//TODO:extract to component
const FloatingIconMenu = ({ type, itemNo }) => {
  //floating-box-*Number* manages the positioning of the modals

  const { queryHistory } = useContext(MainContext);
  return (
    <motion.div
      className={`absolute rounded-2xl w-[270px] mr-[30px] ml-[20px] bg-[#2F2F2F] floating-box floating-box-${itemNo} right-[80%] p-2 bg-blue-400`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative flex flex-col justify-center items-center">
        <h1 className="text-[20px] font-black">
          {type == "saved" ? "Pick a Query" : "History"}
        </h1>
        {queryHistory ? <Query type={type} /> : null}
      </div>
    </motion.div>
  );
};

export default FloatingIconMenu;

import React, { useContext } from "react";
import PropTypes from "prop-types";

import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import MainContext from "@/Utils/MainContext";
import ThemeSwitch from "@/Utils/ThemeSwitch";

const Layout = ({ children }) => {
  const { darkMode, setDarkMode } = useContext(MainContext);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="dark:bg-gray-900 min-h-[100vh]">
      <LazyMotion features={domAnimation}>
        <Navbar />
        {children}
      </LazyMotion>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.object,
};
export default Layout;

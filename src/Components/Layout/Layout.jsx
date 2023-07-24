import React from "react";
import PropTypes from "prop-types";

import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children, darkMode, setDarkMode }) => {
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="dark:bg-gray-900 min-h-[100vh]">
      <LazyMotion features={domAnimation}>
        <Navbar />
        {children}
        <button
          onClick={handleDarkModeToggle}
          className="fixed bottom-4 right-4 px-3 py-2 bg-gray-800 text-white rounded-lg shadow-md z-30"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </LazyMotion>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.object,
};
export default Layout;

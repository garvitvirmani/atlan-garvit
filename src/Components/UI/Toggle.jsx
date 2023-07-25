import MainContext from "@/Utils/MainContext";
import React, { useState, useEffect, useContext } from "react";

const Toggle = () => {
  const { darkMode, setDarkMode } = useContext(MainContext);

  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  const switchTheme = () => {
    if (darkMode) {
      return (
        <div className="w-8 h-8 relative rounded-full transition duration-500 transform bg-gray-700 translate-x-[60%]">
          <div className="absolute inset-0 flex items-center justify-center">
            {darkIcon}
          </div>
        </div>
      );
    } else {
      return (
        <div className="w-8 h-8 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2">
          <div className="absolute inset-0 flex items-center justify-center">
            {lightIcon}
          </div>
        </div>
      );
    }
  };

  return (
    <button
      className="w-12 h-6 rounded-full dark:bg-white bg-black flex items-center justify-center transition duration-300 focus:outline-none shadow"
      onClick={toggleTheme}
      aria-label="theme switch"
    >
      {switchTheme()}
    </button>
  );
};

export default Toggle;

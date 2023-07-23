import Navbar from "@/Components/Navbar/Navbar";
import "@/styles/globals.css";
import { LazyMotion, domAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);

  // Check for saved user preference and apply dark mode on initial load
  useEffect(() => {
    const isDarkModePreferred = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkModePreferred);
  }, []);

  // Update the class on the body element to toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    // Save the user preference for future visits
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="dark:bg-gray-900 min-h-[100vh]">
      <LazyMotion features={domAnimation}>
        <Navbar />
        <button
          onClick={handleDarkModeToggle}
          className="fixed bottom-4 right-4 px-3 py-2 bg-gray-800 text-white rounded-lg shadow-md z-30"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <Component
          {...pageProps}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </LazyMotion>
    </div>
  );
}

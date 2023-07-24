import Layout from "@/Components/Layout/Layout";
import Navbar from "@/Components/Navbar/Navbar";
import "@/styles/globals.css";
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

  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
      <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />
    </Layout>
  );
}

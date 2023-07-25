import Layout from "@/Components/Layout/Layout";
import MainContext from "@/Utils/MainContext";
import "@/styles/globals.css";
import { useEffect, useMemo, useState } from "react";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);

  const [query, setQuery] = useState("SELECT * FROM internetData;");
  const [queryHistory, setQueryHistory] = useState({
    saved: [
      "SELECT * FROM internetData;",
      "SELECT id, first_name, last_name FROM internetData;",
    ],
    history: ["SELECT * FROM internetData;"],
    outputData: [],
  });

  const contextValue = useMemo(
    () => ({
      query,
      setQuery,
      queryHistory,
      setQueryHistory,
      darkMode,
      setDarkMode,
    }),
    [query, queryHistory, darkMode]
  );

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
    <MainContext.Provider value={contextValue}>
      <Layout>
        <Component
          {...pageProps}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </Layout>
    </MainContext.Provider>
  );
}

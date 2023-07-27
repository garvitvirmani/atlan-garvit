import Layout from "@/Components/Layout/Layout";
import MainContext from "@/Utils/MainContext";
import "@/styles/globals.css";
import { useEffect, useMemo, useState } from "react";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);

  // old
  // const [query, setQuery] = useState("SELECT * FROM internetData;");
  // const [queryHistory, setQueryHistory] = useState({
  //   saved: [
  //     "SELECT * FROM internetData;",
  //     "SELECT id, first_name, last_name FROM internetData;",
  //   ],
  //   history: ["SELECT * FROM internetData;"],
  //   outputData: [],
  // });

  // new
  const [query, setQuery] = useState("");
  const [queryHistory, setQueryHistory] = useState({
    saved: [
      "CREATE TABLE employees (\r\n  id INT PRIMARY KEY,\r\n  first_name VARCHAR(50),\r\n  last_name VARCHAR(50),\r\n  department VARCHAR(50),\r\n  salary DECIMAL(10, 2)\r\n);\r\nINSERT INTO employees (id, first_name, last_name, department, salary)\r\nVALUES\r\n  (1, 'John', 'Doe', 'IT', 55000.00),\r\n  (2, 'Jane', 'Smith', 'HR', 60000.00),\r\n  (3, 'Bob', 'Johnson', 'Finance', 65000.00),\r\n  (4, 'Alice', 'Williams', 'Marketing', 50000.00);\r\nSELECT * FROM employees;\r\n",
    ],
    history: [],
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

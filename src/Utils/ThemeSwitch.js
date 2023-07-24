// "use client";
import { useContext, useEffect, useState } from "react";
import MainContext from "./MainContext";
import Toggle from "@/Components/UI/Toggle";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="inline-flex items-center z-50">
      <Toggle />
    </div>
  );
};

export default ThemeSwitch;

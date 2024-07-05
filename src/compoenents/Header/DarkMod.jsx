import React, { useEffect, useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";

const DarkMode = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setCurrentTheme("dark");
      document.body.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      id="DarkMode"
      onClick={toggleDarkMode}
      style={currentTheme === "dark" ? { color: "#eee" } : { color: "black" }}
    >
      {/* */}
      {currentTheme === "dark" ? <BsMoonStars /> : <LuSunMoon />}
    </button>
  );
};

export default DarkMode;

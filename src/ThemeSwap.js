import React, { useState, useEffect } from "react";
import "./ThemeSwap.css";

export default function Swap() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  function swapTheme(event) {
    event.preventDefault();
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  }

  return (
    <button
      className={`swap ${isDarkTheme ? "dark" : "light"}`}
      onClick={swapTheme}
    >
      {isDarkTheme ? (
        <i
          className="fa-solid fa-moon"
          title="Switch to Light Theme"
          alt="Dark Theme"
        ></i>
      ) : (
        <i
          className="fa-solid fa-sun"
          title="Switch to Dark Theme"
          alt="Light Theme"
        ></i>
      )}
    </button>
  );
}

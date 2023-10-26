import React, { useState, useEffect } from "react";
import "./ThemeSwap.css";

export default function Swap() {
  // Define if dark theme is active
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Use useEffect to add or remove dark theme
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  //Handle theme swap
  function swapTheme(event) {
    event.preventDefault();
    //Toggle the isDarkTheme state by using the previous value
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  }

  return (
    // Render a button with a class that depends on the current theme (dark or light)
    <button
      className={`swap ${isDarkTheme ? "dark" : "light"}`}
      //The function is triggered when the button is clicked
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

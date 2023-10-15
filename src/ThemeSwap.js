import React from "react";
import "./ThemeSwap.css";

export default function Swap() {
  function swapTheme(event) {
    event.preventDefault();
    let body = document.querySelector("body");
    body.classList.toggle("dark");
  }

  return (
    <button className="swap" onClick={swapTheme}>
      <i className="fa-solid fa-circle-half-stroke"></i>
    </button>
  );
}

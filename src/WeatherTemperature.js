import React from "react";
import "./WeatherInfo";
import "./WeatherTemperature.css";
import "./App";

export default function WeatherTemperature(props) {
  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (props.unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          <strong className="linkUnit">°C</strong> |{" "}
          <a href="/" onClick={showFahrenheit}>
            <span className="linkNone">°F</span>
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            <span className="linkNone">°C</span>
          </a>{" "}
          | <strong className="linkUnit">°F</strong>
        </span>
      </span>
    );
  }
}

import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const ForecastIcon = (props) => {
  // Mapping to corresponding icons
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };

  // Render a weather icon using ReactAnimatedWeather
  return (
    <div className="ForecastIcon">
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="#85a6b1"
        size={props.size}
        animate={true}
      />
    </div>
  );
};

export default ForecastIcon;

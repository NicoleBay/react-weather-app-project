import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <ul>
        <li className="date mt-2">
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <h1>
        <i className="fa-solid fa-location-dot mt-4 mb-2"></i> {props.data.city}
      </h1>
      <div className="row mt-4 temperature-now">
        <div className="col-md-6">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <WeatherTemperature
            unit={props.unit}
            setUnit={props.setUnit}
            celsius={props.data.temperature}
          />
        </div>

        <div className="col-md-6 list">
          <ul>
            <li className="text-capitalize">
              <i className="fa-solid fa-hashtag"></i>
              <strong> {props.data.description}</strong>
            </li>
            <li>
              <i className="fa-solid fa-wind"></i> Wind Speed:{" "}
              <strong>{Math.round(props.data.wind * 2.24)} mph</strong>
            </li>
            <li>
              <i className="fa-solid fa-droplet"></i> Humidity:{" "}
              <strong>{props.data.humidity}%</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

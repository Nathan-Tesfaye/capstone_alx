import React from "react";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";

const Card = ({ weatherData }) => {
  if (!weatherData) {
    return null; // Render nothing if no weather data
  }

  return (
    <div className="flex flex-col items-center gap-1 sm:text-slate-600">
      <img src={weatherData.icon} alt="Weather Icon" className="size-28"/>
      <p className="text-7xl">{weatherData.temperature}&deg;C</p>
      <p className="text-4xl">{weatherData.location}</p>
      <div className="flex gap-12 py-7 text-xl">
        <div className="flex items-center gap-2 ">
          <img src={humidity_icon} alt="Humidity icon" className="size-8 bg-slate-600 rounded-full" />
          <div className="flex flex-col">
            <p>{weatherData.humidity}%</p>
            <span className="text-sm">Humidity</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img src={wind_icon} alt="Wind speed icon" className="size-8 bg-slate-600 rounded-full" />
          <div className="flex flex-col">
            <p>{weatherData.windSpeed} km/hr</p>
            <span className="text-sm">Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

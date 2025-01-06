import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message);
        setWeatherData(null);
        return;
      }

      console.log(data);

      setErrorMessage("");
      const icon = allIcons[data.weather[0]?.icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.error("Failed to fetch data.", error);
      setErrorMessage("Failed to fetch weather data. Please try again.");
    }
  };

  useEffect(() => {
    search("Addis Ababa");
  }, []);

  return (
    <div className="bg-amber-50 rounded-2xl">
      <SearchBar search={search} />
      <ErrorMessage message={errorMessage} />
      <Card weatherData={weatherData} />
    </div>
  );
};

export default Weather;

import React, { useEffect, useState } from "react";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  async function loadInfo(city = "Santa Cruz") {
    try {
      const request = await fetch(
        `${import.meta.env.VITE_APP_URL}&key=${
          import.meta.env.VITE_APP_KEY
        }&q=${city}&days=6&aqi=yes&alerts=yes`
      );
      const json = await request.json();
      setWeather(json);
    } catch (error) {
      console.log(
        "Debe crear archivo .env como se muestra en el README  " + error
      );
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className="h-screen p-3">
      <div className="text-gray-600"></div>
    </div>
  );
};

export default WeatherApp;

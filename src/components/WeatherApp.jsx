import React, { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [burguer, setBurguer] = useState(false);

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
      console.log("Debe crear archivo .env como se muestra en el README  "/n + error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className="h-screen p-3">
      <div className="text-gray-600">
        <button onClick={()=>setBurguer(!burguer)}> 
          {burguer ? (
            <WeatherForm onChangeCity={handleChangeCity} />
          ) : (
            <>||||</>
          )}
        </button>
        <WeatherMainInfo weather={weather} />
      </div>
    </div>
  );
};

export default WeatherApp;

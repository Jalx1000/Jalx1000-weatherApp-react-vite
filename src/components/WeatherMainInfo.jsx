import React from "react";

export default function WeatherMainInfo({ weather }) {
  // console.log(weather);
  return (
    <div className="text-center mt-[50px]">
      <h1 className="text-3xl font-medium">{weather?.location.name}</h1>
      <p className="font-medium">{weather?.current.condition.text}</p>
      <img
        className="mx-auto mt-10"
        src={"http:" + weather?.current.condition.icon}
        width="200"
        alt={weather?.current.condition.text}
      />

      <div className="my-[60px] text-2xl flex justify-around items-center ">
        <p>{weather?.current.humidity}</p>
        <h1 className="text-center text-5xl">
          {weather?.current.temp_c}°<sup>c</sup>
        </h1>
        <p>{weather?.current.wind_kph}</p>
      </div>

      
    </div>
  );
}

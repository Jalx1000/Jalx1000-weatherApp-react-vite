import React from "react";
import CardDay from "./CardDay";
import MoreInfo from "./MoreInfo";

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

      <div className="my-4 flex justify-around items-center" >
        <MoreInfo descripcion={"Uv"} valor={weather?.current.uv} />
        <MoreInfo descripcion={"Gust"} valor={`${weather?.current.gust_kph}`} />
        <MoreInfo descripcion={"Wind dir"} valor={weather?.current.wind_dir} />
      </div>

      <div className="flex justify-around">
        {weather?.forecast.forecastday.map((data) => {
          return (
            <CardDay
              key={data.date_epoch}
              day={data.date}
              img={data.day.condition.icon}
              temp={data.day.maxtemp_c}
              todo={weather.date}
            />
          );
        })}
      </div>
    </div>
  );
}

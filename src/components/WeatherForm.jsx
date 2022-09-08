import React, { useState } from "react";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");
  function onchage(e) {
    const value = e.target.value;
    if (value !== "") setCity(value);
  }
  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md  pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        onChange={onchage}
        placeholder="Ingresar Pais/Ciudad"
        type="text"
        name="search"
      />
    </form>
  );
}

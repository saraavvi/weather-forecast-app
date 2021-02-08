import React, { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

export default function SearchForm() {
  const { setCityInput, getWeather } = useContext(WeatherContext);

  function handleOnChange(e) {
    setCityInput(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    getWeather();
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input onChange={handleOnChange} type="text"></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [cityInput, setCityInput] = useState("");
  //const [city, setCity] = useState("Stockholm");

  function getWeather() {
    console.log(cityInput);
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=a847d162fbce4810444aeba4eb00f237`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  // när sidan laddas ska man kolla vart användaren befinner sig och hämta vädret för den staden direkt
  //   useEffect(() => {
  //     fetch(
  //       "https://api.openweathermap.org/data/2.5/forecast?q=München,DE&appid=a847d162fbce4810444aeba4eb00f237"
  //     )
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []);

  function handleOnChange(e) {
    console.log(e.target.value);
    setCityInput(e.target.value);
  }

  function handleOnSubmit(e) {
    console.log(cityInput);
    e.preventDefault();
    // setCity(input);
    getWeather();
  }

  return (
    <div>
      <h2>Weather forecast App</h2>
      <form onSubmit={handleOnSubmit}>
        <input onChange={handleOnChange} type="text"></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

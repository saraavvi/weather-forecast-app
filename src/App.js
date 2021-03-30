import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { WeatherContext } from "./contexts/WeatherContext";

function App() {
  const [cityInput, setCityInput] = useState("");
  const [currentData, setCurrentData] = useState(null);
  const [dailyData, setDailyData] = useState(null);

  function getWeather(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrentData(data.list[0]);
        localStorage.setItem("cityName", city);
        const daily = data.list.filter((item) => {
          return item.dt_txt.includes("12:00:00");
        })
        daily.shift()
        setDailyData(
          daily
        );
      })
      .catch((err) => alert("City does not exist"));
  }

  return (

    <div>
      <WeatherContext.Provider
        value={{
          cityInput,
          setCityInput,
          currentData,
          setCurrentData,
          dailyData,
          setDailyData,
          getWeather,
        }}
      >
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </WeatherContext.Provider>
    </div>
  );
}

export default App;

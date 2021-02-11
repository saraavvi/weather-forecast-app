import React, { useContext, useEffect } from "react";
import moment from "moment";
import DailyCard from "../components/DailyCard";
import { WeatherContext } from "../contexts/WeatherContext";
import SearchForm from "../components/SearchForm";
import styled from "styled-components";
import "weather-icons/css/weather-icons.css";

const Card = styled.div`
  text-align: center;
  color: white;
`;

export default function HomePage() {
  const { currentData, dailyData, getWeather } = useContext(WeatherContext);

  useEffect(() => {
    if (localStorage.getItem("cityName")) {
      const city = localStorage.getItem("cityName");
      getWeather(city);
    }
  }, []);

  function kToC(kelvin) {
    let celcius = Math.round(kelvin - 273.15);
    return celcius;
  }

  function dateToDay(dt_txt) {
    let date = dt_txt;
    let weekday = moment(date).format("dddd");
    return weekday;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <SearchForm />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          {currentData && (
            <Card>
              {console.log(currentData)}
              <h1>Overcast</h1>
              <h2>{localStorage.getItem("cityName")}</h2>
              <i className="wi wi-day-sunny display-1"></i>
              <h3>{kToC(currentData.main.temp)}°C</h3>
              <h3>{currentData.weather[0].main}</h3>
            </Card>
          )}
        </div>
      </div>
      <div className="row mt-5 p-5">
        <div className="col-md-12 d-flex justify-content-center">
          {dailyData && (
            <>
              {dailyData.slice(1).map((item, index) => {
                const weekday = dateToDay(item.dt_txt);
                const temp = kToC(item.main.temp);
                const weather = item.weather[0].main;
                return (
                  <DailyCard
                    key={index}
                    weekday={weekday}
                    temp={temp}
                    weather={weather}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

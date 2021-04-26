import React, { useContext, useEffect } from "react";
import moment from "moment";
import { WeatherContext } from "../contexts/WeatherContext";
import SearchForm from "../components/SearchForm";
import "weather-icons/css/weather-icons.css";
import MainCard from "../components/MainCard";
import DailyCardContainer from "../components/DailyCardContainer";
import InfoText from "../components/InfoText";

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
  if (localStorage.getItem("cityName")) {
    return (
      <div className="container-fluid vh-100 d-flex flex-column">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <SearchForm />
          </div>
        </div>

        <div className="row mt-5 pt-2">
          <div className="col-md-12 d-flex justify-content-center">
            {currentData && <MainCard kToC={kToC} />}
          </div>
        </div>

        <div className="row flex-grow-1 align-items-center pt-2">
          <div className="col-md-12 d-flex justify-content-center">
            {dailyData && (
              <DailyCardContainer kToC={kToC} dateToDay={dateToDay} />
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-fluid vh-100 d-flex flex-column">
        <div className="row m-auto">
          <div className="col-md-12 d-flex justify-content-center">
            <InfoText />
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <SearchForm />
          </div>
        </div>
      </div>
    )
  }
}

import React, { useContext } from "react";
import moment from "moment";
import DailyCard from "../components/DailyCard";
import { WeatherContext } from "../contexts/WeatherContext";
import SearchForm from "../components/SearchForm";

export default function HomePage() {
  const { currentData, cityInput, dailyData } = useContext(WeatherContext);

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
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <SearchForm />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          {currentData && (
            <div>
              <h1>Overcast</h1>
              <h2>{cityInput}</h2>
              <h3>{kToC(currentData.main.temp)} Celcius</h3>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          {dailyData && (
            <>
              {dailyData.slice(1).map((item, index) => {
                const weekday = dateToDay(item.dt_txt);
                const temp = kToC(item.main.temp);
                return <DailyCard key={index} weekday={weekday} temp={temp} />;
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

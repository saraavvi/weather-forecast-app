import React, { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import DailyCard from "../components/DailyCard";
import styled from "styled-components";

const DisplayCards = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 576px) {
  display: none;
}
`;


export default function DailyCardContainer({ kToC, dateToDay }) {
  const { dailyData } = useContext(WeatherContext);
  return (
    <DisplayCards>
      {dailyData.map((item, index) => {
        const weekday = dateToDay(item.dt_txt);
        const temp = kToC(item.main.temp);
        const weather = item.weather[0].main;
        const weatherDescription = item.weather[0].description;
        return (
          <DailyCard
            key={index}
            weekday={weekday}
            temp={temp}
            weather={weather}
            weatherDescription={weatherDescription}
          />
        );
      })}
    </DisplayCards>
  );
}

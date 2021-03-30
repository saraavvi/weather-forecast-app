import React, { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import styled from "styled-components";
import { icon } from "../Icons";

const Card = styled.div`
  text-align: center;
  color: white;
  // display: flex;
  // border: 1px solid white;
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 1.7rem;
  }
`;
const DetailContainer = styled.div`
  margin: 1rem;
  p {
    margin: 0;
  }
`;

export default function MainCard({ kToC }) {
  const { currentData } = useContext(WeatherContext);
  const weather = currentData.weather[0].main;
  const temp = kToC(currentData.main.temp);
  const feelsLike = kToC(currentData.main.feels_like);
  const weatherDescription = currentData.weather[0].description;
  const windSpeed = currentData.wind.speed;
  const humidity = currentData.main.humidity;

  return (
    <Card>
      <div>
        <h1>{localStorage.getItem("cityName")}</h1>
        <h3>{weatherDescription}</h3>
        <i className={`${icon[weather]} display-1`}></i>
        <h2>{temp}°C</h2>
      </div>
      <div className="d-flex">
        <DetailContainer>
          <i className="wi wi-strong-wind"></i>
          <div>
            <p>Wind Speed</p>
            {windSpeed} m/s
          </div>
        </DetailContainer>
        <DetailContainer>
          <i className="wi wi-humidity"></i>
          <p>Humidity</p>
          {humidity}%
        </DetailContainer>
        <DetailContainer>
          <i className="wi wi-thermometer"></i>
          <p>Feels Like</p>
          <p>{feelsLike}°C</p>
        </DetailContainer>
      </div>
    </Card>
  );
}

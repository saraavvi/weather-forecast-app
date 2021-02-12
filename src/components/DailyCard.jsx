import React from "react";
import { icon } from "../Icons";
import styled from "styled-components";

const Card = styled.div`
  text-align: center;
  //   padding: 2rem;
  color: white;
  //   border: 1px solid white;
  p {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }
    h4 {
      font-size: 1rem;
    }
  }
`;

export default function DailyCard({
  weekday,
  temp,
  weather,
  weatherDescription,
}) {
  return (
    <Card className="col-md-2">
      <h4>{weekday}</h4>
      <p>{temp}°C</p>
      <i className={`${icon[weather]} display-4`}></i>
      <p>{weatherDescription} </p>
    </Card>
  );
}

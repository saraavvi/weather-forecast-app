import React from "react";
import styled from "styled-components";

const Card = styled.div`
  text-align: center;
  padding: 2rem;
  color: white;
`;

export default function DailyCard({ weekday, temp, weather }) {
  return (
    <Card className="col-md-3">
      <h4>{weekday}</h4>
      <h4>{temp}°C</h4>
      <h4>{weather} </h4>
    </Card>
  );
}

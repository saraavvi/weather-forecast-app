import React from 'react'
import styled from "styled-components";

const Message = styled.p`
  color: white;
  font-size: 2rem;
  text-align: center;
`;

const Welcome = styled.h1`
  color: white;
  text-align: center;
`;

export default function InfoText() {
    return (
        <div>
            <Welcome>Welcome,</Welcome>
            <Message>please search for a city to get weather forecast.</Message>
        </div>
    )
}

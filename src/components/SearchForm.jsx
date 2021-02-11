import React, { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
  input {
    width: 100%;
    height: 3rem;
    opacity: 0.3;
  }
  display: flex;
  wrap: no-wrap;
`;

const FormContainer = styled.div`
  margin-top: 2rem;
  width: 80%;
  text-align: center;
`;

export default function SearchForm() {
  const { setCityInput, cityInput, getWeather } = useContext(WeatherContext);

  function handleOnChange(e) {
    setCityInput(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    localStorage.setItem("cityName", cityInput);
    getWeather(cityInput);
  }

  return (
    <FormContainer>
      <StyledForm onSubmit={handleOnSubmit}>
        <input onChange={handleOnChange} type="text"></input>
        <button type="submit">Search</button>
      </StyledForm>
    </FormContainer>
  );
}

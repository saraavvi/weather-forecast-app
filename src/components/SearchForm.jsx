import React, { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import styled from "styled-components";

const StyledForm = styled.form`
  input {
    width: 100%;
    height: 3rem;
    opacity: 0.3;
    border-radius: 0.3rem;
    border: none;
    padding: 0.5rem;
    &:hover {
      opacity: 0.7;
    }
    &:focus {
      opacity: 0.7;
      outline: none;
    }
  }
`;

// const SearchButton = styled.button`
//   color: white;
//   background-color: black;
//   border: none;
// `;

const FormContainer = styled.div`
  margin-top: 2rem;
  width: 50%;
`;

export default function SearchForm() {
  const { setCityInput, cityInput, getWeather } = useContext(WeatherContext);

  function handleOnChange(e) {
    setCityInput(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    // localStorage.setItem("cityName", cityInput);
    getWeather(cityInput);
    setCityInput("");
  }

  return (
    <FormContainer>
      <StyledForm onSubmit={handleOnSubmit}>
        <input
          value={cityInput}
          onChange={handleOnChange}
          type="text"
          placeholder="Type the name of a city and press enter"
        ></input>
        {/* <SearchButton type="submit">Search</SearchButton> */}
      </StyledForm>
    </FormContainer>
  );
}

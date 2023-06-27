import React from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "../../../components/Styles/Buttons/Button.styles";
import PrimaryButton from "../../../components/Styles/Buttons/PrimaryButton";
import InputContainer from "../../../components/Styles/Inputs/InputContainer";

Button.defaultProps = {
  theme: {
    main: "#BF4F74",
  },
};

const theme = {
  main: "lightgreen",
};

const theme2 = {
  main: "red",
};

const Logout = () => {
  return (
    <>
      <PrimaryButton>Normal</PrimaryButton>
      <ThemeProvider theme={theme}>
        <PrimaryButton>Themed</PrimaryButton>
      </ThemeProvider>
      <ThemeProvider theme={theme2}>
        <PrimaryButton>Second Themed</PrimaryButton>
      </ThemeProvider>
      <InputContainer type="text" placeholder="Enter your name" />
      <InputContainer type="password" placeholder="Enter password" />
    </>
  );
};

export default Logout;

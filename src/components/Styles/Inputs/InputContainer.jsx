import React from "react";
import { InputStyle } from "./Inputs.styles";
const InputContainer = ({ type, placeholder, value }) => {
  return (
    <>
      <InputStyle type={type} placeholder={placeholder} value={value} />
    </>
  );
};

export default InputContainer;

import styled from "styled-components"

export const Button = styled.button`
  color: ${(props) => props.theme.main};
  padding: 6px 12px;
  border: 1px solid ${(props) => props.theme.main};
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
`

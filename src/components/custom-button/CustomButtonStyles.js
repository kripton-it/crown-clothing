import styled, { css } from "styled-components";

const baseButtonStyles = css`
  background-color: black;
  color: white;
  border-color: transparent;

  &:hover {
    background-color: white;
    color: black;
    border-color: black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border-color: black;

  &:hover {
    background-color: black;
    color: white;
    border-color: transparent;
  }
`;

const googleButtonStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyles = ({ inverted, isGoogleSignIn }) =>
  isGoogleSignIn
    ? googleButtonStyles
    : inverted
    ? invertedButtonStyles
    : baseButtonStyles;

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  ${getButtonStyles}
`;

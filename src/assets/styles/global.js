// Tema Global da Apliocação
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: unset;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    transition: background 0.3s ease-in-out;
  }
  body, html{
    background: #1a1a1a;
    font-size: 16px;
    width: 100vw;
    height: 100vh;

  }
  button {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background-color: transparent;
    border-radius: 40px;
    border: none;
    width: 60px;
    height: 60px;
    padding: 10px;
    &:hover {
      border-radius: 9px;
      background-color: rgba(255, 255, 255, 0.17);
      margin-top: -5px;
      margin-bottom: 5px;
      filter: drop-shadow(0px 6px 2px rgba(0, 0, 0, 0.81));
      }
  }
`;

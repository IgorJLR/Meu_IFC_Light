import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: initial;
  flex-direction: column;
  width: 500px;
  height: 100%;
  gap: 15px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    height: unset;
  }
`;
export const GreetingsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background: linear-gradient(264.52deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  filter: drop-shadow(0px 6px 13px rgba(0, 0, 0, 0.81));

  div {
    display: flex;
    flex: row;
    gap: 10px;
  }
`;

export const Greetings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  h1 {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    text-transform: uppercase;
    background: linear-gradient(93.2deg, #6F00FF 0%, #AD00FF 103.68%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  small {
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    font-size: 18px;
    color: white;
  }

`;

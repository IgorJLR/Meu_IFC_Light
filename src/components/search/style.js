import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  background: linear-gradient(264.52deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%);
  background-size: 100%;
  background-repeat: no-repeat;

  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  filter: drop-shadow(0px 6px 13px rgba(0, 0, 0, 0.81));

  input {
    width: 100%;
    background-color: transparent;
    border-radius: 11px;
    border: none;
    color: white;
    padding: 18px 11px;

    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 30;

    &:focus{
      outline: none;
    }
  }
  &:hover {
    background-position: 200px;
  }
  &:focus-within{
    background-position: 200px;
    filter: drop-shadow(0px 6px 13px rgba(69, 4, 80, 1));
  }
`;

export const SearchInputs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    button:disabled {
      opacity: 0.5;
    }
`;

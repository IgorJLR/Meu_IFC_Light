import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 25px;
  gap: 15px;

  background: linear-gradient(356.9deg, #000000 3.78%, #14142B 69.17%);

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    padding: 25px;
    gap: 25px;

    background: linear-gradient(7.31deg, #000000 0%, #14142B 100%);
    }


`;

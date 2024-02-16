import styled from 'styled-components';

export const Container = styled.div`
  /* width: 500px;
  z-index: 10000;
  position: absolute; */
  display: grid;
  /* flex-direction: column; */
  grid-template-columns: 1fr 1fr;
  /* border: 1px solid gray; */
  color: white;
  padding: 11px;
  border: solid 1px rgba(255, 255, 255, 0.17);
  margin-top: 12px;
  gap: 11px;
  border-radius: 5px;

  &:empty {
    border: none;
    background-color: transparent;
    position: absolute;
  }

  /* caixa de resultados */
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(264.52deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%);
    background-size: 100%;
    background-repeat: no-repeat;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 9px;
    box-shadow: 0px 13px 14px 3px rgba(0, 0, 0, 0.81);
    width: 100%;
    cursor: pointer;
    text-align: start;
    margin: 2px 0;
    padding: 10px;

    &:hover {
      background-position: 200px;
      box-shadow: 0px 3px 7px -2px rgba(0, 0, 0, 0.81);
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
`;

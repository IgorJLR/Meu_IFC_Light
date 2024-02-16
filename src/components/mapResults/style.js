import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 100%;

  .leaflet-container {
    border-radius: 11px;
    flex-grow: 1;
  }


  .leaflet-control-zoom-in, .leaflet-control-zoom-out {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
    background: linear-gradient(225deg, rgba(56, 56, 67, 0.9) 0%, rgba(73, 73, 88, 0.35) 100%);
    margin-bottom: 5px;
    border-radius: 9px !important;
    border: none;
    width: 40px !important;
    height: 40px !important;
    padding: 10px;

    span {
      color: initial ;
      transition: all 0.3s ease-out;
    }
    &:hover {
      border-radius: 10px;
      margin-right: -5px;
      margin-left: 10px;
      box-shadow: -3px 5px 4px rgba(0, 0, 0, 0.21);
      span {
        color: white
      }
      }
  }

  .leaflet-control-zoom {
    overflow: visible;
  }

  .leaflet-control-fullscreen {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    background: linear-gradient(225deg, rgba(56, 56, 67, 0.9) 0%, rgba(73, 73, 88, 0.35) 100%);
    border-radius: 9px !important;
    margin-top: 0px;
    border: none;
    width: 40px !important;
    height: 40px !important;
    a {
      background-color: transparent;
      filter: invert(100%);
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }


    &:hover {
      border-radius: 10px;

      margin-left: 20px;
      box-shadow: -3px 5px 4px rgba(0, 0, 0, 0.21);

      a {
        filter: invert(0);
      }
    }
  }

  .leaflet-popup-content-wrapper, .leaflet-popup-tip {
    color: white;
    background: linear-gradient(264.52deg, #310071 0%, #000000 51.56%, rgba(0, 0, 0, 0.72) 100%) !important;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 10px
    }

    span {
      font-family: 'Rubik', sans-serif;
      font-weight: 300;
      font-size: 14px;
      text-align: left;
    }
    button {
      display: block;
      color: white;
      width: fit-content;
      padding: 10px;
      height: auto;
      text-transform: uppercase;
    }

    @media screen and (min-width: 768px) {
      button {
        display: none;
      }
    }
  }

  .leaflet-touch .leaflet-control-layers, .leaflet-touch .leaflet-bar {
    border: none;
  }

  .leaflet-popup-close-button {
    span {
      width: 100px !important;
      height: 100px !important;
      color: white;
    }
  }
`;

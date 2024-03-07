import React, { useRef, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import L from "leaflet";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Container } from "./style";

const defaultCenter = [-27.016526114032356, -48.657304712972156];
const defaultZoom = 20;
const defaultMinZoom = 14;
const bounds = [
  [-27.030384113005965, -48.68121530743459],
  [-26.99815597827438, -48.64297243152386],
];

function Mapa() {
  const mapRef = useRef();
  useEffect(() => {
    console.log("Deu certo");
    const hashParams = new URLSearchParams(window.location.hash.slice(1)); // Obtém os parâmetros do fragmento da URL
    const searchParam = hashParams.get('search'); // Obtém o valor do parâmetro 'search'
  
    if (searchParam) {
      // Realize a função com o parâmetro 'search'
      console.log('Parâmetro de busca:', searchParam);
      // Aqui você pode realizar qualquer função desejada com o parâmetro 'search'
  
      // Redirecionar para a URL desejada com o parâmetro de busca
      window.location.href = `/Meu_IFC_Light/search:${searchParam}`;
    }
  }, []);

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    if (map) {
      map.on("locationfound", handleOnLocationFound);
      map.on("locationerror", handleOnLocationError);

      return () => {
        map.off("locationfound", handleOnLocationFound);
        map.off("locationerror", handleOnLocationError);
      };
    }
  }, []);

  /**
   * handleOnLocationFound
   * @param {object} event Leaflet LocationEvent object
   */
  function handleOnLocationFound(event) {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    const latlng = event.latlng;
    const radius = event.accuracy;
    const circle = L.circle(latlng, radius);

    circle.addTo(map);
  }

  /**
   * handleOnLocationError
   * @param {object} error Leaflet ErrorEvent object
   */
  function handleOnLocationError(error) {
    alert(`Unable to determine location: ${error.message}`);
  }

  console.log("Before return");
  return (
    <Container>
      <Map
        ref={mapRef}
        center={defaultCenter}
        minZoom={defaultMinZoom}
        zoom={defaultZoom}
        maxBounds={[
          // south west
          [-27.030384113005965, -48.68121530743459],
          // north east
          [-26.99815597827438, -48.64297243152386],
        ]}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga"
          //url="https://supreme-carnival-v7rgppw7jwpcpwgj-5000.app.github.dev/{z}/{x}/{y}.png"
        />
      </Map>
    </Container>
  );
};

export default Mapa;

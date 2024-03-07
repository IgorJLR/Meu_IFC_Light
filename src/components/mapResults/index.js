import React, { useRef, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Polyline, Map, TileLayer, Marker, Popup } from "react-leaflet";
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import L from "leaflet";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import "leaflet/dist/leaflet.css";
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from "./style";
import ModalPopup from "../popUp";

import Data from '../../assets/data.json';
import defaultMarker from '../../assets/imgs/map-pointer.svg'
import iconC from "./constants";
import useGeoLocation from "./useGeoLocation";
import 'leaflet/dist/leaflet.css';

const defaultCenter = [-27.016526114032356, -48.657304712972156];
const defaultZoom = 19;
const defaultMinZoom = 14;
const bounds = [
  [-27.030384113005965, -48.68121530743459],
  [-26.99815597827438, -48.64297243152386],
];
const coordinates = [
  [
    -27.018187,
    -48.655709
  ],
  [
    -27.016719,
    -48.656979
  ],
  [
    -27.016082,
    -48.657526
  ],
  [
    -27.015545,
    -48.658004
  ],
  [
    -27.015551,
    -48.658034
  ],
  [
    -27.015543,
    -48.658082
  ],
  [
    -27.015521,
    -48.658113
  ],
  [
    -27.015996,
    -48.658434
  ],
  [
    -27.016441,
    -48.658712
  ],
  [
    -27.016324,
    -48.658926
  ],
  [
    -27.01651,
    -48.659044
  ],
  [
    -27.016440404707257, -48.65915952839324
  ]
];

export default function MapResults() {
  const [routeCoordinates, setRouteCoordinates] = useState([]); // Definindo o estado dentro do componente

  const mapRef = useRef();

  const history = useHistory();
  const url = window.location.href;
  const searchParamIndex = url.indexOf('/Meu_IFC_Light/search:');

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.slice(1)); // Obtém os parâmetros da URL após o '#'
    const searchParam = params.get('search'); // Obtém o valor do parâmetro 'search'

    if (searchParam) {
      // Realize a função com o parâmetro 'search'
      console.log('Parâmetro de busca:', searchParam);
      // Aqui você pode realizar qualquer função desejada com o parâmetro 'search'

      // Redirecionar para a URL desejada com o parâmetro de busca
      history.push(`/Meu_IFC_Light/search:${searchParam}`);
      
    }
  }, [history, searchParamIndex, url]); // O segundo argumento do useEffect vazio assegura que isso só aconteça uma vez, quando o componente for montado
  
  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    map.on("locationfound", handleOnLocationFound);
    map.on("locationerror", handleOnLocationError);

    // setRouteCoordinates(coordinates); // Removido daqui, pois não há definição para 'coordinates'
    // Coordenadas da rota fornecidas diretamente
    
    setRouteCoordinates(coordinates);
    return () => {
      map.off("locationfound", handleOnLocationFound);
      map.off("locationerror", handleOnLocationError);
    };
    
  }, []);

  function handleOnLocationFound(event) {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    const latlng = event.latlng;
    const radius = event.accuracy;
    const circle = L.circle(latlng, radius);

    circle.addTo(map);
  }

  function handleOnLocationError(error) {
    alert(`Unable to determine location: ${error.message}`);
  }

  const params = useParams();
  const { id } = params;

  const formatedId = id.replace(/:/g, '');

  const roomObj = Data.filter(obj => {
    return obj.id == formatedId
  })

  const iconPath = require(`../../assets/imgs/classImgs/${roomObj[0].foto}`);

  const markerIcon = new L.Icon({
    iconUrl: iconPath,
    iconSize: [40, 45],
    open: true,
  });

  const location = useGeoLocation();

  return (
    <Container>
      <Map
        ref={mapRef}
        center={roomObj[0].loc}
        minZoom={defaultMinZoom}
        zoom={defaultZoom}
        fullscreenControl={true}
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
          maxZoom={22}
        />
        
        <Marker position={[roomObj[0].loc[0]+0.00005,roomObj[0].loc[1]+0.00005]} icon={markerIcon}>
          <Popup>
            <span>
              Seu destino está aqui: {roomObj[0].title}. {roomObj[0].andar === "Térreo" ? null : `No ${roomObj[0].andar} andar;`} Bloco {roomObj[0].bloco}.
            </span>
            <ModalPopup />
          </Popup>
        </Marker>
        {location.loaded && !location.error && (
          <Marker icon={iconC} position={[location.coordinates.lat, location.coordinates.lng]}>
            <Popup>
              <b>Você está aqui.</b>
            </Popup>
          </Marker>
        )}
        {/* Renderize a camada de rota 
        <Polyline positions={routeCoordinates} color="#ff00007a" weight={5}/>*/}
      </Map>
      
    </Container>
  );
}

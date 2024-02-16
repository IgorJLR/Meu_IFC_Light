import React, { useRef, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import L, { icon, map } from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
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

const defaultCenter = [-27.016526114032356, -48.657304712972156];
const defaultZoom = 19;
const defaultMinZoom = 14;
const bounds = [
  [-27.030384113005965, -48.68121530743459],
  [-26.99815597827438, -48.64297243152386],
];

export default function MapResults() {
  const mapRef = useRef();
  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    map.on("locationfound", handleOnLocationFound);

    // Additional event handler for listening for
    // errors in finding someone's location

    map.on("locationerror", handleOnLocationError);

    return () => {
      map.off("locationfound", handleOnLocationFound);
      map.off("locationerror", handleOnLocationError);
    };
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
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="https://supreme-carnival-v7rgppw7jwpcpwgj-5000.app.github.dev/{z}/{x}/{y}.png"
        maxZoom={19.9}
        />
        <Marker position={ roomObj[0].loc } icon={ markerIcon } >
          <Popup>
            <span>Seu destino está aqui: {roomObj[0].title}. No {roomObj[0].andar} andar; Bloco {roomObj[0].bloco}.</span>
            <ModalPopup />
          </Popup>
        </Marker>
        {location.loaded && !location.error && (
            <Marker icon={ icon } position={[location.coordinates.lat, location.coordinates.lng]}>
                <Popup>
                  <b>Você está aqui.</b>
                </Popup>
            </Marker>
        )}
      </Map>
    </Container>
  );
};

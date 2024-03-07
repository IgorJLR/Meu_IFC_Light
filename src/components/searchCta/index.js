import React from "react";

import { Container } from './style';
import Map from '../../components/map';

export default function SearchCta(props) {
  console.log('SearchCTA running');
  
  // Renderizar apenas quando não houver valor de pesquisa
  if (props.value && props.value.trim() !== '') {
    return null;
  }

  return (
    <Container>
      <Map></Map>
    </Container>
  );
};

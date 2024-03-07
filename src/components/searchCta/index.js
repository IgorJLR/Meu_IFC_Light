import React from "react";

import { Container } from './style';

export default function SearchCta(props) {
  console.log('SearchCTA running');
  
  // Renderizar apenas quando não houver valor de pesquisa
  if (props.value && props.value.trim() !== '') {
    return null;
  }

  return (
    <Container>
      <h1>Pesquise por uma Sala ou Professor</h1>
    </Container>
  );
};

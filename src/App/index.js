import React, { useRef, useEffect } from "react";

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../assets/styles/global';
import defaultTheme from '../assets/styles/themes/default';
import Layout from "../components/Layout";
import { Container } from './style';

function App() {
  
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

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Layout />
      </Container>
    </ThemeProvider>
  );
};

export default App;

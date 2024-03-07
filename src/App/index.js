import React, { useEffect } from 'react'; // Importe o useEffect aqui

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../assets/styles/global';
import defaultTheme from '../assets/styles/themes/default';
import Search from '../components/search';

import Layout from "../components/Layout";

import { Container } from './style';

function App() {
  

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

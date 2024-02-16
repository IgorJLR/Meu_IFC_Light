import React from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../assets/styles/global';
import defaultTheme from '../assets/styles/themes/default';

import Layout from "../components/Layout";

import { Container } from './style';

// const SearchContext = React.createContext({ value: "", })

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

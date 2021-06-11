import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themePrimer } from 'force-components';
import { LandingPage } from './features/landing/Landing.page';

function App() {
  return (
    <ThemeProvider theme={themePrimer}>
      <h1>Mesa Solidaria</h1>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;

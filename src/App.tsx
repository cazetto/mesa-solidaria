import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themePrimer } from 'force-components';
import { LandingPage } from './features/landing/Landing.page';

function App() {
  return (
    <ThemeProvider theme={themePrimer}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;

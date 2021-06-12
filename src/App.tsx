import React from 'react';
import { LandingPage } from './features/landing/Landing.page';

import {
  themePrimer,
  PrimerGlobalStyle,
  ForceThemeProvider,
} from 'force-components';

const GlobalStyle = <PrimerGlobalStyle />;

function App() {
  return (
    <ForceThemeProvider theme={themePrimer} globalStyle={GlobalStyle}>
      <LandingPage />
    </ForceThemeProvider>
  );
}

export default App;

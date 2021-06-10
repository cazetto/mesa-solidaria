import React, { FC } from 'react';
import { Intro } from './components/intro/Intro.component';

interface Props {}

const LandingPage: FC<Props> = () => {
  return (
    <section data-testid="landing-page">
      <Intro />
    </section>
  );
};

export { LandingPage };

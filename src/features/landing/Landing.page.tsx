import React, { FC } from 'react';
import { Intro } from './components/intro/Intro.component';
import { Comments } from './components/comments/Comments.component';

interface Props {}

const LandingPage: FC<Props> = () => {
  return (
    <section data-testid="landing-page">
      <Intro />
      <Comments />
    </section>
  );
};

export { LandingPage };

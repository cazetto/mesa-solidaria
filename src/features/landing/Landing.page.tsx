import React, { FC } from 'react';
import { Header } from './components/header/Header.component';
import { Intro } from './components/intro/Intro.component';
import { Comments } from './components/comments/Comments.component';
import { Footer } from './components/footer/Footer.component';

interface Props {}

const LandingPage: FC<Props> = () => {
  return (
    <section data-testid="landing-page">
      <Header />
      <Intro />
      <Comments />
      <Footer />
    </section>
  );
};

export { LandingPage };

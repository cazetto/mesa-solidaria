import React, { FC } from 'react';

interface Props {}

const Intro: FC<Props> = () => {
  return (
    <div data-testid="intro">
      <h1>Intro</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        eaque debitis voluptatibus, officiis nesciunt iste odio at culpa maiores
        quos aperiam suscipit eius, nam sapiente, quisquam modi unde temporibus
        ipsa?
      </p>
    </div>
  );
};

export { Intro };

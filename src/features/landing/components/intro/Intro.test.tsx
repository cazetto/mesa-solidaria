import React from 'react';
import { render } from '@testing-library/react';
import { Intro } from '../intro/Intro.component';

describe('<Intro />', () => {
  test('renders', () => {
    const { getByTestId } = render(<Intro />);
    const element = getByTestId('intro');
    expect(element).toBeInTheDocument();
  });
});

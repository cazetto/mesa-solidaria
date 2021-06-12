import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header.component';

describe('<Header />', () => {
  test('renders', () => {
    const { getByTestId } = render(<Header />);
    const element = getByTestId('header');
    expect(element).toBeInTheDocument();
  });
});

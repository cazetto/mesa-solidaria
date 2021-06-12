import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './Footer.component';

describe('<Footer />', () => {
  test('renders', () => {
    const { getByTestId } = render(<Footer />);
    const element = getByTestId('footer');
    expect(element).toBeInTheDocument();
  });
});

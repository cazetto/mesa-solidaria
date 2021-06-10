import { render } from '@testing-library/react';
import { LandingPage } from './Landing.page';

describe('<LandingPage />', () => {
  test('Landing Page Works', () => {
    const { getByTestId } = render(<LandingPage />);
    const pageElement = getByTestId('landing-page');
    expect(pageElement).toBeInTheDocument();
  });
});

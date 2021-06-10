import { render } from '@testing-library/react';
import { LandingPage } from './Landing.page';

describe('<LandingPage />', () => {
  test('renders', () => {
    const { getByTestId } = render(<LandingPage />);
    const pageElement = getByTestId('landing-page');
    expect(pageElement).toBeInTheDocument();
  });
});

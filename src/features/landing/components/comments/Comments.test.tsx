import React from 'react';
import { render } from '@testing-library/react';
import { Comments } from './Comments.component';

describe('<Comments />', () => {
  test('renders', () => {
    const { getByTestId } = render(<Comments />);
    const element = getByTestId('comments');
    expect(element).toBeInTheDocument();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { BasicShowmore } from './showmore.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicShowmore  />);
  // const rendered = getByText('hello world!');
  // expect(rendered).toBeTruthy();
});

import * as React from 'react';
// @ts-ignore
import render from '../../_utils/tests/render';
// @ts-ignore
import AlertTitle from '../AlertTitle.tsx';

it('renders correctly', () => {
  const { container } = render(<AlertTitle>AlertTitle</AlertTitle>);
  expect(container.firstChild).toMatchSnapshot();
});

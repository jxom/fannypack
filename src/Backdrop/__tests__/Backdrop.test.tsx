import * as React from 'react';
// @ts-ignore
import render from '../../_utils/tests/render';
import Backdrop from '../Backdrop';

it('renders correctly for a basic backdrop', () => {
  const { container } = render(<Backdrop isVisible>test</Backdrop>);
  expect(container.firstChild).toMatchSnapshot();
});

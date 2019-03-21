import React from 'react';
import { Container, LayoutSet } from '../../src/index';

import Pagination from './Pagination';

export default function Content(props) {
  const { breakpoint, children } = props;
  return (
    <Container breakpoint={breakpoint} isFluid={!breakpoint} padding="major-8">
      <LayoutSet>
        {children}
        <Pagination />
      </LayoutSet>
    </Container>
  );
}

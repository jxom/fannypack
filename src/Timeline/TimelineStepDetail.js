// @flow
import React, { type Node } from 'react';
import Box from 'reakit/Box';

type Props = {
  children: Node
};

const TimelineStepDetail = ({ children }: Props) => {
  return <Box>{children}</Box>;
};

export default TimelineStepDetail;

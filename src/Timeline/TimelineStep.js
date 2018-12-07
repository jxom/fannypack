// @flow
import React, { type Node } from 'react';
import Box from 'reakit/Box';

import { StepLabel } from './styled';

type Props = {
  label: string,
  color?: string,
  children: Node
};

const TimelineStep = ({ label, color, children }: Props) => {
  return (
    <Box>
      <StepLabel color={color}>{label}</StepLabel>
      {children}
    </Box>
  );
};

TimelineStep.defaultProps = {
  color: undefined
};

export default TimelineStep;

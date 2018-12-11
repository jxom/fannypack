// @flow
import React, { type Node } from 'react';
import { TimelineStepLabel as _TimelineStepLabel } from './styled';

type Props = {
  a11yTitleId?: string,
  children: Node,
  color?: string
};

const TimelineStepLabel = ({ a11yTitleId, children, color }: Props) => {
  return (
    <_TimelineStepLabel id={a11yTitleId} color={color}>
      {children}
    </_TimelineStepLabel>
  );
};

TimelineStepLabel.defaultProps = {
  a11yTitleId: undefined,
  children: undefined,
  color: undefined
};

export default TimelineStepLabel;

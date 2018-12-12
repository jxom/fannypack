// @flow
import React, { type Node } from 'react';
import { TimelineStepHeading as _TimelineStepHeading } from './styled';

type Props = {
  a11yTitleId?: string,
  children: Node,
  color?: string
};

const TimelineStepHeading = ({ a11yTitleId, children, color }: Props) => {
  return (
    <_TimelineStepHeading id={a11yTitleId} color={color} fontWeight="semibold">
      {children}
    </_TimelineStepHeading>
  );
};

TimelineStepHeading.defaultProps = {
  a11yTitleId: undefined,
  children: undefined,
  color: undefined
};

export default TimelineStepHeading;

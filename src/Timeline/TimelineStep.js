// @flow
import React, { type Node } from 'react';

import { TimelineStep as _TimelineStep, TimelineRow, TimelineStepBullet } from './styled';

type Props = {
  a11yDescriptionId?: string,
  a11yTitleId?: string,
  lineColor?: string,
  progressColor?: string,
  children: Node
};

const TimelineStep = ({ a11yDescriptionId, a11yTitleId, children, lineColor, progressColor }: Props) => {
  return (
    <TimelineRow lineColor={lineColor} aria-labelledby={a11yTitleId} aria-describedby={a11yDescriptionId}>
      <TimelineStepBullet progressColor={progressColor} />
      <_TimelineStep>{children}</_TimelineStep>
    </TimelineRow>
  );
};

TimelineStep.defaultProps = {
  a11yDescriptionId: undefined,
  a11yTitleId: undefined,
  children: undefined,
  lineColor: undefined,
  progressColor: undefined
};

export default TimelineStep;

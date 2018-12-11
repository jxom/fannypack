// @flow
import React, { type Node } from 'react';
import { TimelineStepDetail as _TimelineStepDetail } from './styled';

type Props = {
  a11yDescriptionId?: string,
  children: Node,
  color?: string
};

const TimelineStepDetail = ({ a11yDescriptionId, children, color }: Props) => {
  return <_TimelineStepDetail id={a11yDescriptionId} color={color}>{children}</_TimelineStepDetail>;
};

TimelineStepDetail.defaultProps = {
  a11yDescriptionId: undefined,
  children: undefined,
  color: undefined
};

export default TimelineStepDetail;

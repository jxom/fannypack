import * as React from 'react';
import * as PropTypes from 'prop-types';

import { TimelineStepHeading as _TimelineStepHeading } from './styled';

export type LocalTimelineStepHeadingProps = {
  a11yTitleId?: string;
  children: React.ReactNode;
  color?: string;
};
export type TimelineStepHeadingProps = LocalTimelineStepHeadingProps;

const TimelineStepHeading: React.FunctionComponent<LocalTimelineStepHeadingProps> = ({
  a11yTitleId,
  children,
  color
}) => (
  <_TimelineStepHeading id={a11yTitleId} color={color} fontWeight="semibold">
    {children}
  </_TimelineStepHeading>
);

TimelineStepHeading.propTypes = {
  a11yTitleId: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string
};

TimelineStepHeading.defaultProps = {
  a11yTitleId: undefined,
  color: undefined
};

const C: React.FunctionComponent<TimelineStepHeadingProps> = TimelineStepHeading;
export default C;

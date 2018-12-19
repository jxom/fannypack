import * as React from 'react';
import * as PropTypes from 'prop-types';

import TimelineStep, { TimelineStepProps } from './TimelineStep';
import TimelineStepDetail, { TimelineStepDetailProps } from './TimelineStepDetail';
import TimelineStepHeading, { TimelineStepHeadingProps } from './TimelineStepHeading';
import { Timeline as _Timeline } from './styled';

export type LocalTimelineProps = {
  children?: React.ReactNode;
};
export type TimelineProps = LocalTimelineProps;
export type TimelineComponents = {
  Step: React.FunctionComponent<TimelineStepProps>;
  StepHeading: React.FunctionComponent<TimelineStepHeadingProps>;
  StepDetail: React.FunctionComponent<TimelineStepDetailProps>;
};

export const Timeline: React.FunctionComponent<LocalTimelineProps> & TimelineComponents = ({ children }) => (
  <_Timeline>{React.Children.map(children, child => child)}</_Timeline>
);

Timeline.Step = TimelineStep;
Timeline.StepHeading = TimelineStepHeading;
Timeline.StepDetail = TimelineStepDetail;

Timeline.propTypes = {
  children: PropTypes.node
};
Timeline.defaultProps = {};

// @ts-ignore
const C: React.FunctionComponent<TimelineProps> & TimelineComponents = Timeline;
export default C;

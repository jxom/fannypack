import * as React from 'react';
import * as PropTypes from 'prop-types';

import TimelineStep, { TimelineStepProps } from './TimelineStep';
import TimelineStepDetail, { TimelineStepDetailProps } from './TimelineStepDetail';
import TimelineStepHeading, { TimelineStepHeadingProps } from './TimelineStepHeading';
import { Timeline as _Timeline } from './styled';

export type LocalTimelineProps = {
  activeStep?: string;
  children?: React.ReactNode;
  lineColor?: string;
  progressColor?: string;
};
export type TimelineProps = LocalTimelineProps;
export type TimelineComponents = {
  Step: React.FunctionComponent<TimelineStepProps>;
  StepHeading: React.FunctionComponent<TimelineStepHeadingProps>;
  StepDetail: React.FunctionComponent<TimelineStepDetailProps>;
};

export const Timeline: React.FunctionComponent<LocalTimelineProps> & TimelineComponents = ({
  activeStep,
  children,
  lineColor,
  progressColor
}) => {
  const activeIndexStep = children.findIndex(child => child.props.a11yTitleId === activeStep);
  return (
    <_Timeline>
      {React.Children.map(children, (child, index) => {
        const barColor = lineColor ? lineColor : child.props.lineColor;
        const dotColor = progressColor ? progressColor : child.props.progressColor;
        return index <= activeIndexStep
          ? React.cloneElement(child, {
              lineColor: index < activeIndexStep ? barColor : undefined,
              progressColor: dotColor || undefined
            })
          : child;
      })}
    </_Timeline>
  );
};

Timeline.Step = TimelineStep;
Timeline.StepHeading = TimelineStepHeading;
Timeline.StepDetail = TimelineStepDetail;

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
  activeStep: PropTypes.string,
  progressColor: PropTypes.string,
  lineColor: PropTypes.string
};
Timeline.defaultProps = {
  activeStep: undefined,
  progressColor: undefined,
  lineColor: undefined
};

// @ts-ignore
const C: React.FunctionComponent<TimelineProps> & TimelineComponents = Timeline;
export default C;

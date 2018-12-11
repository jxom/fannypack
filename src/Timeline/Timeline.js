// @flow
import React, { Component, type Node } from 'react';

import TimelineStep from './TimelineStep';
import TimelineStepDetail from './TimelineStepDetail';
import TimelineStepLabel from './TimelineStepLabel';
import { Timeline as _Timeline } from './styled';

type TimelineProps = {
  children: Node
};

class Timeline extends Component<TimelineProps> {
  static Step = TimelineStep;
  static StepLabel = TimelineStepLabel;
  static StepDetail = TimelineStepDetail;

  render() {
    const { children } = this.props;
    return <_Timeline>{React.Children.map(children, child => child)}</_Timeline>;
  }
}

export default Timeline;

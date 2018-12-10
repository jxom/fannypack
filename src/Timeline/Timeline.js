// @flow
import React, { Component, type Node } from 'react';
import { Box } from '../primitives';

import TimelineStep from './TimelineStep';
import TimelineStepDetail from './TimelineStepDetail';
import { Row, StepBullet } from './styled';

type TimelineProps = {
  children: Node
};

class Timeline extends Component<TimelineProps> {
  static Step = TimelineStep;
  static StepDetail = TimelineStepDetail;

  render() {
    const { children } = this.props;
    return (
      <Box>
        {React.Children.map(children, (child, index) => {
          const color = child.props.color;
          return (
            <Row lineColor={color}>
              <StepBullet color={color} />
              {child}
            </Row>
          );
        })}
      </Box>
    );
  }
}

export default Timeline;

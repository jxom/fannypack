import * as React from 'react';
import * as PropTypes from 'prop-types';

import { TimelineStepDetail as _TimelineStepDetail } from './styled';

export type LocalTimelineStepDetailProps = {
  a11yDescriptionId?: string;
  children: React.ReactNode;
  color?: string;
};
export type TimelineStepDetailProps = LocalTimelineStepDetailProps;

const TimelineStepDetail: React.FunctionComponent<LocalTimelineStepDetailProps> = ({
  a11yDescriptionId,
  children,
  color
}) => {
  return (
    <_TimelineStepDetail id={a11yDescriptionId} color={color}>
      {children}
    </_TimelineStepDetail>
  );
};

TimelineStepDetail.propTypes = {
  a11yDescriptionId: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string
};

TimelineStepDetail.defaultProps = {
  a11yDescriptionId: undefined,
  color: undefined
};

const C: React.FunctionComponent<TimelineStepDetailProps> = TimelineStepDetail;
export default C;

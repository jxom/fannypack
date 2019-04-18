import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';
// @ts-ignore
import _get from 'lodash/get';

import _ProgressBar, { ProgressBarIndicator } from './styled';

export type LocalProgressBarProps = {
  palette?: string;
};
export type ProgressBarProps = ReakitBoxProps & LocalProgressBarProps;

export const ProgressBar: React.FunctionComponent<LocalProgressBarProps> = ({ ...props }) => (
  <_ProgressBar {...props}>
    <ProgressBarIndicator palette={props.palette} value={props.value} />
  </_ProgressBar>
);

ProgressBar.propTypes = {
  palette: PropTypes.string
};

ProgressBar.defaultProps = {
  palette: 'primary'
};

// @ts-ignore
const C: React.FunctionComponent<ProgressBarProps> = ProgressBar;
export default C;

import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Plain as _Plain } from './styled';
import { Box } from '../primitives';

export type PlainProps = {};

export const Plain: React.FunctionComponent<PlainProps> = ({ breakpoint, children, ...props }) => (
  <_Plain breakpoint={breakpoint} isFluid={!breakpoint} {...props}>
    {children}
  </_Plain>
);

Plain.propTypes = {
  breakpoint: PropTypes.string,
  children: PropTypes.node.isRequired
};

Plain.defaultProps = {
  breakpoint: 'tablet'
};

export default Plain;

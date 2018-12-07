import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { OverlayToggleProps as ReakitOverlayToggleProps } from 'reakit/ts';

import { OverlayToggle as _OverlayToggle } from './styled';

export interface LocalOverlayToggleProps {
  children?: React.ReactNode;
  toggle(): void;
  onClick?(): void;
}
export type OverlayToggleProps = LocalOverlayToggleProps & ReakitOverlayToggleProps;

export const OverlayToggle: React.FunctionComponent<LocalOverlayToggleProps> = ({ children, ...props }) => (
  <_OverlayToggle {...props}>{children}</_OverlayToggle>
);

OverlayToggle.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  toggle: PropTypes.func.isRequired
};
OverlayToggle.defaultProps = {
  children: null,
  onClick: undefined
};

export default OverlayToggle as React.FunctionComponent<OverlayToggleProps>;

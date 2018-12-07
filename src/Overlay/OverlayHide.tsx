import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { OverlayHideProps as ReakitOverlayHideProps } from 'reakit/ts';

import { OverlayHide as _OverlayHide } from './styled';

export interface LocalOverlayHideProps {
  children?: React.ReactNode | void;
  hide(): void;
  onClick?(): void;
}
export type OverlayHideProps = LocalOverlayHideProps & ReakitOverlayHideProps;

export const OverlayHide: React.FunctionComponent<LocalOverlayHideProps> = ({ children, ...props }) => (
  <_OverlayHide {...props}>{children}</_OverlayHide>
);

OverlayHide.propTypes = {
  children: PropTypes.node,
  hide: PropTypes.func.isRequired,
  onClick: PropTypes.func
};
OverlayHide.defaultProps = {
  children: null,
  onClick: undefined
};

export default OverlayHide as React.FunctionComponent<OverlayHideProps>;

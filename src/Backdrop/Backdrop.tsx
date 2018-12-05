import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';

import _Backdrop from './styled';
import {
  AnimateProps,
  animatePropTypes,
  animateDefaultProps,
  RestrictHideProps,
  restrictHidePropTypes,
  restrictDefaultProps
} from '../types';

export interface BackdropProps {
  use?: any;
  children?: React.ReactNode;
  className?: string;
  /** Whether or not to show the component */
  isVisible?: boolean;
  onClick?(): void;
}

export const Backdrop: React.SFC<BackdropProps & AnimateProps & RestrictHideProps> = ({
  children,
  isVisible,
  ...props
}) => (
  <_Backdrop visible={isVisible} {...props}>
    {children}
  </_Backdrop>
);

Backdrop.propTypes = {
  use: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  onClick: PropTypes.func,
  ...animatePropTypes,
  ...restrictHidePropTypes
};
Backdrop.defaultProps = {
  use: undefined,
  children: undefined,
  className: undefined,
  isVisible: false,
  onClick: undefined,
  ...animateDefaultProps,
  ...restrictDefaultProps
};

export default Backdrop;

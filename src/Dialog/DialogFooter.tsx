import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { DialogFooter as _DialogFooter } from './styled';

export interface LocalDialogFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const DialogFooter: React.SFC<LocalDialogFooterProps> = ({ children, ...props }) => (
  <_DialogFooter {...props}>{children}</_DialogFooter>
);

DialogFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
DialogFooter.defaultProps = {
  className: undefined
};

export type DialogFooterProps = LocalDialogFooterProps & ReakitBoxProps;
//@ts-ignore
const C: React.SFC<DialogFooterProps> = DialogFooter;
export default C;

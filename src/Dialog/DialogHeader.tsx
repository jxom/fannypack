import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { DialogHeader as _DialogHeader } from './styled';

export interface LocalDialogHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const DialogHeader: React.SFC<LocalDialogHeaderProps> = ({ children, ...props }) => (
  <_DialogHeader {...props}>{children}</_DialogHeader>
);

DialogHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
DialogHeader.defaultProps = {
  className: undefined
};

export type DialogHeaderProps = LocalDialogHeaderProps & ReakitBoxProps;
//@ts-ignore
const C: React.SFC<DialogHeaderProps> = DialogHeader;
export default C;

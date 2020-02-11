import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ReakitBoxProps } from '../types';

import { DialogHeader as _DialogHeader } from './styled';

export type LocalDialogHeaderProps = {
  children: React.ReactNode;
  className?: string;
};
export type DialogHeaderProps = LocalDialogHeaderProps & ReakitBoxProps;

export const DialogHeader: React.FunctionComponent<LocalDialogHeaderProps> = ({ children, ...props }) => (
  <_DialogHeader {...props}>{children}</_DialogHeader>
);

export const dialogHeaderPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
DialogHeader.propTypes = dialogHeaderPropTypes;

export const dialogHeaderDefaultProps = {
  className: undefined
};
DialogHeader.defaultProps = dialogHeaderDefaultProps;

const C: React.FunctionComponent<DialogHeaderProps> = DialogHeader;
export default C;

import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { DialogTitle as _DialogTitle } from './styled';

export interface LocalDialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const DialogTitle: React.SFC<LocalDialogTitleProps> = ({ children, ...props }) => (
  <_DialogTitle use="h5" isSubHeading {...props}>
    {children}
  </_DialogTitle>
);

DialogTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
DialogTitle.defaultProps = {
  className: undefined
};

export type DialogTitleProps = LocalDialogTitleProps & ReakitBoxProps;
//@ts-ignore
const C: React.SFC<DialogTitleProps> = DialogTitle;
export default C;

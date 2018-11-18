// @flow
import React, { type Node } from 'react';

import _Dialog from './styled';
import DialogContent from './DialogContent';
import DialogHeader from './DialogHeader';
import DialogFooter from './DialogFooter';
import DialogTitle from './DialogTitle';

type Props = {
  border: true | 'shadow',
  children: Node,
  className?: string
};

const Dialog = ({ border, children, footer, title, ...props }: Props) => (
  <_Dialog border={border} {...props}>
    {children}
  </_Dialog>
);

Dialog.Header = DialogHeader;
Dialog.Content = DialogContent;
Dialog.Footer = DialogFooter;
Dialog.Title = DialogTitle;

Dialog.defaultProps = {
  border: true,
  className: undefined,
  footer: undefined,
  title: undefined
};

export default Dialog;

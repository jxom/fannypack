import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';

import { PaneProps } from '../Pane/Pane';
import Dialog from './styled';

export interface LocalDialogDialogProps {
  a11yDescriptionId?: string;
  a11yTitleId?: string;
  border?: true | 'shadow';
  children: React.ReactNode;
  className?: string;
}
export type DialogDialogProps = LocalDialogDialogProps & PaneProps;

export const DialogDialog: React.FunctionComponent<LocalDialogDialogProps> = ({
  a11yDescriptionId,
  a11yTitleId,
  children,
  ...props
}) => (
  <Dialog aria-describedby={a11yDescriptionId} aria-labelledby={a11yTitleId} role="dialog" {...props}>
    {children}
  </Dialog>
);

DialogDialog.propTypes = {
  a11yDescriptionId: PropTypes.string,
  a11yTitleId: PropTypes.string,
  border: PropTypes.oneOf([true, 'shadow']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
DialogDialog.defaultProps = {
  a11yDescriptionId: undefined,
  a11yTitleId: undefined,
  border: true,
  className: undefined
};

export default DialogDialog as React.FunctionComponent<DialogDialogProps>;

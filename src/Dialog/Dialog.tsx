import * as React from 'react';

// @ts-ignore
import { getUniqueId } from '../uniqueId';
import { Box } from '../primitives';
import { Omit } from '../types';
import ActionButtons, { ActionButtonsProps } from '../Button/ActionButtons';
import { ButtonProps } from '../Button/Button';
import DialogDialog, { DialogDialogProps } from './DialogDialog';
import DialogContent, { DialogContentProps } from './DialogContent';
import DialogHeader, { DialogHeaderProps } from './DialogHeader';
import DialogFooter, { DialogFooterProps } from './DialogFooter';
import DialogTitle, { DialogTitleProps } from './DialogTitle';
import DialogClose, { DialogCloseProps } from './DialogClose';

export interface LocalDialogProps {
  actionButtonsProps?: ActionButtonsProps;
  a11yDescriptionId?: string;
  a11yTitleId?: string;
  border?: true | 'shadow';
  children: React.ReactNode;
  className?: string;
  closeButtonProps?: Omit<ButtonProps, 'children'>;
  footer?: string | React.ReactElement<any>;
  onClickClose?: () => void;
  showActionButtons?: boolean;
  showCloseButton?: boolean;
  role?: 'alertdialog' | 'dialog';
  title?: string | React.ReactElement<any>;
}
export type DialogProps = LocalDialogProps & DialogDialogProps;
export interface DialogComponents {
  Dialog: React.FunctionComponent<DialogDialogProps>;
  Content: React.FunctionComponent<DialogContentProps>;
  Header: React.FunctionComponent<DialogHeaderProps>;
  Footer: React.FunctionComponent<DialogFooterProps>;
  Title: React.FunctionComponent<DialogTitleProps>;
  Close: React.FunctionComponent<DialogCloseProps>;
}

export const Dialog: React.FunctionComponent<LocalDialogProps> & DialogComponents = ({
  actionButtonsProps,
  a11yDescriptionId,
  a11yTitleId,
  border,
  children,
  closeButtonProps,
  footer,
  onClickClose,
  showActionButtons,
  showCloseButton,
  role,
  title,
  ...props
}) => (
  <DialogDialog a11yDescriptionId={a11yDescriptionId} a11yTitleId={a11yTitleId} role={role} border={border} {...props}>
    {title && (
      <DialogHeader>
        {typeof title === 'string' ? <DialogTitle id={a11yTitleId}>{title}</DialogTitle> : title}
        {showCloseButton && <DialogClose onClick={onClickClose} {...closeButtonProps} />}
      </DialogHeader>
    )}
    <DialogContent id={a11yDescriptionId}>{children}</DialogContent>
    {(footer || showActionButtons) && (
      <DialogFooter justifyContent={footer ? 'space-between' : 'flex-end'}>
        {footer && <Box>{footer}</Box>}
        {showActionButtons && (
          <Box>
            <ActionButtons {...actionButtonsProps} />
          </Box>
        )}
      </DialogFooter>
    )}
  </DialogDialog>
);

Dialog.Dialog = DialogDialog;
Dialog.Header = DialogHeader;
Dialog.Content = DialogContent;
Dialog.Footer = DialogFooter;
Dialog.Title = DialogTitle;
Dialog.Close = DialogClose;

Dialog.defaultProps = {
  actionButtonsProps: {},
  a11yDescriptionId: getUniqueId('Dialog'),
  a11yTitleId: getUniqueId('Dialog'),
  border: true,
  className: undefined,
  closeButtonProps: {},
  footer: undefined,
  onClickClose: undefined,
  showActionButtons: false,
  showCloseButton: false,
  role: 'dialog',
  title: undefined
};

export default Dialog as React.FunctionComponent<DialogProps> & DialogComponents;

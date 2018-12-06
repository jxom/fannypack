import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';

import Button, { ButtonProps } from './Button';
// @ts-ignore
import Set from '../Set';
import { Omit } from '../types';

export interface ActionButtonsProps {
  /** Custom button props for the cancel button */
  cancelProps?: Omit<ButtonProps, 'children'>;
  /** Custom text for the cancel button */
  cancelText?: string;
  className?: string;
  /** Makes the submit button in a loading state */
  isLoading?: boolean;
  onClickSubmit?(): void;
  onClickCancel?(): void;
  /** Changes the color of the submit button */
  palette?: string;
  /** Custom button props for the submit button */
  submitProps?: Omit<ButtonProps, 'children'>;
  /** Custom text for the submit button */
  submitText?: string;
  /** Button type of the submit button */
  type?: string;
}

const defaultProps: Partial<ActionButtonsProps> = {
  cancelProps: {},
  cancelText: 'Cancel',
  className: undefined,
  isLoading: false,
  onClickSubmit: undefined,
  onClickCancel: undefined,
  palette: 'primary',
  submitProps: {},
  submitText: 'Submit',
  type: undefined
};

export const ActionButtons: React.SFC<ActionButtonsProps> = ({
  cancelProps,
  cancelText,
  isLoading,
  onClickSubmit,
  onClickCancel,
  palette,
  submitProps,
  submitText,
  type,
  ...props
}) => (
  <Set {...props}>
    <Button onClick={onClickCancel} {...cancelProps}>
      {cancelText}
    </Button>
    <Button isLoading={isLoading} onClick={onClickSubmit} palette={palette} type={type} {...submitProps}>
      {submitText}
    </Button>
  </Set>
);

ActionButtons.defaultProps = defaultProps;

export default ActionButtons;

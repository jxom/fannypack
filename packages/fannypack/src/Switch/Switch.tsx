import * as React from 'react';
import * as PropTypes from 'prop-types';
import { LabelProps as ReakitLabelProps } from 'reakit/ts';

import { formikField, reduxFormField } from '../adaptors/fields';
import Text from '../Text';
import { Omit } from '../types';
import _Switch, { HiddenSwitch, SwitchIcon } from './styled';

export type LocalSwitchProps = {
  /** Automatically focus on the switch */
  autoFocus?: boolean;
  checked?: boolean;
  className?: string;
  /** Is the switch checked by default? */
  defaultChecked?: boolean;
  /** Disables the switch */
  disabled?: boolean;
  /** ID for the switch */
  id?: string;
  /** Makes the switch required and sets aria-invalid to true */
  isRequired?: boolean;
  /** Switch label */
  label?: string;
  name?: string;
  palette?: string;
  /** State of the switch. Can be any color in the palette. */
  state?: string;
  /** Initial value of the switch */
  value?: string;
  /** Function to invoke when focus is lost */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** Function to invoke when switch has changed */
  onChange?: React.FormEventHandler<HTMLInputElement>;
  /** Function to invoke when switch is focused */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};
export type SwitchProps = LocalSwitchProps & Omit<ReakitLabelProps, 'children'>;
export type SwitchComponents = {
  Formik: React.FunctionComponent<SwitchProps>;
  ReduxForm: React.FunctionComponent<SwitchProps>;
};

export const Switch: React.FunctionComponent<LocalSwitchProps> & SwitchComponents = ({
  autoFocus,
  checked,
  className,
  defaultChecked,
  disabled,
  id,
  isRequired,
  label,
  onBlur,
  onChange,
  onFocus,
  name,
  palette,
  state,
  value,
  ...props
}) => (
  <_Switch
    aria-describedby="label"
    aria-invalid={state === 'danger'}
    aria-label={label}
    aria-required={isRequired}
    disabled={disabled}
    {...props}
  >
    <HiddenSwitch
      autoFocus={autoFocus}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      id={id}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      name={name}
      palette={palette}
      state={state}
      type="checkbox"
      value={value}
    />
    <SwitchIcon state={state} />
    {label && (
      <Text id="label" htmlFor={id} marginLeft="major-1">
        {label}
      </Text>
    )}
  </_Switch>
);

Switch.Formik = formikField(Switch, { isCheckbox: true });
Switch.ReduxForm = reduxFormField(Switch, { isCheckbox: true });

export const switchPropTypes = {
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  palette: PropTypes.string,
  state: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func
};
Switch.propTypes = switchPropTypes;

export const switchDefaultProps = {
  autoFocus: false,
  checked: undefined,
  className: undefined,
  defaultChecked: undefined,
  disabled: false,
  id: undefined,
  isRequired: false,
  label: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  palette: undefined,
  name: undefined,
  state: undefined,
  value: undefined
};
Switch.defaultProps = switchDefaultProps;

const C: React.FunctionComponent<SwitchProps> & SwitchComponents = Switch;
export default C;

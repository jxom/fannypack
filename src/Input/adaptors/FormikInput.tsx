import * as React from 'react';
import * as PropTypes from 'prop-types';

import Input, { inputPropTypes, inputDefaultProps, InputProps, LocalInputProps } from '../Input';

export type LocalFormikInputProps = LocalInputProps & {
  field: { name: string };
  form: { touched: { [name: string]: boolean }; errors: { [name: string]: string } };
};
export type FormikInputProps = InputProps & LocalFormikInputProps;

export const FormikInput: React.FunctionComponent<LocalFormikInputProps> = ({ field, form, ...props }) => {
  let state = form.touched[field.name] && form.errors[field.name] ? 'danger' : undefined;
  if (props.state) {
    state = props.state;
  }

  return <Input {...props} {...field} state={state} />;
};

FormikInput.propTypes = {
  field: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired as React.Validator<
    LocalFormikInputProps['field']
  >,
  form: PropTypes.shape({ touched: PropTypes.object.isRequired, errors: PropTypes.object.isRequired })
    .isRequired as React.Validator<LocalFormikInputProps['form']>,
  ...inputPropTypes
};

FormikInput.defaultProps = {
  ...inputDefaultProps
};

const C: React.FunctionComponent<FormikInputProps> = FormikInput;
export default C;

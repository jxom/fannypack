import * as React from 'react';
import * as PropTypes from 'prop-types';

import InputField, {
  inputFieldPropTypes,
  inputFieldDefaultProps,
  InputFieldProps,
  LocalInputFieldProps
} from '../InputField';

export type LocalFormikInputFieldProps = LocalInputFieldProps & {
  field: { name: string };
  form: { touched: { [name: string]: boolean }; errors: { [name: string]: string } };
};
export type FormikInputFieldProps = InputFieldProps & LocalFormikInputFieldProps;

export const FormikInputField: React.FunctionComponent<LocalFormikInputFieldProps> = ({ field, form, ...props }) => {
  let state = form.touched[field.name] && form.errors[field.name] ? 'danger' : undefined;
  if (props.state) {
    state = props.state;
  }

  let validationText = form.touched[field.name] && form.errors[field.name] ? form.errors[field.name] : undefined;
  if (props.validationText) {
    validationText = props.validationText;
  }

  return (
    // @ts-ignore
    <InputField {...props} {...field} state={state} validationText={validationText} />
  );
};

// @ts-ignore
FormikInputField.propTypes = {
  field: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired as React.Validator<
    LocalFormikInputFieldProps['field']
  >,
  form: PropTypes.shape({ touched: PropTypes.object.isRequired, errors: PropTypes.object.isRequired })
    .isRequired as React.Validator<LocalFormikInputFieldProps['form']>,
  ...inputFieldPropTypes
};

FormikInputField.defaultProps = {
  ...inputFieldDefaultProps
};

const C: React.FunctionComponent<FormikInputFieldProps> = FormikInputField;
export default C;

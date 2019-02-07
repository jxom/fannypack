import * as React from 'react';
import * as PropTypes from 'prop-types';

import InputField, {
  inputFieldPropTypes,
  inputFieldDefaultProps,
  InputFieldProps,
  LocalInputFieldProps
} from '../InputField';

export type LocalReduxFormInputFieldProps = LocalInputFieldProps & {
  input: Object;
  meta: { error: string | void; touched: boolean };
};
export type ReduxFormInputFieldProps = InputFieldProps & LocalReduxFormInputFieldProps;

export const ReduxFormInputField: React.FunctionComponent<LocalReduxFormInputFieldProps> = ({
  input,
  meta,
  ...props
}) => {
  let state = meta.touched && meta.error ? 'danger' : undefined;
  if (props.state) {
    state = props.state;
  }

  let validationText = meta.touched && meta.error ? meta.error : undefined;
  if (props.validationText) {
    validationText = props.validationText;
  }

  return (
    // @ts-ignore
    <InputField {...props} {...input} state={state} validationText={validationText} />
  );
};

// @ts-ignore
ReduxFormInputField.propTypes = {
  meta: PropTypes.object.isRequired as React.Validator<LocalReduxFormInputFieldProps['meta']>,
  input: PropTypes.object.isRequired as React.Validator<LocalReduxFormInputFieldProps['input']>,
  ...inputFieldPropTypes
};

ReduxFormInputField.defaultProps = {
  ...inputFieldDefaultProps
};

const C: React.FunctionComponent<ReduxFormInputFieldProps> = ReduxFormInputField;
export default C;

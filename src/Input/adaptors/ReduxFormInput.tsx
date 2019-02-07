import * as React from 'react';
import * as PropTypes from 'prop-types';

import Input, { inputPropTypes, inputDefaultProps, InputProps, LocalInputProps } from '../Input';

export type LocalReduxFormInputProps = LocalInputProps & {
  input: Object;
  meta: { error: string | void; touched: boolean };
};
export type ReduxFormInputProps = InputProps & LocalReduxFormInputProps;

export const ReduxFormInput: React.FunctionComponent<LocalReduxFormInputProps> = ({ input, meta, ...props }) => {
  let state = meta.error && meta.touched ? 'danger' : undefined;
  if (props.state) {
    state = props.state;
  }

  return <Input {...props} {...input} state={state} />;
};

ReduxFormInput.propTypes = {
  input: PropTypes.object.isRequired as React.Validator<LocalReduxFormInputProps['input']>,
  meta: PropTypes.object.isRequired as React.Validator<LocalReduxFormInputProps['meta']>,
  ...inputPropTypes
};

ReduxFormInput.defaultProps = {
  ...inputDefaultProps
};

const C: React.FunctionComponent<ReduxFormInputProps> = ReduxFormInput;
export default C;

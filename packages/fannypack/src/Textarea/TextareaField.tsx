import * as React from 'react';
// @ts-ignore
import * as PropTypes from 'prop-types';
// @ts-ignore
import _omit from 'lodash/omit';

import { formikField, reduxFormField } from '../adaptors/fields';
import { Omit } from '../types';
import Textarea, { LocalTextareaProps, TextareaProps, textareaDefaultProps, textareaPropTypes } from './Textarea';
import FieldWrapper, {
  LocalFieldWrapperProps,
  fieldWrapperDefaultProps,
  fieldWrapperPropTypes
} from '../FieldWrapper/FieldWrapper';

export type LocalTextareaFieldProps = Omit<LocalFieldWrapperProps, 'children'> &
  LocalTextareaProps & {
    textareaProps?: LocalTextareaProps;
  };
export type TextareaFieldProps = LocalTextareaFieldProps & TextareaProps;
export type TextareaFieldComponents = {
  Formik: React.FunctionComponent<TextareaFieldProps>;
  ReduxForm: React.FunctionComponent<TextareaFieldProps>;
};

export const TextareaField: React.FunctionComponent<LocalTextareaFieldProps> & TextareaFieldComponents = ({
  a11yId,
  a11yLabel,
  autoComplete,
  autoFocus,
  defaultValue,
  description,
  disabled,
  hint,
  isFullWidth,
  isLoading,
  isOptional,
  isRequired,
  label,
  name,
  maxLength,
  minLength,
  pattern,
  placeholder,
  readOnly,
  rows,
  spellCheck,
  size,
  state,
  textareaProps,
  textareaRef,
  validationText,
  value,
  onBlur,
  onChange,
  onFocus,
  ...props
}) => (
  <FieldWrapper
    a11yId={a11yId}
    description={description}
    hint={hint}
    isOptional={isOptional}
    isRequired={isRequired}
    label={label}
    state={state}
    validationText={validationText}
    {...props}
  >
    {({ elementProps }) => (
      <Textarea
        a11yId={a11yId}
        a11yLabel={a11yLabel}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        disabled={disabled}
        isFullWidth={isFullWidth}
        isLoading={isLoading}
        isRequired={isRequired}
        name={name}
        size={size}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        placeholder={placeholder}
        readOnly={readOnly}
        rows={rows}
        spellCheck={spellCheck}
        state={state}
        textareaRef={textareaRef}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        {...elementProps}
        {...textareaProps}
      />
    )}
  </FieldWrapper>
);

TextareaField.Formik = formikField(TextareaField, { hasFieldWrapper: true });
TextareaField.ReduxForm = reduxFormField(TextareaField, { hasFieldWrapper: true });

export const textareaFieldPropTypes = {
  textareaProps: PropTypes.shape(textareaPropTypes),
  ..._omit(fieldWrapperPropTypes, 'children'),
  ...textareaPropTypes
};
TextareaField.propTypes = textareaFieldPropTypes;

export const textareaFieldDefaultProps = {
  textareaProps: {},
  ...fieldWrapperDefaultProps,
  ...textareaDefaultProps
};
TextareaField.defaultProps = textareaFieldDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<TextareaFieldProps> & TextareaFieldComponents = TextareaField;
export default C;

import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import _Alert from './styled';
import AlertTitle from './AlertTitle';
// @ts-ignore
import Text from '../Text';

export interface LocalAlertProps {
  className?: string;
  children?: React.ReactNode;
  hasTint?: boolean;
  palette?: string;
  title?: string;
}
export type AlertProps = LocalAlertProps & ReakitBoxProps;

const defaultProps: Partial<LocalAlertProps> = {
  className: undefined,
  children: undefined,
  hasTint: false,
  palette: 'default',
  title: undefined
};

export const Alert: React.FunctionComponent<LocalAlertProps> = ({ className, children, palette, title, ...props }) => (
  <_Alert role="alert" className={className} palette={palette} {...props}>
    {title && <AlertTitle>{title}</AlertTitle>}
    {typeof children === 'string' ? <Text>{children}</Text> : children}
  </_Alert>
);

Alert.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  hasTint: PropTypes.bool,
  palette: PropTypes.string,
  title: PropTypes.string
};
Alert.defaultProps = defaultProps;

export default Alert as React.FunctionComponent<AlertProps>;

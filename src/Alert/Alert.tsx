import * as React from 'react';

import _Alert from './styled';
import AlertTitle from './AlertTitle';
// @ts-ignore
import Text from '../Text';

export interface AlertProps {
  className?: string;
  children?: React.ReactNode;
  hasTint?: boolean;
  palette?: string;
  title?: string;
}

const defaultProps: Partial<AlertProps> = {
  className: undefined,
  children: undefined,
  hasTint: false,
  palette: 'default',
  title: undefined
};

export const Alert: React.SFC<AlertProps> = ({ className, children, palette, title, ...props }) => (
  <_Alert role="alert" className={className} palette={palette} {...props}>
    {title && <AlertTitle>{title}</AlertTitle>}
    {typeof children === 'string' ? <Text>{children}</Text> : children}
  </_Alert>
);

Alert.defaultProps = defaultProps;

export default Alert;

import * as React from 'react';
import { AlertTitle as _AlertTitle } from './styled';

export interface AlertTitleProps {
  children: React.ReactNode;
}

const AlertTitle = ({ children, ...props }: AlertTitleProps) => (
  <_AlertTitle use="h6" isSemiBold {...props}>
    {children}
  </_AlertTitle>
);

export default AlertTitle;

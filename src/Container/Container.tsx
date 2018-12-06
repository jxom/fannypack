import * as React from 'react';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { Breakpoint } from '../types';
import _Container from './styled';

export interface LocalContainerProps {
  align?: 'left' | 'right' | 'center';
  use?: any;
  breakpoint?: Breakpoint;
  children: React.ReactNode;
  className?: string;
  isFluid?: boolean;
}

export const Container: React.SFC<LocalContainerProps> = ({ align, children, className, ...props }) => (
  <_Container className={className} align={align} {...props}>
    {children}
  </_Container>
);

Container.defaultProps = {
  align: 'center',
  use: undefined,
  breakpoint: undefined,
  className: undefined,
  isFluid: false
};

export type ContainerProps = LocalContainerProps & ReakitBoxProps;
//@ts-ignore
const C: React.SFC<ContainerProps> = Container;
export default C;

import * as React from 'react';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import ColumnsContext from './ColumnsContext';
import _Columns from './styled';

export interface LocalColumnsProps {
  children: React.ReactNode;
  className?: string;
  isGapless?: boolean;
  isOneLine?: boolean;
  minBreakpoint?: 'tablet' | 'mobile';
}

const Columns: React.SFC<LocalColumnsProps> = ({
  children,
  className,
  isGapless,
  isOneLine,
  minBreakpoint,
  ...props
}) => (
  <ColumnsContext.Provider value={{ isGapless, minBreakpoint }}>
    <_Columns
      className={className}
      isGapless={isGapless}
      isOneLine={isOneLine}
      minBreakpoint={minBreakpoint}
      {...props}
    >
      {children}
    </_Columns>
  </ColumnsContext.Provider>
);

Columns.defaultProps = {
  className: undefined,
  isGapless: false,
  isOneLine: false,
  minBreakpoint: undefined
};

export type ColumnsProps = LocalColumnsProps & ReakitBoxProps;
//@ts-ignore
const C: React.SFC<ColumnsProps> = Columns;
export default C;

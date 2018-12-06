import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { breakpointPropType } from '../types';
import ColumnsContext from './ColumnsContext';
import _Columns from './styled';

export interface LocalColumnsProps {
  children: React.ReactNode;
  className?: string;
  isGapless?: boolean;
  isOneLine?: boolean;
  minBreakpoint?: 'tablet' | 'mobile';
}

export const Columns: React.SFC<LocalColumnsProps> = ({
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

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isGapless: PropTypes.bool,
  isOneLine: PropTypes.bool,
  minBreakpoint: breakpointPropType
};
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

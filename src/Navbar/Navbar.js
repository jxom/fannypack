// @flow

import React, { type Node } from 'react';
import _Navbar, { MenuIcon } from './styled';

type Props = {
  children: Node,
  className?: string,
  maxBreakpoint?: 'tablet' | 'mobile'
};

const Navbar = ({ children, maxBreakpoint, ...props }: Props) => (
  <_Navbar minBreakpoint={maxBreakpoint} {...props}>
    <MenuIcon icon="menu" maxBreakpoint={maxBreakpoint} />
    {children}
  </_Navbar>
);

Navbar.defaultProps = {
  className: undefined,
  maxBreakpoint: 'mobile'
};

export default Navbar;

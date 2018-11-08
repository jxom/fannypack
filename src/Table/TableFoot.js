// @flow
import React, { type Node } from 'react';

import { TableFoot as _TableFoot } from './styled';

type Props = {
  as?: any,
  children: Node,
  /** Renders a top border on the footer row */
  hasBorder?: boolean
};

const TableFoot = ({ as, children, hasBorder, ...props }: Props) => (
  <_TableFoot as={as} hasBorder={hasBorder} {...props}>
    {children}
  </_TableFoot>
);

TableFoot.defaultProps = {
  as: 'tfoot',
  hasBorder: true
};

export default TableFoot;

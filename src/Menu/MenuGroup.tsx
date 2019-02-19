import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts/Box/Box';

import { Omit } from '../types';
import { MenuGroup as _MenuGroup, MenuGroupTitle } from './styled';

export type LocalMenuGroupProps = {
  children: React.ReactNode;
  title?: string | React.ReactElement<any>;
};
export type MenuGroupProps = Omit<Omit<ReakitBoxProps, 'as'>, 'elementRef'> & LocalMenuGroupProps;

export const MenuGroup: React.FunctionComponent<MenuGroupProps> = ({ children, title, ...props }) => (
  <_MenuGroup {...props}>
    {title && <MenuGroupTitle>{title}</MenuGroupTitle>}
    {children}
  </_MenuGroup>
);

MenuGroup.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
MenuGroup.defaultProps = {};

const C: React.FunctionComponent<MenuGroupProps> = MenuGroup;
export default C;

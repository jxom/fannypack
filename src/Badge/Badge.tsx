import * as React from 'react';
import * as PropTypes from 'prop-types';

import _Badge from './styled';

export type BadgeProps = {
  palette?: string;
};

export const Badge: React.FunctionComponent<BadgeProps> = ({ children, ...props }) => (
  <_Badge {...props}>{children}</_Badge>
);

Badge.propTypes = {
  palette: PropTypes.string
};

Badge.defaultProps = {
  palette: 'text'
};

export default Badge;

import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { CardFooter as _CardFooter } from './styled';

export interface LocalCardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter: React.SFC<LocalCardFooterProps> = ({ children, ...props }) => (
  <_CardFooter {...props}>{children}</_CardFooter>
);

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
CardFooter.defaultProps = {
  className: undefined
};

export type CardFooterProps = LocalCardFooterProps & ReakitBoxProps;
//@ts-ignore
const C: React.SFC<CardFooterProps> = CardFooter;
export default C;

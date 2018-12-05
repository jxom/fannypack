// @flow
import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';

import { Palette } from '../types';
import _Blockquote from './styled';

export interface BlockquoteProps {
  children: React.ReactNode;
  className?: string;
  palette?: Palette;
}

const defaultProps: Partial<BlockquoteProps> = {
  className: undefined,
  palette: undefined
};

const Blockquote: React.SFC<BlockquoteProps> = ({ children, className, ...props }) => (
  <_Blockquote className={className} {...props}>
    {children}
  </_Blockquote>
);

Blockquote.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  palette: PropTypes.string
};
Blockquote.defaultProps = defaultProps;

export default Blockquote;

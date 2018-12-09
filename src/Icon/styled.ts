import { palette, theme } from 'styled-tools';

import { Box } from '../primitives';
import styled from '../styled';
import { IconProps } from './Icon';

export default styled(Box)<IconProps>`
  fill: ${props => (props.color ? palette(props.color)(props) : 'inherit')};
  position: relative;
  height: ${props => props.size}em;
  width: ${props => props.size}em;
  ${theme('fannypack.Icon.base')};
`;

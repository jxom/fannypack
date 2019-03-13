import { InlineFlex } from '../primitives';
import styled, { palette, theme } from '../styled';

export default styled(InlineFlex)`
  align-items: center;
  border-radius: 1rem;
  justify-content: center;
  background-color: ${palette()};
  padding: 0 0.4em;
  color: ${props => palette(`${props.palette}Inverted`)};
  fill: ${props => palette(`${props.palette}Inverted`)};
  font-size: ${theme('fannypack.fontSizes.100')}rem;
  font-weight: ${theme('fannypack.fontWeights.semibold')};
  height: 1.2em;
`;

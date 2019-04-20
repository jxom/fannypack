import { Box } from '../primitives';
import styled, { css, palette, theme } from '../styled';
import { LocalProgressBarProps } from './ProgressBar';

const sizeAttributes: any = {
  medium: css``,
  large: css``
};

export const ProgressBarIndicator = styled(Box)`
  height: 1rem;
  background-color: ${palette()};
  width: ${props => props.value || '0'}%;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const ProgressBar = styled(Box)<LocalProgressBarProps>`
  /* rounded: border-radius: 1rem; */
  width: 100%;
  height: 1rem;
  background-color: ${props => palette(`${props.palette}Tint`)};

  ${props => props.size && sizeAttributes[props.size]}

  & {
    ${theme('fannypack.Badge.base')};
  }
`;

export default ProgressBar;

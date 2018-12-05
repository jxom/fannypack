import { theme } from 'styled-tools';
import { Backdrop } from 'reakit';
import styled from '../styled';
import { BackdropProps } from './Backdrop';

export default styled(Backdrop)<BackdropProps>`
  background-color: black;
  opacity: 0.4;

  & {
    ${theme('fannypack.Backdrop.base')};
  }
`;

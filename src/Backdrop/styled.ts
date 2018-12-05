// @ts-ignore
import styled from 'reakit/styled';
import { theme } from 'styled-tools';
// @ts-ignore
import Backdrop from 'reakit/Backdrop';

export default styled(Backdrop)`
  background-color: black;
  opacity: 0.4;

  & {
    ${theme('fannypack.Backdrop.base')};
  }
`;

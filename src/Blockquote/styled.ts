// @ts-ignore
import Blockquote from 'reakit/Blockquote';
// @ts-ignore
import styled from 'reakit/styled';
import { darken } from 'polished';
import { theme } from 'styled-tools';

export default styled(Blockquote)`
  border-left: 4px solid ${darken(0.2, 'white')};
  padding: 1rem;

  & {
    ${theme('fannypack.Blockquote.base')};
  }
`;

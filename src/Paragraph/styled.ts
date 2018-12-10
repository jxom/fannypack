import { Paragraph } from 'reakit';
import { theme } from 'styled-tools';

import styled from '../styled';
import Icon from '../Icon/styled';
import { ParagraphProps } from './Paragraph';

export default styled(Paragraph)<ParagraphProps>`
  &:not(:last-child) {
    margin: 0 0 1rem;
  }

  & ${Icon} {
    top: 0.1em;
  }

  & {
    ${theme('fannypack.Paragraph.base')};
  }
`;

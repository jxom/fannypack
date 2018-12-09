import { Label } from 'reakit';
import { theme } from 'styled-tools';

import styled from '../styled';
import { LabelProps } from './Label';

export default styled(Label)<LabelProps>`
  display: block;

  ${theme('fannypack.Label.base')};
`;

import { theme } from 'styled-tools';
import { Navigation } from 'reakit';

import styled from '../styled';
import { NavigationProps } from './Navigation';

export default styled(Navigation)<NavigationProps>`
  ${theme('fannypack.Navigation.base')};
`;

// @flow
import styled, { css } from 'reakit/styled';
import { theme } from 'styled-tools';
import Toolbar from 'reakit/Toolbar';
import Icon from '../Icon';

const getBreakProperties = props => {
  const { maxBreakpoint } = props;

  console.log('test', maxBreakpoint);

  console.log(maxBreakpoint === 'mobile');
  return css`
    @media (min-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
      display: none;
    }
  `;
};

export const MenuIcon = styled(Icon)`
  ${getBreakProperties};
`;

export default styled(Toolbar)`
  & {
    ${theme('fannypack.NavBar.base')};
  }
`;

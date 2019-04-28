import styled, { css, space, theme } from '../styled';
import { Container } from '../Container';
import { PlainProps } from './Plain';

export const Plain = styled(Container)<PlainProps>`
  padding: ${space(4, 'major')}rem ${space(2, 'major')}rem;

  ${props =>
    props.isFluid &&
    css`
      && {
        padding: ${space(2, 'major')}rem;
      }
    `}

  & {
    ${theme('fannypack.Page.Plain.base')};
  }
`;

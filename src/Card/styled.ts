import { theme } from 'styled-tools';

import styled, { css } from '../styled';
import { Box } from '../primitives';
import { CardCardProps } from './CardCard';
import { CardContentProps } from './CardContent';
import { CardFooterProps } from './CardFooter';
import { CardHeaderProps } from './CardHeader';
import { CardTitleProps } from './CardTitle';
// @ts-ignore
import Pane from '../Pane';
// @ts-ignore
import Heading from '../Heading';

export default styled(Pane)<CardCardProps>`
  ${props =>
    props.isFullWidth &&
    css`
      width: 100%;
    `};
  }

  & {
    ${theme('fannypack.Card.base')};
  }
`;
export const CardContent = styled(Box)<CardContentProps>`
  & {
    ${theme('fannypack.Card.Content.base')};
  }
`;
export const CardHeader = styled(Box)<CardHeaderProps>`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: ${theme('fannypack.layout.spacing.small')}rem;
  position: relative;
  width: 100%;

  & {
    ${theme('fannypack.Card.Header.base')};
  }
`;
export const CardFooter = styled(Box)<CardFooterProps>`
  display: flex;
  padding-top: ${theme('fannypack.layout.spacing.small')}rem;
  width: 100%;

  & {
    ${theme('fannypack.Card.Footer.base')};
  }
`;
export const CardTitle = styled(Heading)<CardTitleProps>`
  margin-bottom: 0px;
  & {
    ${theme('fannypack.Card.Title.base')};
  }
`;

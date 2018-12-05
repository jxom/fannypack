// @ts-ignore
import styled, { css } from 'reakit/styled';
import { palette, theme } from 'styled-tools';
// @ts-ignore
import _Avatar from 'reakit/Avatar';

import { AvatarProps } from './Avatar';
import { StyledProps } from '../types';

type Props = AvatarProps & StyledProps;

const circleProperties = css`
  & {
    border-radius: 50%;
  }
`;

const fitProperties = (props: Props) => {
  if (!props.fit) return;
  if (props.fit === 'contain') {
    return css`
      object-fit: contain;
      ${(props: Props) =>
        props.fitPosition
          ? css`
              object-position: ${props.fitPosition};
            `
          : ''};

      ${theme('fannypack.Avatar.fit.base')};
      ${theme('fannypack.Avatar.fit.contain')};
    `;
  }
  if (props.fit === 'cover') {
    return css`
      object-fit: cover;
      ${(props: Props) =>
        props.fitPosition
          ? css`
              object-position: ${props.fitPosition};
            `
          : ''};

      ${theme('fannypack.Avatar.fit.base')};
      ${theme('fannypack.Avatar.fit.cover')};
    `;
  }
};

const sizeProperties: { [key: string]: string } = {
  xsmall: css`
    & {
      font-size: 8px;
      width: 20px;
      height: 20px;
    }
    & {
      ${theme('fannypack.Avatar.sizes.xsmall')};
    }
  `,
  small: css`
    & {
      font-size: 16px;
      width: 40px;
      height: 40px;
    }
    & {
      ${theme('fannypack.Avatar.sizes.small')};
    }
  `,
  medium: css`
    & {
      font-size: 32px;
      width: 80px;
      height: 80px;
    }
    & {
      ${theme('fannypack.Avatar.sizes.medium')};
    }
  `,
  large: css`
    & {
      font-size: 48px;
      width: 100px;
      height: 100px;
    }
    & {
      ${theme('fannypack.Avatar.sizes.large')};
    }
  `
};

export const AvatarCircle = styled.div`
  align-items: center;
  background-color: ${(props: Props) => palette(props.palette || '')(props)};
  color: ${(props: Props) => (props.color ? props.color : palette(`${props.palette}Inverted`)(props))};
  display: flex;
  justify-content: center;
  font-size: 24px;
  height: ${(props: Props) => (typeof props.size === 'number' ? `${props.size}px` : '60px')};
  width: ${(props: Props) => (typeof props.size === 'number' ? `${props.size}px` : '60px')};

  ${(props: Props) => props.kind === 'circle' && circleProperties};
  ${(props: Props) => (typeof props.size === 'string' ? sizeProperties[props.size] : null)};

  ${theme('fannypack.Avatar.Circle.base')};
`;

const AvatarImage = styled(_Avatar)`
  font-size: 24px;
  height: ${(props: Props) => (typeof props.size === 'number' ? `${props.size}px` : '60px')};
  width: ${(props: Props) => (typeof props.size === 'number' ? `${props.size}px` : '60px')};
  ${(props: Props) => props.kind === 'circle' && circleProperties};
  ${(props: Props) => (typeof props.size === 'string' ? sizeProperties[props.size] : null)};

  & {
    ${fitProperties};
  }

  ${theme('fannypack.Avatar.Image.base')};
`;

export default AvatarImage;

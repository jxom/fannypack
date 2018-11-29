// @flow
import styled, { css } from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import _Avatar from 'reakit/Avatar';

const circleProperties = css`
  & {
    border-radius: 50%;
  }
`;

const fitProperties = props => {
  if (!props.fit) return;
  if (props.fit === 'contain') {
    return css`
      object-fit: contain;
      ${props =>
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
      ${props =>
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

const sizeProperties = {
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
  default: css`
    & {
      font-size: 24px;
      width: 60px;
      height: 60px;
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
  background-color: ${props => palette(props.palette)(props)};
  color: ${props => (props.fontColor ? props.fontColor : palette(`${props.palette}Inverted`)(props))};
  display: flex;
  justify-content: center;

  ${props => props.kind === 'circle' && circleProperties};
  ${props => sizeProperties[props.size]};

  ${theme('fannypack.Avatar.Circle.base')};
`;

const AvatarImage = styled(_Avatar)`
  ${props => props.kind === 'circle' && circleProperties};
  ${props => sizeProperties[props.size]};

  & {
    ${fitProperties};
  }

  ${theme('fannypack.Avatar.Image.base')};
`;

export default AvatarImage;

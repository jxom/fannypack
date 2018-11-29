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
      font-size: 0.5em;
      width: 20px;
      height: 20px;
    }
    & {
      ${theme('fannypack.Avatar.sizes.xsmall')};
    }
  `,
  small: css`
    & {
      font-size: 1em;
      width: 40px;
      height: 40px;
    }
    & {
      ${theme('fannypack.Avatar.sizes.small')};
    }
  `,
  default: css`
    & {
      font-size: 1.5em;
      width: 60px;
      height: 60px;
    }
    & {
      ${theme('fannypack.Avatar.sizes.small')};
    }
  `,
  medium: css`
    & {
      font-size: 2em;
      width: 80px;
      height: 80px;
    }
    & {
      ${theme('fannypack.Avatar.sizes.medium')};
    }
  `,
  large: css`
    & {
      font-size: 3em;
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
  display: flex;
  justify-content: center;

  ${props => props.kind === 'circle' && circleProperties};
  ${props => sizeProperties[props.size]};

  & {
    ${fitProperties};
  }

  ${theme('fannypack.AvatarCircle.base')};
`;

export const AvatarInitials = styled.div`
  color: ${props => (props.fontColor ? props.fontColor : palette(`${props.palette}Inverted`)(props))};
`;

const AvatarImage = styled(_Avatar)`
  ${props => props.kind === 'circle' && circleProperties};
  ${props => sizeProperties[props.size]};

  & {
    ${fitProperties};
  }

  ${theme('fannypack.AvatarImage.base')};
`;

export default AvatarImage;

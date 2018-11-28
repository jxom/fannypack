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
      width: 20px;
      height: 20px;
    }
    & {
      ${theme('fannypack.Avatar.sizes.xsmall')};
    }
  `,
  small: css`
    & {
      width: 40px;
      height: 40px;
    }
    & {
      ${theme('fannypack.Avatar.sizes.small')};
    }
  `,
  default: css`
    & {
      width: 60px;
      height: 60px;
    }
    & {
      ${theme('fannypack.Avatar.sizes.small')};
    }
  `,
  medium: css`
    & {
      width: 80px;
      height: 80px;
    }
    & {
      ${theme('fannypack.Avatar.sizes.medium')};
    }
  `,
  large: css`
    & {
      width: 160px;
      height: 160px;
    }
    & {
      ${theme('fannypack.Avatar.sizes.large')};
    }
  `
};

export const AvatarInitials = styled.div`
  background-color: ${props => palette(`${props.palette}Inverted`)(props)};
  ${props => props.kind === 'circle' && circleProperties};
  ${props => sizeProperties[props.size]};

  & {
    ${fitProperties};
  }

  ${theme('fannypack.AvatarInitials.base')};
`;

const Avatar = styled(_Avatar)`
  ${props => props.kind === 'circle' && circleProperties};
  ${props => sizeProperties[props.size]};

  & {
    ${fitProperties};
  }

  ${theme('fannypack.Avatar.base')};
`;

export default Avatar;

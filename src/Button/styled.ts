import { palette, theme } from 'styled-tools';
import { darken } from 'polished';
// @ts-ignore
import _Button from 'reakit/Button';
// @ts-ignore
import styled, { css } from '../styled';
import { StyledProps } from '../types';
import { ButtonProps } from './Button';

type Props = StyledProps & ButtonProps;

const sizeProperties: { [key: string]: string } = {
  small: css`
    & {
      font-size: 0.8em;
      height: 2em;
      padding: 0 0.5rem;
    }
    & {
      ${theme('fannypack.Button.sizes.small')};
    }
  `,
  medium: css`
    & {
      height: 3em;
      padding: 0 1.25rem;
    }
    & {
      ${theme('fannypack.Button.sizes.medium')};
    }
  `,
  large: css`
    & {
      font-size: 1.25rem;
      height: 3em;
      padding: 0 1.5rem;
    }
    & {
      ${theme('fannypack.Button.sizes.large')};
    }
  `
};

const linkProperties = css`
  & {
    border: 0;
    background: unset;
    color: ${(props: Props) => (props.palette === 'default' ? palette('text')(props) : palette()(props))};
    fill: ${(props: Props) => (props.palette === 'default' ? palette('text')(props) : palette()(props))};
    text-decoration: underline;

    &:hover {
      color: ${(props: Props) =>
        props.palette === 'default' ? darken(0.5, palette('text')(props)) : darken(0.5, palette()(props))};
      fill: ${(props: Props) =>
        props.palette === 'default' ? darken(0.5, palette('text')(props)) : darken(0.5, palette()(props))};
    }
  }
  & {
    ${theme('fannypack.Button.link')};
  }
`;
const outlinedProperties = css`
  & {
    background-color: unset;
    border: 1px solid ${palette()};
    color: ${palette()};
    fill: ${palette()};

    &:hover {
      color: ${(props: Props) => palette(`${props.palette}Inverted`)(props)};
      fill: ${(props: Props) => palette(`${props.palette}Inverted`)(props)};
    }
  }
  & {
    ${theme('fannypack.Button.outlined')};
  }
`;

const disabledProperties = css`
  & {
    cursor: not-allowed;
    opacity: 0.7;
    outline: unset;
    pointer-events: unset;
  }
  & {
    ${theme('fannypack.Button.disabled')};
  }
`;

const staticProperties = css`
  & {
    cursor: default;
    outline: unset;

    &:focus {
      box-shadow: unset !important;
      outline: unset !important;
    }
  }
  & {
    ${theme('fannypack.Button.static')};
  }
`;

const interactiveProperties = css`
  &:hover {
    background-color: ${(props: Props) => darken(0.05, palette()(props))};
  }
  &:hover:active {
    background-color: ${(props: Props) => darken(0.1, palette()(props))};
  }
`;
const loadingProperties = css`
  & {
    cursor: not-allowed;

    &:focus {
      box-shadow: unset !important;
      outline: unset !important;
    }
  }
  & {
    ${theme('fannypack.Button.loading')};
  }
`;

const Button = styled(_Button)`
  align-items: center;
  background-color: ${palette()};
  border: 1px solid ${(props: Props) =>
    darken(0.2, palette(props.palette === 'default' ? 'whiteDarker' : props.palette || '')(props))};
  border-radius: 4px;
  color: ${(props: Props) => palette(`${props.palette}Inverted`)(props)};
  fill: ${(props: Props) => palette(`${props.palette}Inverted`)(props)};
  cursor: pointer;
  display: inline-flex;
  font-weight: ${theme('fannypack.fontWeights.semibold')};
  height: 2.5em;
  justify-content: center;
  padding: 0 0.8rem;
  text-decoration: none;

  &:focus {
    outline: unset;
    z-index: 2;
    box-shadow: ${(props: Props) =>
      palette(props.palette === 'default' ? 'primaryLighter' : `${props.palette}Lighter`)(props)} 0px 0px 0px 2px;
  };

  &[disabled] {
    ${disabledProperties}
  };

  ${(props: Props) => (props.size ? sizeProperties[props.size] : null)}

  ${(props: Props) => props.kind === 'outlined' && outlinedProperties}
  ${(props: Props) => props.kind === 'link' && linkProperties}

  ${(props: Props) => props.isLoading && loadingProperties};
  ${(props: Props) => props.isStatic && staticProperties};
  ${(props: Props) =>
    !props.isStatic && !props.isLoading && !props.disabled && props.kind !== 'link' ? interactiveProperties : ''};

  & {
    ${theme('fannypack.Button.base')}
  }
`;

export default Button;

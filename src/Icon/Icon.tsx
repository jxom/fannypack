import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';
import { IconSvgPaths16, IconSvgPaths20 } from '@blueprintjs/icons';
// @ts-ignore
import _get from 'lodash/get';

import { withTheme } from '../styled';
import { Omit, Size, sizePropType } from '../types';
import _Icon from './styled';

export interface Props {
  children?: React.ReactNode;
  /** Color of the icon. Can be a color from the palette, or any other color. */
  color?: string;
  className?: string;
  /** The name of your icon from the Blueprint set (https://blueprintjs.com/docs/#icons). */
  icon: string;
  /** Size of the icon. Available values: "small", "medium", "large" */
  size?: Size;
  theme?: Object;
}
export interface PropsWithA11yHidden extends Props {
  /** Indicates that this element should be skipped by assistive technologies. */
  a11yHidden: boolean;
}
export interface PropsWithA11yLabel extends Props {
  /** A label for the icon which can be read by screen readers. This is required if a11yHidden is false. */
  a11yLabel: string;
}
export type LocalIconProps = PropsWithA11yHidden | PropsWithA11yLabel;
export type IconProps = Omit<ReakitBoxProps, 'size'> & LocalIconProps;

const DEFAULT_VIEW_BOX_SIZE = 16;
const LARGE_VIEW_BOX_SIZE = 20;

export const Icon: React.FunctionComponent<LocalIconProps> = ({
  // @ts-ignore
  a11yHidden,
  // @ts-ignore
  a11yLabel,
  children,
  icon,
  size: _size,
  theme,
  ...props
}) => {
  const size = _get(theme, `fannypack.fontSizes[${_size || ''}]`, 1);
  const svgPaths: { [key: string]: Array<string> } = size >= LARGE_VIEW_BOX_SIZE ? IconSvgPaths20 : IconSvgPaths16;
  const viewBoxSize = size >= LARGE_VIEW_BOX_SIZE ? LARGE_VIEW_BOX_SIZE : DEFAULT_VIEW_BOX_SIZE;
  const newIcon = _get(theme, `fannypack.Icon.iconNames[${icon}]`) || icon;
  const paths = svgPaths[newIcon];
  return (
    // @ts-ignore
    <_Icon
      use="svg"
      ariaHidden={a11yHidden}
      role="img"
      size={size}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      {...props}
    >
      {a11yLabel && <title>{a11yLabel}</title>}
      {paths.map(path => (
        <path key={path} d={path} fillRule="evenodd" />
      ))}
    </_Icon>
  );
};

Icon.propTypes = {
  a11yHidden: PropTypes.bool,
  a11yLabel: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  size: sizePropType,
  theme: PropTypes.object
};
Icon.defaultProps = {
  a11yHidden: false,
  a11yLabel: undefined,
  children: null,
  className: undefined,
  color: undefined,
  icon: undefined,
  size: 'default',
  theme: {}
};

// @ts-ignore
const C: React.FunctionComponent<IconProps> = withTheme(Icon);
export default C;

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

export interface LocalIconProps {
  /** A label for the icon which can be read by screen readers. This is required! */
  a11yLabel: string;
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
export type IconProps = LocalIconProps & Omit<ReakitBoxProps, 'size'>;

const DEFAULT_VIEW_BOX_SIZE = 16;
const LARGE_VIEW_BOX_SIZE = 20;

export const Icon: React.FunctionComponent<LocalIconProps> = ({
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
  const paths = svgPaths[icon];
  return (
    // @ts-ignore
    <_Icon use="svg" role="img" size={size} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} {...props}>
      {a11yLabel && <title>{a11yLabel}</title>}
      {paths.map(path => (
        <path key={path} d={path} fillRule="evenodd" />
      ))}
    </_Icon>
  );
};

Icon.propTypes = {
  a11yLabel: PropTypes.string.isRequired,
  children: PropTypes.node,
  color: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  size: sizePropType,
  theme: PropTypes.object
};
Icon.defaultProps = {
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

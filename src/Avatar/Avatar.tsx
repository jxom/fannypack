import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _Avatar, { AvatarCircle } from './styled';
import { Palette } from '../types';

export interface AvatarProps {
  a11yLabel?: string;
  alt?: string;
  color?: string;
  className?: string;
  fit?: 'cover' | 'contain';
  fitPosition?: string;
  initials?: string;
  kind?: 'circle' | 'square';
  palette?: Palette;
  size?: number | 'default' | 'xsmall' | 'small' | 'medium' | 'large';
  src?: string;
}

const defaultProps: Partial<AvatarProps> = {
  a11yLabel: undefined,
  alt: undefined,
  kind: 'square',
  className: undefined,
  color: undefined,
  fit: undefined,
  fitPosition: undefined,
  initials: undefined,
  palette: undefined,
  size: undefined,
  src: undefined
};

export const Avatar: React.SFC<AvatarProps> = ({ a11yLabel, className, initials, kind, size, src, ...props }) => (
  <React.Fragment>
    {src && (
      <_Avatar
        alt={a11yLabel}
        className={classNames({
          [className || '']: Boolean(className)
        })}
        kind={kind}
        size={size}
        src={src}
        {...props}
      />
    )}
    {initials && (
      <AvatarCircle
        alt={a11yLabel}
        className={classNames({
          [className || '']: Boolean(className)
        })}
        kind={kind}
        size={size}
        {...props}
      >
        {initials.split(' ').length === 2 ? initials.match(/\b\w/g) : initials.substring(0, 2)}
      </AvatarCircle>
    )}
  </React.Fragment>
);

Avatar.propTypes = {
  a11yLabel: PropTypes.string,
  alt: PropTypes.string,
  kind: PropTypes.oneOf(['circle', 'square']),
  color: PropTypes.string,
  className: PropTypes.string,
  fit: PropTypes.oneOf(['cover', 'contain']),
  fitPosition: PropTypes.string,
  initials: PropTypes.string,
  palette: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['default', 'xsmall', 'small', 'medium', 'large'])]),
  src: PropTypes.string
};
Avatar.defaultProps = defaultProps;

export default Avatar;

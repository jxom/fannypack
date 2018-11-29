// @flow
import React, { Fragment } from 'react';
import classNames from 'classnames';
import _Avatar, { AvatarCircle, AvatarInitials } from './styled';

type AvatarType = 'circle' | 'square';

type Size = 'default' | 'xSmall' | 'small' | 'medium' | 'large';

type Props = {
  a11yLabel?: string,
  kind?: AvatarType,
  className?: string,
  fit?: 'cover' | 'contain',
  initials?: string,
  size?: Size,
  source?: string
};

const Avatar = ({ a11yLabel, className, initials, kind, size, source, ...props }: Props) => (
  <Fragment>
    {source && (
      <_Avatar
        alt={a11yLabel}
        className={classNames({
          [className || '']: Boolean(className)
        })}
        kind={kind}
        size={size}
        src={source}
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
        <AvatarInitials {...props}>
          {initials.split(' ').length === 2 ? initials.match(/\b\w/g) : initials.substring(0, 2)}
        </AvatarInitials>
      </AvatarCircle>
    )}
  </Fragment>
);

Avatar.defaultProps = {
  a11yLabel: undefined,
  kind: 'square',
  className: null,
  fit: null,
  initials: undefined,
  size: 'default',
  source: undefined
};

export default Avatar;

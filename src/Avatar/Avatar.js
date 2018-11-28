// @flow
import React, { type Element, Fragment } from 'react';
import classNames from 'classnames';
import _Avatar, { AvatarInitials } from './styled';

import type { AvatarType } from '../types';

type Size = 'default' | 'xSmall' | 'small' | 'medium' | 'large';

type Props = {
  a11yLabel?: string,
  kind: AvatarType,
  className?: string,
  fit?: 'cover' | 'contain',
  initials?: string | Element<any>,
  size: Size,
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
      <AvatarInitials
        alt={a11yLabel}
        className={classNames({
          [className || '']: Boolean(className)
        })}
        initials="MB"
        kind={kind}
        size={size}
        {...props}
      />
    )}
  </Fragment>
);

Avatar.defaultProps = {
  a11yLabel: undefined,
  className: null,
  fit: null,
  initials: undefined,
  size: 'default',
  source: undefined
};

export default Avatar;

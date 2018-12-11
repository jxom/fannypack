// @flow
import React, { type Element, type Node } from 'react';
import _Callout, { CalloutHeader } from './styled';
import { getUniqueId } from '../uniqueId';
import type { Palette } from '../types';

import CalloutContent from '../Card/CardContent';
import CalloutTitle from '../Card/CardTitle';
import Icon from '../Icon';

type Props = {
  a11yDescriptionId?: string,
  a11yTitleId?: string,
  children: Node,
  className?: string,
  hasTint?: boolean,
  icon?: string,
  palette?: Palette,
  title?: string | Element<any>
};

const Callout = ({ a11yDescriptionId, a11yTitleId, children, hasTint, icon, palette, title, ...props }: Props) => {
  const intentIcon = {
    primary: 'info-sign',
    warning: 'warning-sign',
    success: 'tick-circle',
    danger: 'error'
  };

  return (
    <_Callout
      a11yDescriptionId={a11yDescriptionId}
      a11yTitleId={a11yTitleId}
      hasTint={hasTint}
      palette={palette}
      {...props}
    >
      {title && (
        <CalloutHeader>
          {palette &&
            typeof intentIcon[palette] !== 'undefined' && (
              <Icon icon={icon ? icon : intentIcon[palette]} color={palette} marginRight="12px" size="medium" />
            )}
          {typeof title === 'string' ? (
            <CalloutTitle id={a11yTitleId} color={palette}>
              {title}
            </CalloutTitle>
          ) : (
            title
          )}
        </CalloutHeader>
      )}
      <CalloutContent id={a11yDescriptionId}>{children}</CalloutContent>
    </_Callout>
  );
};

Callout.defaultProps = {
  a11yDescriptionId: getUniqueId('Card'),
  a11yTitleId: getUniqueId('Card'),
  children: undefined,
  className: undefined,
  hasTint: undefined,
  icon: undefined,
  palette: 'text',
  title: undefined
};

export default Callout;

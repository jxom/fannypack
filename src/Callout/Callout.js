// @flow
import React, { type Element, type Node } from 'react';
import { Flex } from '../primitives';
import _Callout, { CalloutHeader } from './styled';
import { getUniqueId } from '../uniqueId';

import CalloutContent from '../Card/CardContent';
import CalloutTitle from '../Card/CardTitle';
import CalloutFooter from '../Card/CardFooter';
import Icon from '../Icon';

type Props = {
  a11yDescriptionId?: string,
  a11yTitleId?: string,
  children: Node,
  className?: string,
  footer?: string | Element<any>,
  hasTint?: boolean,
  icon?: string,
  title?: string | Element<any>,
  type?: 'info' | 'success' | 'danger' | 'warning'
};

const Callout = ({ a11yDescriptionId, a11yTitleId, children, footer, hasTint, icon, title, type, ...props }: Props) => {
  return (
    <_Callout a11yDescriptionId={a11yDescriptionId} a11yTitleId={a11yTitleId} hasTint={hasTint} type={type} {...props}>
      <Flex>
        {(type || icon) && (
          <CalloutTitle>
            <Icon icon={type || icon} color={type} marginRight="12px" />
          </CalloutTitle>
        )}
        <div>
          {title && (
            <CalloutHeader>
              {typeof title === 'string' ? <CalloutTitle id={a11yTitleId}>{title}</CalloutTitle> : title}
            </CalloutHeader>
          )}
          <CalloutContent id={a11yDescriptionId}>{children}</CalloutContent>
          {footer && <CalloutFooter>{footer}</CalloutFooter>}
        </div>
      </Flex>
    </_Callout>
  );
};

Callout.defaultProps = {
  a11yDescriptionId: getUniqueId('Callout'),
  a11yTitleId: getUniqueId('Callout'),
  children: undefined,
  className: undefined,
  footer: undefined,
  hasTint: false,
  icon: undefined,
  title: undefined,
  type: undefined
};

export default Callout;

import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';

import { PaneProps } from '../Pane/Pane';
import Card from './styled';

export interface LocalCardCardProps {
  a11yDescriptionId?: string;
  a11yTitleId?: string;
  children: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
}

const CardCard: React.SFC<LocalCardCardProps> = ({ a11yDescriptionId, a11yTitleId, children, ...props }) => (
  <Card aria-describedby={a11yDescriptionId} aria-labelledby={a11yTitleId} border="shadow" padding="medium" {...props}>
    {children}
  </Card>
);

CardCard.propTypes = {
  a11yDescriptionId: PropTypes.string,
  a11yTitleId: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isFullWidth: PropTypes.bool
};
CardCard.defaultProps = {
  a11yDescriptionId: undefined,
  a11yTitleId: undefined,
  children: undefined,
  className: undefined,
  isFullWidth: false
};

export type CardCardProps = LocalCardCardProps & PaneProps;
//@ts-ignore
const C: React.SFC<CardCardProps> = CardCard;
export default C;

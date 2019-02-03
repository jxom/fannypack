/* eslint react/prop-types: 0 */
import * as React from 'react';
import * as PropTypes from 'prop-types';

import { BreadcrumbStep as _BreadcrumbStep, BreadcrumbLink as _BreadcrumbLink } from './styled';

export type LocalBreadcrumbStepProps = {
  color: string;
  href: string;
  isCurrent: boolean;
  text: string;
};

export type BreadcrumbStepProps = LocalBreadcrumbStepProps;

const BreadcrumbStep: React.FunctionComponent<LocalBreadcrumbStepProps> = ({ color, href, isCurrent, text }) => (
  <_BreadcrumbStep>
    <_BreadcrumbLink aria-current={isCurrent ? 'page' : undefined} href={href} color={color}>
      {text}
    </_BreadcrumbLink>
  </_BreadcrumbStep>
);

BreadcrumbStep.propTypes = {
  color: PropTypes.string,
  href: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

BreadcrumbStep.defaultProps = {
  color: '',
  isCurrent: false,
};

// @ts-ignore
const C: React.FunctionComponent<BreadcrumbStepProps> = BreadcrumbStep;
export default C;

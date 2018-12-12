// @flow

import styled, { css } from '../styled';
import { palette } from 'styled-tools';
import CardCard from '../Card/CardCard';
import CardHeader from '../Card/CardHeader';

const getTintAttributes = props => {
  const { type, hasTint } = props;

  if (!hasTint || !type) {
    return;
  }

  return css`
    background-color: ${type && palette(`${type}Tint`)(props)};
    color: ${type && palette(`${type}TintInverted`)(props)};
    fill: ${type && palette(`${type}TintInverted`)(props)};
  `;
};

export default styled(CardCard)`
  border: none;
  ${getTintAttributes};
`;

export const CalloutHeader = styled(CardHeader)`
  display: flex;
  justify-content: flex-start;
`;

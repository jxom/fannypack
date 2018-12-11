// @flow

import styled, { css } from '../styled';
import { palette } from 'styled-tools';
import CardCard from '../Card/CardCard';
import CardHeader from '../Card/CardHeader';

const getTintAttributes = props => {
  const { palette: _palette, hasTint } = props;

  if (!hasTint || !_palette) {
    return;
  }

  return css`
    background-color: ${_palette === 'default' ? palette('textTint')(props) : palette(`${_palette}Tint`)(props)};
    border-top-width: 0;
    border-right-width: 0;
    border-bottom-width: 0;
    color: ${_palette === 'default' ? palette('textTintInverted')(props) : palette(`${_palette}TintInverted`)(props)};
    fill: ${_palette === 'default' ? palette('textTintInverted')(props) : palette(`${_palette}TintInverted`)(props)};
  `;
};

export default styled(CardCard)`
  color: black;
  ${getTintAttributes};
`;

export const CalloutHeader = styled(CardHeader)`
  display: flex;
  justify-content: flex-start;
`;

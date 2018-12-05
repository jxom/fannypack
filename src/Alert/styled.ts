import { palette, theme } from 'styled-tools';
import { Box } from '../primitives';
import styled, { css } from '../styled';
// @ts-ignore
import Heading from '../Heading';
import { AlertProps } from './Alert';

export const AlertTitle = styled(Heading)`
  font-weight: ${theme('fannypack.fontWeights.semibold')};
  margin-bottom: ${theme('fannypack.layout.spacing.xxsmall')}rem;

  & {
    ${theme('fannypack.Alert.Title.base')};
  }
`;

const getTextColor = (props: any) => {
  const { palette: _palette } = props;
  if (_palette === 'default') {
    return palette('text')(props);
  }
  if (_palette === 'warning') {
    return palette('warningDarkest')(props);
  }
  return palette(_palette || 'default')(props);
};

const tintAttributes = css`
  background-color: ${(props: any) =>
    props.palette === 'default' ? palette('textTint')(props) : palette(`${props.palette}Tint`)(props)};
  border-top-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
  color: ${(props: any) =>
    props.palette === 'default' ? palette('textTintInverted')(props) : palette(`${props.palette}TintInverted`)(props)};
  fill: ${(props: any) =>
    props.palette === 'default' ? palette('textTintInverted')(props) : palette(`${props.palette}TintInverted`)(props)};
`;

export default styled(Box)<AlertProps>`
  background-color: white;
  border: 1px solid ${palette('whiteDarkest')};
  border-left: 4px solid
    ${props => (props.palette === 'default' ? palette('text')(props) : palette(props.palette || 'default')(props))};
  border-radius: 4px;
  color: ${getTextColor};
  padding: 1rem;

  & {
    ${props => props.hasTint && tintAttributes};
  }

  & {
    ${theme('fannypack.Alert.base')};
  }
`;

import { css } from 'reakit/styled';
import { darken, lighten, shade, tint } from 'polished';

const theme = {
  global: {
    base: css`
      font-family: 'Lato'
    `
  },
  palette: {
    text: '#435a6f',
    textLight: lighten(0.05, '#435a6f'),
    textLighter: lighten(0.1, '#435a6f'),
    textLightest: lighten(0.2, '#435a6f'),
    textTint: tint(0.9, '#435a6f'),

    black: 'black',
    blackInverted: 'white',

    white: 'white',
    whiteDark: darken(0.03, 'white'),
    whiteDarker: darken(0.05, 'white'),
    whiteDarkest: darken(0.1, 'white'),

    grey: '#d8d8d8',
    greyInverted: 'black',

    default: darken(0.01, 'white'),
    defaultInverted: '#435a6f',

    primary: '#e70073',
    primaryLight: tint(0.1, '#e70073'),
    primaryLighter: tint(0.3, '#e70073'),
    primaryLightest: tint(0.5, '#e70073'),
    primaryDark: shade(0.1, '#e70073'),
    primaryDarker: shade(0.3, '#e70073'),
    primaryDarkest: shade(0.5, '#e70073'),
    primaryTint: tint(0.9, '#e70073'),
    primaryInverted: 'white',

    green: '#50E38E',
    greenInverted: 'black',
    yellow: '#FFEC00',
    yellowInverted: 'black',
    pink: '#E73FC4',
    pinkInverted: 'black',
    orange: '#FF6F1B',
    orangeInverted: 'black',

    success: '#5cb700',
    successLight: tint(0.1, '#5cb700'),
    successLighter: tint(0.3, '#5cb700'),
    successLightest: tint(0.5, '#5cb700'),
    successDark: shade(0.1, '#5cb700'),
    successDarker: shade(0.3, '#5cb700'),
    successDarkest: shade(0.5, '#5cb700'),
    successTint: tint(0.9, '#5cb700'),
    successInverted: 'white',

    danger: '#e41625',
    dangerLight: tint(0.1, '#e41625'),
    dangerLighter: tint(0.3, '#e41625'),
    dangerLightest: tint(0.5, '#e41625'),
    dangerDark: shade(0.1, '#e41625'),
    dangerDarker: shade(0.3, '#e41625'),
    dangerDarkest: shade(0.5, '#e41625'),
    dangerTint: tint(0.9, '#e41625'),
    dangerInverted: 'white',

    warning: '#f39c12',
    warningLight: tint(0.1, '#f39c12'),
    warningLighter: tint(0.3, '#f39c12'),
    warningLightest: tint(0.5, '#f39c12'),
    warningDark: shade(0.1, '#f39c12'),
    warningDarker: shade(0.3, '#f39c12'),
    warningDarkest: shade(0.5, '#f39c12'),
    warningTint: tint(0.9, '#f39c12'),
    warningInverted: lighten(0.2, 'black')
  },
  layout: {
    mobileBreakpoint: 520,
    tabletBreakpoint: 960
  },
  Button: {
    disabled: css`
      opacity: 0.2
    `
  },
  Text: css`
    font-weight: 300;
  `
}

export default theme;

import { css } from '@emotion/core';
export { default as classNames } from 'classnames';
export { default as styled } from '@emotion/styled';
export { flush, hydrate, cx, merge, getRegisteredStyles, injectGlobal, sheet, cache, css as cssClass } from 'emotion';
export { css, keyframes, Global, ThemeContext, CacheProvider } from '@emotion/core';
export { withTheme, ThemeProvider } from 'emotion-theming';

export function themeCss(cssStrings, ...fns) {
  return styleProps => {
    let strings = cssStrings.map((string, i) => {
      let cssFnString = fns[i] ? fns[i](styleProps) || '' : '';
      if (typeof cssFnString === 'function') {
        cssFnString = cssFnString(styleProps).styles;
      }
      if (typeof cssFnString === 'object') {
        cssFnString = cssFnString.styles;
      }
      return `${string}${cssFnString}`.replace(/\s|;$|^;/g, '');
    }).filter(Boolean);
    return css`${strings.join(';')};`;
  }
}

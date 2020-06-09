import { css, theme, palette } from '../../styled';

export default {
  collapseBreakpoint: 'widescreen',
  WithSidebar: {
    defaultProps: {
      sidebarProps: {
        hideCloseButton: true
      }
    },
    Sidebar: {
      base: css`
        background-color: ${palette('primary800')};
      `
    },
    DesktopSidebarWrapper: {
      base: css`
        z-index: 1;
      `
    }
  },
  Content: {
    base: css`
      padding: 2rem;

      @media screen and (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    `,
    wrapper: css`
      background-color: white;
      border-bottom: 1px solid ${palette('white900')};
    `
  }
};

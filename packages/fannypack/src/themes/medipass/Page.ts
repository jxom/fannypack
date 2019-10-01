import { css, palette } from '../../styled';

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
    wrapper: css`
      background-color: white;
      border-bottom: 1px solid ${palette('white900')};
    `
  }
};

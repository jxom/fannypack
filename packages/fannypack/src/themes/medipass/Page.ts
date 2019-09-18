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
      border-bottom: 1px solid ${palette('white900')};

      &div:nth-child(even) {
        background-color: white;
      }
      &div:nth-child(odd) {
        background-color: ${palette('white600')};
      }
    `
  }
};

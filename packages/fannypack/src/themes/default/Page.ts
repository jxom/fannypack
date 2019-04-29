// @ts-ignore
import _get from 'lodash/get';

export default (overrides: any) => ({
  ..._get(overrides, 'Page', {}),
  WithSidebar: {
    breakpoint: 'desktop',
    sidebarWidth: '250px'
  }
});

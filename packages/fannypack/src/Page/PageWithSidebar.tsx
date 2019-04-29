import * as React from 'react';
import * as PropTypes from 'prop-types';
import Media from 'react-media';
// @ts-ignore
import _get from 'lodash/get';
import { FlexProps as ReakitFlexProps } from 'reakit/ts';

import { Box } from '../primitives';
import { withTheme } from '../styled';
import { withPage } from './PageContainer';
import {
  PageWithSidebar as _PageWithSidebar,
  Spacer,
  DesktopSidebarWrapper,
  MobileSidebarWrapper,
  Sidebar
} from './styled';

export type LocalPageWithSidebarProps = {
  children: React.ReactNode;
  page: Object;
  theme: Object;
};
export type PageWithSidebarProps = ReakitFlexProps & LocalPageWithSidebarProps;

// TODO:
// - Sidebar content
// - Sidebar props

export const PageWithSidebar: React.FunctionComponent<LocalPageWithSidebarProps> = ({
  children,
  page,
  theme,
  ...props
}) => {
  const breakpoint = _get(theme, 'fannypack.Page.WithSidebar.breakpoint');
  const breakpointPx = _get(theme, `fannypack.layout.${breakpoint}Breakpoint`);
  return (
    <_PageWithSidebar {...props}>
      <Spacer />
      <Media query={`(max-width: ${breakpointPx}px)`}>
        {isMobile =>
          isMobile ? (
            <MobileSidebarWrapper
              isVisible={page.isSidebarOpen}
              onClickClose={page.closeSidebar}
              hide={page.closeSidebar}
            >
              <Sidebar>test</Sidebar>
            </MobileSidebarWrapper>
          ) : (
            <DesktopSidebarWrapper>
              <Sidebar>test</Sidebar>
            </DesktopSidebarWrapper>
          )
        }
      </Media>
      <Box width="100%">{children}</Box>
    </_PageWithSidebar>
  );
};

export const PageWithSidebarPropTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.object,
  theme: PropTypes.object
};
PageWithSidebar.propTypes = PageWithSidebarPropTypes;

export const PageWithSidebarDefaultProps = {
  page: {},
  theme: {}
};
PageWithSidebar.defaultProps = PageWithSidebarDefaultProps;

const C: React.FunctionComponent<PageWithSidebarProps> = withPage(withTheme(PageWithSidebar));
export default C;

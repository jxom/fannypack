import React from 'react';
import MDXStyle from 'mdx-style';
import { DocsContext } from 'mdx-docs/dist/context';
import defaultComponents from 'mdx-docs/dist/components';
import useMedia from 'use-media';
import { Button, Icon, Flex, withTheme } from '../../src';

import Content from './Content';
import Sidebar from './Sidebar';

export const getNextRoute = props => props.routes.find(route => route.path === props.router.pathname) || {};

function Layout(props) {
  const { children, routes = [], components = {}, getRoute, theme, ...rest } = props;
  const route = getRoute(props);

  const [isMenuOpen, setMenuOpen] = React.useState();

  const isMobile = useMedia({ maxWidth: theme.fannypack.layout.desktopBreakpoint });

  const context = {
    layout: {
      isMenuOpen,
      toggleMenu: () => setMenuOpen(!isMenuOpen),
      openMenu: () => setMenuOpen(true),
      closeMenu: () => setMenuOpen(false),
      isMobile
    },
    routes,
    route
  };

  return (
    <DocsContext.Provider value={context}>
      <Flex width="100%">
        {isMobile && (
          <Button
            onClick={context.layout.openMenu}
            position="fixed"
            kind="ghost"
            height="20px"
            left="0.5rem"
            top="0.5rem"
          >
            <Icon icon="solid-bars" />
          </Button>
        )}
        <Sidebar route={route} />
        <Content breakpoint={route.breakpoint}>
          <MDXStyle components={{ ...components, ...defaultComponents }} {...rest}>
            {children}
          </MDXStyle>
        </Content>
      </Flex>
    </DocsContext.Provider>
  );
}

Layout.defaultProps = {
  getRoute: getNextRoute
};

export default withTheme(Layout);

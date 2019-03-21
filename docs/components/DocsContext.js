import React from 'react';
import useMedia from 'use-media';

const DocsContext = React.createContext();

export function Provider(props) {
  const { children, routes = [], getRoute } = props;
  const route = getRoute(props);

  const [isMenuOpen, setMenuOpen] = React.useState();
  const [theme, setTheme] = React.useState('default');

  const isMobile = useMedia({ maxWidth: 1024 });
  const context = {
    layout: {
      isMenuOpen,
      toggleMenu: () => setMenuOpen(!isMenuOpen),
      openMenu: () => setMenuOpen(true),
      closeMenu: () => setMenuOpen(false),
      isMobile,
      theme,
      setTheme
    },
    routes,
    route
  };

  return <DocsContext.Provider value={context}>{children}</DocsContext.Provider>;
}

const getNextRoute = props => props.routes.find(route => route.path === props.router.pathname) || {};
Provider.defaultProps = {
  getRoute: getNextRoute
};

export function useDocsContext() {
  return React.useContext(DocsContext);
}

export default {
  Provider,
  useDocsContext
};

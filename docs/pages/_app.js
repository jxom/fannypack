import 'babel-polyfill';
import React from 'react';
import App, { Container } from 'next/app';
import * as fannypack from 'fannypack';
import themes from 'fannypack/themes';
import merge from 'lodash/merge';

import Layout from '../components/Layout';
import DocsContext, { useDocsContext } from '../components/DocsContext';
import docsTheme from '../theme';

const routes = [
  { name: 'Home', path: '/', breakpoint: 'tablet' },
  { name: 'Getting started', path: '/getting-started', breakpoint: 'tablet' },
  { menu: 'Components', name: 'ActionButton', path: '/components/actionbutton', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Button', path: '/components/button', breakpoint: 'tablet' },
  { menu: 'Utilities', name: 'Hidden', path: '/utils/hidden', breakpoint: 'tablet' }
];

function Wrapper({ children }) {
  const { layout } = useDocsContext();
  const newTheme = merge(docsTheme, layout.theme === 'medipass' ? themes.medipass : {});
  console.log(newTheme);
  return (
    <fannypack.ThemeProvider theme={{ ...newTheme }}>
      <Container>
        <Layout>{children}</Layout>
      </Container>
    </fannypack.ThemeProvider>
  );
}

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let page = {};

    if (Component.getInitialProps) {
      page = await Component.getInitialProps(ctx);
    }

    return { page };
  }

  // componentDidMount = async () => {
  //   const query = qs.parse(window.location.search);
  //   let newTheme = {};
  //   if (query.theme) {
  //     const module = await import(`../../src/themes/${query.theme}/index`);
  //     newTheme = module.default;
  //   }
  //   this.setState({
  //     theme: merge(docsTheme, newTheme)
  //   });
  // };

  render() {
    const { Component, page, headManager, ...props } = this.props;
    return (
      <DocsContext.Provider {...props} routes={routes}>
        <Wrapper>
          <Component {...page} />
        </Wrapper>
      </DocsContext.Provider>
    );
  }
}

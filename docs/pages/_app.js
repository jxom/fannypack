import 'babel-polyfill';
import React from 'react';
import App, { Container } from 'next/app';
import * as fannypack from 'fannypack';

import Layout from '../components/Layout';
import DocsContext, { useDocsContext } from '../components/DocsContext';

const routes = [
  { name: 'Home', path: '/', breakpoint: 'tablet' },
  { name: 'Getting started', path: '/getting-started', breakpoint: 'tablet' },
  { menu: 'Components', name: 'ActionButton', path: '/components/actionbutton', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Button', path: '/components/button', breakpoint: 'tablet' },
  { menu: 'Utilities', name: 'Hidden', path: '/utils/hidden', breakpoint: 'tablet' }
];

function Wrapper({ children }) {
  const { layout } = useDocsContext();
  return (
    <fannypack.ThemeProvider theme={layout.theme}>
      <Layout>{children}</Layout>
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

  render() {
    const { Component, page, headManager, ...props } = this.props;
    return (
      <Container>
        <DocsContext.Provider {...props} routes={routes}>
          <Wrapper>
            <Component {...page} />
          </Wrapper>
        </DocsContext.Provider>
      </Container>
    );
  }
}

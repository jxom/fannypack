import 'babel-polyfill';
import React from 'react';
import App, { Container } from 'next/app';
import Link from 'next/link';
import * as fannypack from '../../src/index';

import Layout from '../components/Layout';
import theme from '../theme';
import env from '../utils/env';

const routes = [
  { name: 'Home', path: '/', breakpoint: 'tablet' },
  { name: 'Getting started', path: '/getting-started', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Button', path: '/components/button', breakpoint: 'tablet' },
  { menu: 'Utilities', name: 'Hidden', path: '/utils/hidden', breakpoint: 'tablet' }
];

const components = {
  ...fannypack,
  a: ({ href, ...props }) => (
    <Link href={`${env.basePath}${href}`}>
      <fannypack.Link {...props} />
    </Link>
  ),
  blockquote: ({ children }) => (
    <fannypack.Blockquote
      backgroundColor="primaryTint"
      borderColor="primary"
      marginTop="major-2"
      marginBottom="major-2"
    >
      {children}
    </fannypack.Blockquote>
  ),
  h1: ({ children, className, ...props }) => <fannypack.Heading {...props}>{children}</fannypack.Heading>,
  h2: ({ children, className, ...props }) => (
    <fannypack.Heading use="h2" marginTop="major-6" {...props}>
      {children}
    </fannypack.Heading>
  ),
  h3: ({ children, className, ...props }) => (
    <fannypack.Heading use="h3" marginTop="major-6" {...props}>
      {children}
    </fannypack.Heading>
  ),
  h4: ({ children, className, ...props }) => (
    <fannypack.Heading use="h4" marginTop="major-6" {...props}>
      {children}
    </fannypack.Heading>
  ),
  h5: ({ children, className, ...props }) => (
    <fannypack.Heading use="h5" marginTop="major-6" {...props}>
      {children}
    </fannypack.Heading>
  ),
  h6: ({ children, className, ...props }) => (
    <fannypack.Heading use="h6" marginTop="major-6" {...props}>
      {children}
    </fannypack.Heading>
  ),
  hr: ({ children }) => <fannypack.Divider>{children}</fannypack.Divider>,
  p: ({ children }) => <fannypack.Paragraph>{children}</fannypack.Paragraph>,
  strong: ({ children }) => <fannypack.Text fontWeight="semibold">{children}</fannypack.Text>,
  em: ({ children }) => <fannypack.Text use="em">{children}</fannypack.Text>,
  ul: ({ children }) => (
    <fannypack.List listStyleType="disc" listStylePosition="inside">
      {children}
    </fannypack.List>
  ),
  ol: ({ children }) => (
    <fannypack.List isOrdered listStylePosition="inside">
      {children}
    </fannypack.List>
  ),
  li: ({ children }) => <fannypack.List.Item>{children}</fannypack.List.Item>,
  code: ({ children }) => <fannypack.Code>{children}</fannypack.Code>,
  table: ({ children }) => (
    <fannypack.Table isFullWidth isStriped>
      {children}
    </fannypack.Table>
  ),
  tbody: ({ children }) => <fannypack.Table.Body>{children}</fannypack.Table.Body>,
  thead: ({ children }) => <fannypack.Table.Head>{children}</fannypack.Table.Head>,
  tfoot: ({ children }) => <fannypack.Table.Foot>{children}</fannypack.Table.Foot>,
  tr: ({ children }) => <fannypack.Table.Row>{children}</fannypack.Table.Row>,
  td: ({ children }) => <fannypack.Table.Cell>{children}</fannypack.Table.Cell>,
  th: ({ children }) => <fannypack.Table.HeadCell>{children}</fannypack.Table.HeadCell>,
  img: ({ children, ...props }) => <fannypack.Image {...props}>{children}</fannypack.Image>
};

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
      <fannypack.ThemeProvider theme={theme}>
        <Container>
          <Layout {...props} components={components} routes={routes}>
            <Component {...page} />
          </Layout>
        </Container>
      </fannypack.ThemeProvider>
    );
  }
}

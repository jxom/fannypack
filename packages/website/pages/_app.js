import 'parse-prop-types';
import 'babel-polyfill';
import React from 'react';
import App, { Container } from 'next/app';
import * as fannypack from 'fannypack';

import Layout from '../components/Layout';
import DocsContext, { useDocsContext } from '../components/DocsContext';

const routes = [
  { name: 'Home', path: '/', breakpoint: 'tablet' },
  { name: 'Getting started', path: '/getting-started', breakpoint: 'tablet' },
  { name: 'Primitives', path: '/primitives', breakpoint: 'tablet' },
  { name: 'Palette', path: '/palette', breakpoint: 'tablet' },
  { menu: 'Typography', name: 'Blockquote', path: '/typography/blockquote', breakpoint: 'tablet' },
  { menu: 'Typography', name: 'Code', path: '/typography/code', breakpoint: 'tablet' },
  { menu: 'Typography', name: 'Heading', path: '/typography/heading', breakpoint: 'tablet' },
  { menu: 'Typography', name: 'Link', path: '/typography/link', breakpoint: 'tablet' },
  { menu: 'Typography', name: 'List', path: '/typography/list', breakpoint: 'tablet' },
  { menu: 'Typography', name: 'Paragraph', path: '/typography/paragraph', breakpoint: 'tablet' },
  { menu: 'Typography', name: 'Text', path: '/typography/text', breakpoint: 'tablet' },
  { menu: 'Layout', name: 'Columns', path: '/layout/columns', breakpoint: 'tablet' },
  { menu: 'Layout', name: 'Container', path: '/layout/container' },
  { menu: 'Layout', name: 'LayoutSet', path: '/layout/layoutset', breakpoint: 'tablet' },
  { menu: 'Layout', name: 'Pane', path: '/layout/pane', breakpoint: 'tablet' },
  { menu: 'Components', name: 'ActionButtons', path: '/components/actionbuttons', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Alert', path: '/components/alert', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Avatar', path: '/components/avatar', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Badge', path: '/components/badge', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Button', path: '/components/button', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Breadcrumb', path: '/components/breadcrumb', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Callout', path: '/components/callout', breakpoint: 'tablet' },
  { menu: 'Components', name: 'CalloutOverlay', path: '/components/calloutoverlay', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Card', path: '/components/card', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Dialog', path: '/components/dialog', breakpoint: 'tablet' },
  { menu: 'Components', name: 'DialogModal', path: '/components/dialogmodal', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Divider', path: '/components/divider', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Icon', path: '/components/icon', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Image', path: '/components/image', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Markdown', path: '/components/markdown', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Menu', path: '/components/menu', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Navigation', path: '/components/navigation', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Popover', path: '/components/popover', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Rating', path: '/components/rating', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Spinner', path: '/components/spinner', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Table', path: '/components/table', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Tabs', path: '/components/tabs', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Tag', path: '/components/tag', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Timeline', path: '/components/timeline', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Toast', path: '/components/toast', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Tooltip', path: '/components/tooltip', breakpoint: 'tablet' },
  { menu: 'Form', name: 'Checkbox', path: '/form/checkbox', breakpoint: 'tablet' },
  { menu: 'Form', name: 'FieldSet', path: '/form/fieldset', breakpoint: 'tablet' },
  { menu: 'Form', name: 'FieldWrapper', path: '/form/fieldwrapper', breakpoint: 'tablet' },
  { menu: 'Form', name: 'Input', path: '/form/input', breakpoint: 'tablet' },
  { menu: 'Form', name: 'Label', path: '/form/label', breakpoint: 'tablet' },
  { menu: 'Form', name: 'Radio', path: '/form/ra  dio', breakpoint: 'tablet' },
  { menu: 'Form', name: 'RadioGroup', path: '/form/radiogroup', breakpoint: 'tablet' },
  { menu: 'Form', name: 'Select', path: '/form/select', breakpoint: 'tablet' },
  { menu: 'Form', name: 'SelectMenu', path: '/form/selectmenu', breakpoint: 'tablet' },
  { menu: 'Form', name: 'Switch', path: '/form/switch', breakpoint: 'tablet' },
  { menu: 'Form', name: 'Textarea', path: '/form/textarea', breakpoint: 'tablet' },
  { menu: 'Form', name: 'Usage with form libraries', path: '/form/usagewithformlibraries', breakpoint: 'tablet' },
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

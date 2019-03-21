import React from 'react';
import {
  LiveProvider as _LiveProvider,
  LivePreview as _LivePreview,
  LiveEditor as _LiveEditor,
  LiveError as _LiveError
} from 'react-live';
import { withMDXComponents } from '@mdx-js/tag/dist/mdx-provider';

import { palette, styled } from 'components';

const LiveEditor = styled(_LiveEditor)`
  font-family: Menlo, monospace;
  padding: 1em;
  margin: 0;
  background-color: ${palette('white700')};
  overflow-x: auto;
  outline: none;
`;
const LiveError = styled(_LiveError)`
  font-family: Menlo, monospace;
  padding: 1em;
  margin: 0;
  background-color: ${palette('danger')};
  color: ${palette('dangerInverted')};
  overflow-x: auto;
`;
const LivePreview = styled(_LivePreview)`
  padding: 1em;
`;
const LiveProvider = styled(_LiveProvider)`
  border: 1px solid ${palette('white700')};
  border-radius: 2;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const LiveCode = withMDXComponents(({ components, scope, ...props }) => (
  <LiveProvider
    scope={{
      ...components,
      ...scope
    }}
    {...props}
  >
    <LivePreview />
    <LiveEditor />
    <LiveError />
  </LiveProvider>
));

LiveCode.defaultProps = {
  mountStylesheet: false,
  transformCode: src => `<React.Fragment>${src}</React.Fragment>`
};

const REG = /language\-\.jsx/;

export const MDXLive = ({ pre: Pre, fallback: Fallback, match = REG, children, metaString, ...props }) => {
  const isLive = match.test(props.className);
  const Comp = Pre || Fallback;
  if (!isLive) return <Comp {...props}>{children}</Comp>;

  const code = React.Children.toArray(children).join('\n');

  return <LiveCode {...props} code={code} />;
};

export default MDXLive;

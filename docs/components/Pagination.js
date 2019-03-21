import React from 'react';
import { Button, Flex } from '../../src/index';
import Link from 'next/link';
import { withDocs } from 'mdx-docs/dist/context';
import env from '../utils/env';

function Pagination(props) {
  const { routes, route } = props;
  const index = routes.indexOf(route);
  const previous = routes[index - 1];
  const next = routes[index + 1];
  return (
    <Flex justifyContent="space-between">
      {previous && (
        <Link href={`${env.basePath}${previous.path}`}>
          <Button iconBefore="solid-arrow-left" kind="ghost" palette="primary">
            {previous.name}
          </Button>
        </Link>
      )}
      <div />
      {next && (
        <Link href={`${env.basePath}${next.path}`}>
          <Button iconAfter="solid-arrow-right" kind="ghost" palette="primary">
            {next.name}
          </Button>
        </Link>
      )}
    </Flex>
  );
}

export default withDocs(Pagination);

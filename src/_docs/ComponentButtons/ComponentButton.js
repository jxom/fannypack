// @flow

import React, { type Node } from 'react';
import styled from 'reakit/styled';
import Button from '../../Button';
import Heading from '../../Heading';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type Props = {
  children: Node,
  title: string
};

const ComponentButton = ({ children, title, ...props }: Props) => (
  <Wrapper>
    <Button backgroundColor="primaryTint" height={100} width={200} {...props}>
      {children}
    </Button>
    <Heading use="h6" marginTop="12px">
      {title}
    </Heading>
  </Wrapper>
);

export default ComponentButton;

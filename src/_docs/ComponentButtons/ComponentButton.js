// @flow

import React, { type Node } from 'react';
import styled from 'reakit/styled';
import { palette } from 'styled-tools';
import Button from '../../Button';
import Heading from '../../Heading';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BorderedButton = styled(Button)`
  border: 1px solid ${palette.primary};
`;

type Props = {
  children: Node,
  title: string
};

const ComponentButton = ({ children, title, ...props }: Props) => (
  <Wrapper>
    <BorderedButton backgroundColor="primaryTint" height={100} width={200} {...props}>
      {children}
    </BorderedButton>
    <Heading use="h6" marginTop="12px">
      {title}
    </Heading>
  </Wrapper>
);

export default ComponentButton;

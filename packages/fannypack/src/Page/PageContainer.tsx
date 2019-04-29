import * as React from 'react';
import * as PropTypes from 'prop-types';
import Media from 'react-media';
import { Container } from 'reakit';
import { ActionMap, EffectMap } from 'constate/dist/ts/src';

type Actions = {
  openSidebar: () => void;
  closeSidebar: () => void;
};
type State = {
  isSidebarOpen: boolean;
};
export type PageContainerProps = {
  children: (props: Actions & State) => React.ReactNode;
};

const initialState = { isSidebarOpen: false };

const actions: ActionMap<State, Actions> = {
  openSidebar: () => () => ({
    isSidebarOpen: true
  }),
  closeSidebar: () => () => ({
    isSidebarOpen: false
  })
};

export const PageContainer: React.FunctionComponent<PageContainerProps> = ({ children }) => (
  <Container context="page" initialState={initialState} actions={actions}>
    {children}
  </Container>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageContainer;

export const withPage = (C: React.ComponentType<any>) => (props: any) => (
  <PageContainer>{page => <C page={page} {...props} />}</PageContainer>
);

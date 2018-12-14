// @flow
import * as React from 'react';
// @ts-ignore
import ReakitTabs from 'reakit/Tabs';

import _Tabs from './styled';
import Tab, { TabProps } from './Tab';
import TabPanel, { TabPanelProps } from './TabPanel';

export interface LocalTabsProps {
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  className?: string;
  isFitted?: boolean;
  /** Visual type of the tab */
  type?: 'default' | 'boxed';
}

export interface TabsComponents {
  Tab: React.FunctionComponent<TabProps>;
  Panel: React.FunctionComponent<TabPanelProps>;
  Container: React.FunctionComponent<{ children: (...args: any) => React.ReactNode }>;
}

export const Tabs: React.FunctionComponent<LocalTabsProps> & TabsComponents = ({ children, ...props }) => (
  <_Tabs use={ReakitTabs} {...props}>
    {children}
  </_Tabs>
);

Tabs.Tab = Tab;
Tabs.Panel = TabPanel;
Tabs.Container = ReakitTabs.Container;

Tabs.defaultProps = {
  align: undefined,
  className: undefined,
  isFitted: false,
  type: 'default'
};

export default Tabs;

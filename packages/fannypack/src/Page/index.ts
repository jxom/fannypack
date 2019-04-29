import PageContainer from './PageContainer';
import PageContent from './PageContent';
import PageWithSidebar from './PageWithSidebar';

export default { Container: PageContainer, Content: PageContent, WithSidebar: PageWithSidebar };

export * from './PageContent';
export { default as PageContent } from './PageContent';
export * from './PageWithSidebar';
export { default as PageWithSidebar } from './PageWithSidebar';

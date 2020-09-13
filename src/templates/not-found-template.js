// @flow strict
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata, useTheme } from '../hooks';

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Layout title={`Not Found - ${title}`} description={subtitle}>
        <Header />
        <Page title="NOT FOUND">
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Page>
        <Sidebar />
      </Layout>
    </ThemeProvider>
  );
};

export default NotFoundTemplate;

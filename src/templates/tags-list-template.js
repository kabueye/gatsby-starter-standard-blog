// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from '@material-ui/core/styles';

import kebabCase from 'lodash/kebabCase';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata, useTagsList, useTheme } from '../hooks';

const TagsListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const { theme } = useTheme();
  const tags = useTagsList();

  return (
    <ThemeProvider theme={theme}>
      <Layout title={`Tags - ${title}`} description={subtitle}>
        <Header />
        <Page title="Tags">
          <ul>
            {tags.map((tag) => (
              <li key={tag.fieldValue}>
                <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </Page>
        <Sidebar />
      </Layout>
    </ThemeProvider>
  );
};

export default TagsListTemplate;

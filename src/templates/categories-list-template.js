// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from '@material-ui/core/styles';

import kebabCase from 'lodash/kebabCase';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata, useCategoriesList, useTheme } from '../hooks';

const CategoriesListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const { theme } = useTheme();
  const categories = useCategoriesList();

  return (
    <ThemeProvider theme={theme}>
      <Layout title={`Categories - ${title}`} description={subtitle}>
        <Header />
        <Page title="Categories">
          <ul>
            {categories.map((category) => (
              <li key={category.fieldValue}>
                <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
                  {category.fieldValue} ({category.totalCount})
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

export default CategoriesListTemplate;

// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import { ThemeProvider } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Page from '../components/Page';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';
import { useSiteMetadata, useTheme } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

const PostTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { theme } = useTheme();
  const { frontmatter } = data.markdownRemark;
  const { title: postTitle, description: postDescription, socialImage } = frontmatter;
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;
  const socialImageUrl = typeof socialImage !== 'undefined' ? socialImage['publicURL'] : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription} socialImage={socialImageUrl} >
        <Header />
        <Page>
          <Post post={data.markdownRemark} />
        </Page>
        <Sidebar />
      </Layout>
    </ThemeProvider>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        socialImage {
          publicURL
        }
      }
    }
  }
`;

export default PostTemplate;

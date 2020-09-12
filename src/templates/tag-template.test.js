// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import TagTemplate from './tag-template';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import allMarkdownRemark from '../../jest/__fixtures__/all-markdown-remark';
import pageContext from '../../jest/__fixtures__/page-context';
import type { RenderCallback } from '../types';

describe('TagTemplate', () => {
  const mockProps = {
    ...siteMetadata,
    ...allMarkdownRemark
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(mockProps)
      ),
      useStaticQuery.mockReturnValue(mockProps)
    );
  });

  const props = {
    data: {
      ...allMarkdownRemark
    },
    ...pageContext
  };

  it('renders correctly', () => {
    const tree = renderer.create(<TagTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

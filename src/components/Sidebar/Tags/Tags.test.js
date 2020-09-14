// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import Tags from './Tags';
import allMarkdownRemark from '../../../../jest/__fixtures__/all-markdown-remark';
import siteMetadata from '../../../../jest/__fixtures__/site-metadata';
import type { RenderCallback } from '../../../types';

describe('Tags', () => {
  const props = {
    ...siteMetadata,
    ...allMarkdownRemark
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(props)
      ),
      useStaticQuery.mockReturnValue(props)
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Tags />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

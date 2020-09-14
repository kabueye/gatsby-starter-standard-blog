// @flow strict
import React from 'react';
import { useStaticQuery, StaticQuery } from 'gatsby';
import renderer from 'react-test-renderer';
import Meta from './Meta';
import siteMetadata from '../../../../jest/__fixtures__/site-metadata';
import type { RenderCallback } from '../../../types';

describe('Meta', () => {
  const mockProps = {
    ...siteMetadata,
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(mockProps)
      ),
      useStaticQuery.mockReturnValue(mockProps)
    );
  });

  it('renders correctly', () => {
    const props = {
      date: '2016-09-01'
    };

    const tree = renderer.create(<Meta {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

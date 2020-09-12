// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Drawer from './Drawer';

describe('Drawer', () => {
  const props = {
    menu: [
      {
        label: 'Item 0',
        path: '/#0/',
      },
      {
        label: 'Item 1',
        path: '/#1/',
      },
    ],
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Drawer {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

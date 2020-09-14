// @flow strict
import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'gatsby';

import { useSiteMetadata } from '../../hooks';
import styles from './Header.module.scss';
import Menu from './Menu';
import Drawer from './Drawer';

const Header = () => {
  const { title, menu } = useSiteMetadata();

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" className={styles.header__title}>
          {title}
        </Link>
        <Menu menu={menu} />
        <Drawer menu={menu} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

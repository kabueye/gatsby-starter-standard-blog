// @flow strict
import React from 'react';

import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string,
  }[],
};

const Menu = ({ menu }: Props) => (
  <nav className={styles['menu']}>
    {menu.map((item) => (
      <a className={styles['menu__link']} href={item.path} key={item.path}>
        {item.label}
      </a>
    ))}
  </nav>
);

export default Menu;

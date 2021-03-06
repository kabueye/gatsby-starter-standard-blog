// @flow strict
import React from 'react';
import Author from './Author';
import Categories from './Categories';
import Tags from './Tags';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const {
    author,
    copyright,
    menu,
    isShowCategoriesInSidebar,
    isShowTagsInSidebar
  } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        {isShowCategoriesInSidebar && <Categories />}
        {isShowTagsInSidebar && <Tags />}
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;

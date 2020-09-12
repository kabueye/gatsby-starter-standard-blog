// @flow strict
import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'gatsby';
import styles from './Categories.module.scss';
import { useCategoriesList } from '../../../hooks';

const Categories = () => {
  const categories = useCategoriesList();

  return (<div className={styles['categories']}>
      <div className={styles['categories__inner']}>
        <div className={styles['categories__title']}>Categories</div>
        <ul>
          {categories.map((category) => (
            <li key={category.fieldValue}>
              <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;

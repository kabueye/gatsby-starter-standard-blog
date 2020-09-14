// @flow strict
import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'gatsby';
import styles from './Tags.module.scss';
import { useTagsList } from '../../../hooks';

const Tags = () => {
  const tags = useTagsList();

  return (<div className={styles['tags']}>
      <div className={styles['tags__inner']}>
        <div className={styles['tags__title']}>Tags</div>
        <ul>
          {tags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tags;

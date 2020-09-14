// @flow strict
import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';
import { useSiteMetadata } from '../../../hooks';

type Props = {
  date: string
};

const Meta = ({ date }: Props) => {
  const { labelPublished, dateFormat } = useSiteMetadata();

  return (
    <div className={styles['meta']}>
      <p className={styles['meta__date']}>{labelPublished} {moment(date).format(dateFormat)}</p>
    </div>
  );
};

export default Meta;

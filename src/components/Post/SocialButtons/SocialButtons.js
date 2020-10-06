// @flow strict
import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share';
import styles from './SocialButtons.module.scss';

type Props = {
  shareTitle: string,
  articleUrl: string
};

const SocialButtons = ({ shareTitle, articleUrl }: Props) => (
  <div className={styles['socialButtons']}>
    <TwitterShareButton className={styles['socialButtons__twitter']} title={`${shareTitle}\n`} url={articleUrl}>
      <TwitterIcon size={32} round />
    </TwitterShareButton>
    <FacebookShareButton className={styles['socialButtons__facebook']} url={articleUrl} quote={shareTitle}>
      <FacebookIcon size={32} round />
    </FacebookShareButton>
  </div>
);
export default SocialButtons;

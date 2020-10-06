// @flow strict
import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  // HatenaShareButton,
  // HatenaIcon
} from 'react-share';
import styles from './SocialButtons.module.scss';

type Props = {
  shareTitle: string,
  articleUrl: string
};

const SocialButtons = ({ shareTitle, shareUrl }: Props) => (
  <div className={styles['socialButtons']}>
    <TwitterShareButton className={styles['socialButtons__twitter']} title={`${shareTitle}\n`} url={shareUrl}>
      <TwitterIcon size={32} round />
    </TwitterShareButton>
    <FacebookShareButton className={styles['socialButtons__facebook']} url={shareUrl} quote={shareTitle}>
      <FacebookIcon size={32} round />
    </FacebookShareButton>
    {/* <HatenaShareButton className={styles['socialButtons__hatena']} url={shareUrl} title={shareTitle}>
      <HatenaIcon size={32} round />
    </HatenaShareButton> */}
  </div>
);
export default SocialButtons;

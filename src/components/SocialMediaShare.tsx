import { FacebookIcon, FacebookShareButton, RedditIcon, RedditShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import React from 'react';

interface SocialMediaShareProps {
  shareUrl: string;
  title: string;
}
export const SocialMediaShare = ({ shareUrl, title }: SocialMediaShareProps): JSX.Element => {
  return (
    <>
      <h2>Share:</h2>
      <FacebookShareButton url={shareUrl} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <RedditShareButton url={shareUrl} title={title} windowWidth={660} windowHeight={460}>
        <RedditIcon size={32} round />
      </RedditShareButton>
    </>
  );
};

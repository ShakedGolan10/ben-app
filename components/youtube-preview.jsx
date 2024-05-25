import React from 'react';
import Image from 'next/image';

const YouTubePreview = ({ url }) => {
  const extractVideoId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(url);
  const imageUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;

  return (
    imageUrl ? <Image src={imageUrl} alt="YouTube Preview" width={480} height={360} /> : <p>Invalid YouTube URL</p>
  );
};

export default YouTubePreview;
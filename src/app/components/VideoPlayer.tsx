'use client'

import React, { FC, useEffect, useRef, useState } from 'react';

interface Caption {
  text: string;
  startTime: number;
  endTime: number;
}

interface VideoPlayerProps {
  url: string;
  captions: Caption[];
}

const VideoPlayer: FC<VideoPlayerProps> = ({ url, captions }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentCaption, setCurrentCaption] = useState<string>('');

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      const updateTime = () => {
        const currentTime = video.currentTime;
        const activeCaption = captions.find(
          (caption) =>
            currentTime >= caption.startTime && currentTime <= caption.endTime
        );

        setCurrentCaption(activeCaption ? activeCaption.text : '');
      };

      video.addEventListener('timeupdate', updateTime);

      return () => {
        video.removeEventListener('timeupdate', updateTime);
      };
    }
  }, [captions, url]);

  return (
    <div>
      <div>
        <video ref={videoRef} controls>
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className="caption-display"
        style={{
          marginTop: '10px',
          fontSize: '18px',
          color: 'white',
          backgroundColor: 'black',
          textAlign: 'center',
        }}
      >
        {currentCaption}
      </div>
    </div>
  );
};

export default VideoPlayer;

'use client'

import { VideoUrlInput } from "./components/VideoUrlInput";
import CaptionInput from './components/CaptionInput';
import VideoPlayer from './components/VideoPlayer'
import { useState } from "react";


interface Caption {
  text: string;
  startTime: number;
  endTime: number;
}

const Home = () => {

  const [videoUrl, setVideoUrl] = useState<string>('');
  const [captions, setCaptions] = useState<Caption[]>([]);


  const handleUrlChange = (url: string) => {
    setVideoUrl(url);
    setCaptions([]);
  }

  const handleCaptionAdd = (caption: Caption) => {
    setCaptions([...captions, caption]);
  }


  return (
    <main className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-24">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-semibold text-white text-center mb-8">Video Caption Tool</h1>
        <div className="flex flex-col items-center">
          <VideoUrlInput onUrlChange={handleUrlChange} />
          {videoUrl && (
            <>
              <CaptionInput onCaptionAdd={handleCaptionAdd} />
              <div className="flex justify-center w-full">
                <VideoPlayer url={videoUrl} captions={captions} />
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
export default Home;
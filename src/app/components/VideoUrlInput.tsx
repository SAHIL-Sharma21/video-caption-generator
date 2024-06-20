import React, { ChangeEvent, FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface VideoUrlInputProps {
  onUrlChange: (url: string) => void;
}

export const VideoUrlInput: FC<VideoUrlInputProps> = ({ onUrlChange }) => {
  const [url, setUrl] = useState<string>('');

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSubmit = () => {
    onUrlChange(url);
    setUrl("");
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <Input
        type="text"
        placeholder="Enter video URL"
        value={url}
        onChange={handleUrlChange}
        className="w-full px-4 py-2 rounded-md shadow-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      />
      <Button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">
        Upload Video
      </Button>
    </div>
  );
};

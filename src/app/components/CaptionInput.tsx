import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Caption {
  text: string;
  startTime: number;
  endTime: number;
}

interface CaptionInputProps {
  onCaptionAdd: (caption: Caption) => void;
}

const CaptionInput: React.FC<CaptionInputProps> = ({ onCaptionAdd }) => {
  const [text, setText] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCaptionAdd({
      text,
      startTime: parseFloat(startTime),
      endTime: parseFloat(endTime),
    });
    setText('');
    setStartTime('');
    setEndTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-8 mb-8">
      <Input
        type="text"
        placeholder="Enter caption text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        className="w-full px-4 py-2 rounded-md shadow-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="number"
          placeholder="Start time (seconds)"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md shadow-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
        <Input
          type="number"
          placeholder="End time (seconds)"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md shadow-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
      </div>
      <Button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      >
        Add Caption
      </Button>
    </form>
  );
};

export default CaptionInput;

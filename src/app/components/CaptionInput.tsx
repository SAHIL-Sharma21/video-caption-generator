'use client'

import React, { ChangeEvent, FC, useState } from 'react'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'


interface Caption {
    caption: string;
    startTime: string;
    endTime: string
}

interface CaptionInputProps {
    onCaptionAdd: (caption: Caption) => void
}

export const CaptionInput: FC<CaptionInputProps> = ({onCaptionAdd}) => {

    const [caption, setCaption] = useState<string>('');
    const [startTime, setStartTime] = useState<string>('');
    const [endTime, setEndTime] = useState<string>('');

    const handleAddCaption = () => {
        onCaptionAdd({caption, startTime, endTime});
        setCaption("");
        setStartTime("");
        setEndTime("");
    }


  return (
    <>
        <div>
            <Textarea 
            placeholder='Enter the captions of the video'
            value={caption}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setCaption(e.target.value)}
            />
            <Input 
            placeholder='Start Time (sec)'
            type='text'
            value={startTime}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setStartTime(e.target.value)}
            />
            <Input
            placeholder='End Time (sec)'
            type='text'
            value={endTime}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEndTime(e.target.value)}
            />
            <Button onClick={handleAddCaption}>Add Caption</Button>
        </div>
    </>
  )
}

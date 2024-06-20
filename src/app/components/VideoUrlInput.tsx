'use client'

import React, { ChangeEvent, FC, useState } from 'react'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'


interface VideoUrlInput {
    onUrlChange: (url: string) => void
}

export const VideoUrlInput: FC<VideoUrlInput> = ({onUrlChange}) => {

    const [url, setUrl] = useState<string>('');

    const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    }

    const handleSubmit = () => {
        onUrlChange(url);
    }

  return (
    <>
        <div>
            <Input 
            type='text'
            placeholder='Enter video Url'
            value={url}
            onChange={handleUrlChange}
            />
            <Button onClick={handleSubmit}>Upload Video</Button>
        </div>
    </>
  )
}


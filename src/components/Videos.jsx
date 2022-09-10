import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCart, ChannelCart } from './';

const Videos = ({ videos }) => {
    return (
        <Stack direction='row' flexWrap='wrap'
            justifyContent='start' gap={2}>
            {videos.map((item, index) => (
                <Box key={index}>
                    {item.id.videoId && <VideoCart video={item} />}
                    {item.id.channelId && <ChannelCart channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos
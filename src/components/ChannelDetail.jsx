import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCart } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  console.log(channelDetail,videos );
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,90,121,1) 55%, rgba(0,212,255,1) 97%)',
          // background: 'linear-gradient(0deg, rgba(45,44,97,1) 34%, rgba(125,173,255,1) 100%)',
          zIndex: 10,
          height: '300px'}} />
          <ChannelCart channelDetail={channelDetail} marginTop='-110px'>

          </ChannelCart>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} /> 
      </Box>
    </Box>
  )
}

export default ChannelDetail
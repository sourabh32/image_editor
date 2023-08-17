import { Box, Center, Image, Spinner } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';

const GeneratedImage = ({width,height}) => {
    const imageData = useSelector((state) => state.intendedReducer.imageData);
    const status = useSelector((state) => state.intendedReducer.status);
  const error = useSelector((state) => state.intendedReducer.error);
  
  return (
    <Box border="1px solid black" display={"grid"} placeContent={"center"}  >
    {status === 'loading' && <Spinner size="xl" />}
    {status === 'succeeded' && <Image w="200px" h="200px"  objectFit={"cover"} src={imageData} alt="Processed Image" />}
    {status === 'failed' && <p>Error: {error}</p>}
  </Box>

  )
}

export default GeneratedImage
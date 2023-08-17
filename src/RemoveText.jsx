import React, { useState } from 'react';
import { ChakraProvider, Container, Heading, Box,Stack ,Button, Image, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { doIntendedTask } from './redux/slices/intendedTask';
import { changeImage, resetImage } from './redux/slices/imageSlice';
import GeneratedImage from './components.jsx/GeneratedImage';

function RemoveText() {
  
  const dispatch = useDispatch();
  const imageData = useSelector((state) => state.intendedReducer.imageData);
  const status = useSelector((state) => state.intendedReducer.status);
  const error = useSelector((state) => state.intendedReducer.error);
  const photo = useSelector((state)=> state.imageReducer.imageObject)

  const handleTryAnother = () => {
    dispatch(resetImage())
    
  };
  const handleImageUpload = (e) =>{
    dispatch(changeImage(e.target.files[0]))
  }

  const handleFetchImage = async () => {
    
   
    const form = new FormData();
    
    form.append('image_file', photo);
    const endpoint = 'https://clipdrop-api.co/remove-text/v1'
    dispatch(doIntendedTask({form,endpoint}));
  };

  return (
   
<Box p={8} borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Heading as="h1" size="xl" mb={6}>
        Remove Text
      </Heading>
      <Stack spacing={4}>
        <Box>
          {photo ? (
            <Image
              src={URL.createObjectURL(photo)}
              alt="Uploaded Photo"
              maxH="400px"
            />
          ) : (
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          )}
        </Box>
        <Button colorScheme="green" onClick={handleFetchImage}>
          Fetch Results
        </Button>
        <Box>
          <Button colorScheme="blue" onClick={handleTryAnother}>
            Try Another
          </Button>
        </Box>
        <GeneratedImage />
      </Stack>
    </Box>

    
  );
}

export default RemoveText;
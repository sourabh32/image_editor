import React, { useState } from 'react';
import { ChakraProvider, Container, Heading, Box, Button, Image, Input, Center } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { doIntendedTask } from './redux/slices/intendedTask';
import { changeImage, resetImage } from './redux/slices/imageSlice';

function RemoveBg() {
  
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
    const endpoint = 'https://clipdrop-api.co/remove-background/v1'
    dispatch(doIntendedTask({form,endpoint}));
  };

  return (
   
    <Container maxW="container.lg" centerContent py={10}>
    <Box p={8} borderWidth={1} borderRadius="lg" bg="gray.100">
      <Heading color="gray.700" as="h1" size="xl" mb={6}>
        Welcome to My App
      </Heading>
      <Box mb={6}>
        {photo ? (
          <Image src={URL.createObjectURL(photo)} alt="Photo" />
        ) : (
          <Center>
            <input accept="image/*" onChange={handleImageUpload} type="file" />
          </Center>
        )}
      </Box>
      <Button colorScheme="green" onClick={handleFetchImage}>
        Fetch Results
      </Button>
      {status === 'succeeded' && (
        <Box mt={4}>
          <Image src={imageData} alt="Processed Image" />
        </Box>
      )}
      {status === 'loading' && <Center mt={4}>Loading...</Center>}
      {status === 'failed' && (
        <Center mt={4} color="red.500">
          Error: {error}
        </Center>
      )}
    </Box>
    <Box mt={6}>
      <Button colorScheme="blue" onClick={handleTryAnother}>
        Try Another
      </Button>
    </Box>
  </Container>
    
  );
}

export default RemoveBg;


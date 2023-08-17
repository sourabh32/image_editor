import React, { useState } from 'react';
import { ChakraProvider, Container, Heading, Box, Button, Image, Input, HStack, Stack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { doIntendedTask } from './redux/slices/intendedTask';
import { changeImage, resetImage } from './redux/slices/imageSlice';
import GeneratedImage from './components.jsx/GeneratedImage';

function TextToImage() {
const [prompt,setPrompt] = useState("")
  const dispatch = useDispatch();
  
  

//   const handleTryAnother = () => {
//     dispatch(resetImage())
    
//   };
//   const handleImageUpload = (e) =>{
//     dispatch(changeImage(e.target.files[0]))
//   }

  const handleFetchImage = async () => {
   
   
    const form = new FormData();
   
    form.append('prompt', prompt);
    const endpoint = 'https://clipdrop-api.co/text-to-image/v1'
    dispatch(doIntendedTask({form,endpoint}));
    
  };

  return (
    <Box
    fontFamily="poppins"
    display="flex"
    flexDirection="column"
    alignItems="center"
    p="5"
    minHeight="80vh"
    mx="auto"
    textAlign="center"
  >
    <Heading as="h1" size="lg" my={2}>
      Text To Image
    </Heading>

    <GeneratedImage   />

    <Stack w="90%" gap="5" direction={["column", "row"]} mt={4}>
      <Input
        value={prompt}
        placeholder="Enter description..."
        type="text"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <Button colorScheme="green" onClick={handleFetchImage}>
        Generate
      </Button>
    </Stack>
  </Box>

    
  );
}

export default TextToImage;
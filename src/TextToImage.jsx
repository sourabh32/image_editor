import React, { useState } from 'react';
import { ChakraProvider, Container, Heading, Box, Button, Image, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { doIntendedTask } from './redux/slices/intendedTask';
import { changeImage, resetImage } from './redux/slices/imageSlice';

function TextToImage() {
const [prompt,setPrompt] = useState("")
  const dispatch = useDispatch();
  const imageData = useSelector((state) => state.intendedReducer.imageData);
  const status = useSelector((state) => state.intendedReducer.status);
  const error = useSelector((state) => state.intendedReducer.error);
  const photo = useSelector((state)=> state.imageReducer.imageObject)

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
   
      <Container maxW="container.lg" centerContent>
        <Heading as="h1" size="xl" my={6}>
          text To image
        </Heading>
        <input value={prompt} placeholder='enter desciption' type="text" onChange={(e)=>setPrompt(e.target.value)} />
        <Button colorScheme="green" onClick={handleFetchImage}>
            fetch results
          </Button>
       
        {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <img src={imageData} alt="Processed Image" />}
      {status === 'failed' && <p>Error: {error}</p>}
      </Container>
    
  );
}

export default TextToImage;
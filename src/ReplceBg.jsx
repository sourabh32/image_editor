import React, { useState } from 'react';
import { ChakraProvider, Container, Heading, Box, Button, Image, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { doIntendedTask } from './redux/slices/intendedTask';
import { changeImage, resetImage } from './redux/slices/imageSlice';

function ReplaceBg() {
  const [prompt,setPrompt] = useState("")
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
    form.append('prompt', prompt);
    form.append('image_file', photo);
    const endpoint = 'https://clipdrop-api.co/replace-background/v1'
    dispatch(doIntendedTask({form,endpoint}));
    setPrompt("")
  };

  return (
   
      <Container maxW="container.lg" centerContent>
        <Heading as="h1" size="xl" my={6}>
          Replace
        </Heading>
        <Box my={6}>
          {photo ? (
            <Image src={URL.createObjectURL(photo)} alt="Photo" />
          ) : (<>
            <input accept="image/*" onChange={handleImageUpload}  type="file" />
            <hr />
             <input placeholder='enter desciption' type="text" onChange={(e)=>setPrompt(e.target.value)} />
             </>
          )}
        </Box>
        <Button colorScheme="green" onClick={handleFetchImage}>
            fetch results
          </Button>
        <Box my={6}>
          <Button colorScheme="blue" mr={4} onClick={handleTryAnother}>
            Try Another
          </Button>
          
        </Box>
        {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <img src={imageData} alt="Processed Image" />}
      {status === 'failed' && <p>Error: {error}</p>}
      </Container>
    
  );
}

export default ReplaceBg;
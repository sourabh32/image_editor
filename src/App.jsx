import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ImageFetcher from './AiImage'
import FilterContainer from './FilterContainer'
import FilterImage from './FilterImage'
import ImageUploadComponent from './Newcomp'
import OptionBar from './OptionBar'
import RemoveBg from './RemoveBg'
import { filterValues } from './assets/stylefiles'


import React from 'react'
import ReplaceBg from './ReplceBg'
import Reimagine from './Reimageine'
import TextToImage from './TextToImage'
import RemoveText from './RemoveText'
import SketchToImage from './SketchToImage'
import Header from './Header'
import CustomFilter from './CustomFilters'
import { Box, Container } from '@chakra-ui/react'


const App = () => {
  return (
    <Box display={"grid"} placeContent={"center"} fontFamily={"poppins"} p="5" className="app">
      
   <BrowserRouter>
   <Header />
  <Container my="5" fontFamily={"poppins"} borderRadius={"lg"}  bg="#F6F4EB" maxW={"container.lg"}>
   <Routes>
    <Route path="/" element={<TextToImage />} />
    <Route path="/replace" element={<ReplaceBg/>} />
    <Route path="/reimagine" element={<Reimagine />} />
    <Route path="/remove" element={<RemoveBg />} />
    <Route path="/sketchToImage" element={<SketchToImage  />} />
    
    <Route path="/removeText" element={<RemoveText/>} />
    <Route path="/customFilters" element={<CustomFilter   />} />
    <Route path="/preFilters" element={<FilterContainer   />} />
    
   </Routes>
   </Container>
  

   </BrowserRouter>
   </Box>
  )
  
}

export default App

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


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<TextToImage />} />
    <Route path="/replace" element={<ReplaceBg/>} />
    <Route path="/reimagine" element={<Reimagine />} />
    <Route path="/remove" element={<RemoveBg />} />
   </Routes>

{/* <ImageUploadComponent /> */}
   {/* <FilterImage />
   <OptionBar /> */}
   </BrowserRouter>
  )
}

export default App

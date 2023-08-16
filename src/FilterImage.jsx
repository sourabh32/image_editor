import React from 'react'
import img from "./assets/sourabh.jpeg"
import { useSelector } from 'react-redux'

const FilterImage = () => {
    const filter  = useSelector(state => state.filterReducer.filterObject)
    const custom  = useSelector(state => state.customReducer.customObject)
    
    const form = new FormData()
form.append('prompt', 'shot of vaporwave fashion dog in miami')

fetch('https://clipdrop-api.co/text-to-image/v1', {
  method: 'POST',
  headers: {
    'x-api-key':'99a3faa1d06ee6e311ede51d5d32aee63102d163ff9ab819c5e11735d5afdce0e0a45067f5d8ed7d2d4ebcbec3b7c894' ,
  },
  body: form,
})
  .then(response => response.arrayBuffer())
  .then(buffer => {
    
    
  })
  return (
    <div style={{ width: "400px", height: "400px", border: "1px solid black",margin:"10vh auto" }}>
  <img className={filter.class}  src={img} style={{ width: "100%", height: "100%", objectFit: "cover",...custom }} alt="Image" />
  <p>{filter.name}</p>
</div>

  )
}

export default FilterImage
import React from 'react'
import img from "./assets/sourabh.jpeg"
import { useSelector } from 'react-redux'

const FilterImage = () => {
    const filter  = useSelector(state => state.filterReducer.filterObject)
    const custom  = useSelector(state => state.customReducer.customObject)
    
    console.log(custom)
  return (
    <div style={{ width: "400px", height: "400px", border: "1px solid black",margin:"10vh auto" }}>
  <img className={filter.class}  src={img} style={{ width: "100%", height: "100%", objectFit: "cover",...custom }} alt="Image" />
  <p>{filter.name}</p>
</div>

  )
}

export default FilterImage
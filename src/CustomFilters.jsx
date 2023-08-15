import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { customFilter } from './redux/slices/customSlice';
const initial = {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    blur: 0,
    grayscale: 0,
    hue: 0,
    invert: 0,
    opacity: 100,
    sepia: 0,
  }

const CustomFilter = () => {
  const [filterValues, setFilterValues] = useState(initial);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const filterStyle = {
    filter: `
      brightness(${filterValues.brightness}%)
      contrast(${filterValues.contrast}%)
      saturate(${filterValues.saturation}%)
      blur(${filterValues.blur}px)
      grayscale(${filterValues.grayscale}%)
      hue-rotate(${filterValues.hue}deg)
      invert(${filterValues.invert}%)
      opacity(${filterValues.opacity}%)
      sepia(${filterValues.sepia}%)
    `,
  };

  

  const dispatch = useDispatch()
//   useEffect(()=>{
//     dispatch(customFilter(filterStyle))

//   },[filterValues])

  return (
    <div>
     
      <div>
        <label>
          Brightness:
          <input
            type="range"
            name="brightness"
            value={filterValues.brightness}
            onChange={handleFilterChange}
            min={0}
            max={200}
          />
        </label>
        
        <label>
          contrast:
          <input
            type="range"
            name="contrast"
            value={filterValues.contrast}
            onChange={handleFilterChange}
            min={0}
            max={200}
          />
        </label>
        <label>
          Saturation:
          <input
            type="range"
            name="saturation"
            value={filterValues.saturation}
            onChange={handleFilterChange}
            min={0}
            max={200}
          />
        </label>
        <label>
          Blur:
          <input
            type="range"
            name="blur"
            value={filterValues.blur}
            onChange={handleFilterChange}
            min={0}
            max={200}
          />
        </label>
        <label>
          GrayScale:
          <input
            type="range"
            name="grayscale"
            value={filterValues.grayscale}
            onChange={handleFilterChange}
            min={0}
            max={100}
          />
        </label>
        <label>
          hue:
          <input
            type="range"
            name="hue"
            value={filterValues.hue}
            onChange={handleFilterChange}
            min={0}
            max={360}
          />
        </label>
        <label>
          invert:
          <input
            type="range"
            name="invert"
            value={filterValues.invert}
            onChange={handleFilterChange}
            min={0}
            max={100}
          />
        </label>
        <label>
          opacity:
          <input
            type="range"
            name="opacity"
            value={filterValues.opacity}
            onChange={handleFilterChange}
            min={0}
            max={100}
          />
        </label>
        <label>
          sepia:
          <input
            type="range"
            name="sepia"
            value={filterValues.sepia}
            onChange={handleFilterChange}
            min={0}
            max={100}
          />
        </label>
      
      </div>
      <button onClick={()=>setFilterValues(initial)}>reset</button>
    </div>
  );
};

export default CustomFilter;

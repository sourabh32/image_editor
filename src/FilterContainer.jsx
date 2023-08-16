import React, { useEffect, useState, useCallback } from 'react';
import FilterImage from './FilterImage';
import { filterValues } from './assets/stylefiles';
import { useDispatch } from 'react-redux';
import { changeFilter } from './redux/slices/filterSlice';
import CustomFilter from './CustomFilters';

const FilterContainer = () => {
  const dispatch = useDispatch();
  const [currentFilterIndex, setCurrentFilterIndex] = useState(0);

  const handleNextFilter = useCallback(() => {
    setCurrentFilterIndex(prevIndex => (prevIndex + 1) % filterValues.length);
  }, []);

  const handlePrevFilter = useCallback(() => {
    setCurrentFilterIndex(prevIndex => (prevIndex - 1 + filterValues.length) % filterValues.length);
  }, []);

  useEffect(() => {
    dispatch(changeFilter(filterValues[currentFilterIndex]));
  }, [ currentFilterIndex]);

  return (
    <div style={{ display: 'flex', gap: '20px',flexDirection:"column",alignItems:"center" }}>
      <button onClick={handlePrevFilter}>prev</button>
      
      <button onClick={handleNextFilter}>next</button>
     
    </div>
  );
};

export default React.memo(FilterContainer);
